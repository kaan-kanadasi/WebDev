class MultiStepForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.isYearly = false;
        this.selectedPlan = null;
        this.selectedAddons = [];
        this.formData = {};

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateSidebar();
        this.selectDefaultPlan();
    }

    bindEvents() {
        // Navigation buttons
        const nextBtn = document.getElementById('next-step-btn');
        const backBtn = document.getElementById('go-back-btn');
        
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextStep());
        if (backBtn) backBtn.addEventListener('click', () => this.prevStep());

        // Sidebar navigation
        const sideButtons = document.querySelectorAll('.side-btn');
        sideButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => this.goToStep(index + 1));
        });

        // Plan selection
        const plans = document.querySelectorAll('.plan');
        plans.forEach(plan => {
            plan.addEventListener('click', () => this.selectPlan(plan));
        });

        // Billing toggle
        const billingSwitch = document.getElementById('billing-switch');
        if (billingSwitch) {
            billingSwitch.addEventListener('change', () => this.toggleBilling());
        }

        // Add-on selection
        const addons = document.querySelectorAll('.addon');
        addons.forEach(addon => {
            const checkbox = addon.querySelector('input[type="checkbox"]');
            addon.addEventListener('click', (e) => {
                if (e.target.type !== 'checkbox') {
                    checkbox.checked = !checkbox.checked;
                }
                this.toggleAddon(addon);
            });
        });

        // Change plan link in summary
        const changePlanLink = document.getElementById('change-plan');
        if (changePlanLink) {
            changePlanLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToStep(2);
            });
        }

        // Form validation
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    selectDefaultPlan() {
        const firstPlan = document.querySelector('.plan');
        if (firstPlan) {
            this.selectPlan(firstPlan);
        }
    }

    nextStep() {
        if (this.currentStep === 1 && !this.validateStep1()) {
            return;
        }

        if (this.currentStep === 2 && !this.selectedPlan) {
            this.showError('Please select a plan');
            return;
        }

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateStep();
            
            if (this.currentStep === 4) {
                this.updateSummary();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStep();
        }
    }

    goToStep(step) {
        if (step >= 1 && step <= this.totalSteps) {
            this.currentStep = step;
            this.updateStep();
            
            if (this.currentStep === 4) {
                this.updateSummary();
            }
        }
    }

    updateStep() {
        // Hide all step panels
        const stepPanels = document.querySelectorAll('.step-panel');
        stepPanels.forEach(panel => panel.classList.remove('active'));

        // Show current step panel
        const currentPanel = document.getElementById(`step-${this.currentStep}`);
        if (currentPanel) {
            currentPanel.classList.add('active');
        }

        this.updateSidebar();
        this.updateNavButtons();
    }

    updateSidebar() {
        const sideButtons = document.querySelectorAll('.side-btn');
        sideButtons.forEach((btn, index) => {
            btn.classList.toggle('active', index + 1 === this.currentStep);
        });
    }

    updateNavButtons() {
        const nextBtn = document.getElementById('next-step-btn');
        const backBtn = document.getElementById('go-back-btn');
        const navButtons = document.getElementById('nav-buttons');

        if (this.currentStep === 1) {
            if (backBtn) backBtn.style.display = 'none';
        } else {
            if (backBtn) backBtn.style.display = 'block';
        }

        if (this.currentStep === 4) {
            if (nextBtn) {
                nextBtn.textContent = 'Confirm';
                nextBtn.classList.add('confirm-btn');
            }
        } else if (this.currentStep === 5) {
            if (navButtons) navButtons.style.display = 'none';
        } else {
            if (nextBtn) {
                nextBtn.textContent = 'Next Step';
                nextBtn.classList.remove('confirm-btn');
            }
        }
    }

    validateStep1() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email-address');
        const phoneInput = document.getElementById('phone-number');

        let isValid = true;

        if (!this.validateField(nameInput)) isValid = false;
        if (!this.validateField(emailInput)) isValid = false;
        if (!this.validateField(phoneInput)) isValid = false;

        return isValid;
    }

    validateField(input) {
        const value = input.value.trim();
        const fieldName = input.getAttribute('id');
        const errorElement = document.getElementById(`${fieldName}-error`);

        let isValid = true;
        let errorMessage = '';

        if (!value) {
            errorMessage = 'This field is required';
            isValid = false;
        } else if (input.type === 'email' && !this.isValidEmail(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        } else if (input.type === 'tel' && !this.isValidPhone(value)) {
            errorMessage = 'Please enter a valid phone number';
            isValid = false;
        }

        if (errorElement) {
            errorElement.textContent = errorMessage;
        }

        input.classList.toggle('error', !isValid);
        return isValid;
    }

    clearError(input) {
        const fieldName = input.getAttribute('id');
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (errorElement) {
            errorElement.textContent = '';
        }
        input.classList.remove('error');
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    }

    selectPlan(planElement) {
        // Remove selection from all plans
        document.querySelectorAll('.plan').forEach(plan => {
            plan.classList.remove('selected');
        });

        // Add selection to clicked plan
        planElement.classList.add('selected');

        // Store selected plan data
        this.selectedPlan = {
            name: planElement.dataset.plan,
            monthly: parseInt(planElement.dataset.monthly),
            yearly: parseInt(planElement.dataset.yearly),
            element: planElement
        };
    }

    toggleBilling() {
        this.isYearly = !this.isYearly;
        
        // Update toggle labels
        const toggleLabels = document.querySelectorAll('.toggle-label');
        toggleLabels.forEach((label, index) => {
            label.classList.toggle('active', 
                (index === 0 && !this.isYearly) || (index === 1 && this.isYearly)
            );
        });

        // Update plan prices and yearly bonuses
        const plans = document.querySelectorAll('.plan');
        plans.forEach(plan => {
            const priceElement = plan.querySelector('.plan-price');
            const bonusElement = plan.querySelector('.yearly-bonus');
            const monthly = parseInt(plan.dataset.monthly);
            const yearly = parseInt(plan.dataset.yearly);

            if (this.isYearly) {
                priceElement.textContent = `$${yearly}/yr`;
                bonusElement.classList.add('show');
            } else {
                priceElement.textContent = `$${monthly}/mo`;
                bonusElement.classList.remove('show');
            }
        });

        // Update addon prices
        const addons = document.querySelectorAll('.addon');
        addons.forEach(addon => {
            const priceElement = addon.querySelector('.addon-price');
            const monthly = parseInt(addon.dataset.monthly);
            const yearly = parseInt(addon.dataset.yearly);

            if (this.isYearly) {
                priceElement.textContent = `+$${yearly}/yr`;
            } else {
                priceElement.textContent = `+$${monthly}/mo`;
            }
        });
    }

    toggleAddon(addonElement) {
        const checkbox = addonElement.querySelector('input[type="checkbox"]');
        const addonData = {
            name: addonElement.dataset.addon,
            monthly: parseInt(addonElement.dataset.monthly),
            yearly: parseInt(addonElement.dataset.yearly),
            element: addonElement
        };

        addonElement.classList.toggle('selected', checkbox.checked);

        if (checkbox.checked) {
            // Add addon if not already in array
            if (!this.selectedAddons.some(addon => addon.name === addonData.name)) {
                this.selectedAddons.push(addonData);
            }
        } else {
            // Remove addon from array
            this.selectedAddons = this.selectedAddons.filter(
                addon => addon.name !== addonData.name
            );
        }
    }

    updateSummary() {
        if (!this.selectedPlan) return;

        // Update plan summary
        const planNameElement = document.getElementById('selected-plan-name');
        const planPriceElement = document.getElementById('selected-plan-price');
        const billingPeriodElement = document.getElementById('billing-period');

        const planName = this.capitalize(this.selectedPlan.name);
        const billingType = this.isYearly ? 'Yearly' : 'Monthly';
        const planPrice = this.isYearly ? this.selectedPlan.yearly : this.selectedPlan.monthly;
        const priceSuffix = this.isYearly ? '/yr' : '/mo';

        if (planNameElement) {
            planNameElement.textContent = `${planName} (${billingType})`;
        }
        if (planPriceElement) {
            planPriceElement.textContent = `$${planPrice}${priceSuffix}`;
        }
        if (billingPeriodElement) {
            billingPeriodElement.textContent = this.isYearly ? '(per year)' : '(per month)';
        }

        // Update addons summary
        const summaryAddonsElement = document.getElementById('summary-addons');
        if (summaryAddonsElement) {
            summaryAddonsElement.innerHTML = '';

            this.selectedAddons.forEach(addon => {
                const addonPrice = this.isYearly ? addon.yearly : addon.monthly;
                const addonDiv = document.createElement('div');
                addonDiv.className = 'summary-addon';
                addonDiv.innerHTML = `
                    <span>${this.capitalize(addon.name.replace('-', ' '))}</span>
                    <span>+$${addonPrice}${priceSuffix}</span>
                `;
                summaryAddonsElement.appendChild(addonDiv);
            });
        }

        // Calculate and update total
        this.updateTotal();
    }

    updateTotal() {
        if (!this.selectedPlan) return;

        const planPrice = this.isYearly ? this.selectedPlan.yearly : this.selectedPlan.monthly;
        const addonsTotal = this.selectedAddons.reduce((total, addon) => {
            return total + (this.isYearly ? addon.yearly : addon.monthly);
        }, 0);

        const totalPrice = planPrice + addonsTotal;
        const priceSuffix = this.isYearly ? '/yr' : '/mo';

        const totalElement = document.getElementById('total-amount');
        if (totalElement) {
            totalElement.textContent = `$${totalPrice}${priceSuffix}`;
        }
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    showError(message) {
        // Simple error display - could be enhanced with a modal or toast
        alert(message);
    }

    // Method to collect all form data
    collectFormData() {
        return {
            personalInfo: {
                name: document.getElementById('name')?.value || '',
                email: document.getElementById('email-address')?.value || '',
                phone: document.getElementById('phone-number')?.value || ''
            },
            plan: this.selectedPlan,
            addons: this.selectedAddons,
            isYearly: this.isYearly,
            totalPrice: this.calculateTotal()
        };
    }

    calculateTotal() {
        if (!this.selectedPlan) return 0;

        const planPrice = this.isYearly ? this.selectedPlan.yearly : this.selectedPlan.monthly;
        const addonsTotal = this.selectedAddons.reduce((total, addon) => {
            return total + (this.isYearly ? addon.yearly : addon.monthly);
        }, 0);

        return planPrice + addonsTotal;
    }
}

// Initialize the form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MultiStepForm();
});

// Add some CSS for error states
const style = document.createElement('style');
style.textContent = `
    input.error {
        border-color: var(--red-500) !important;
    }
    
    .error-message {
        display: block !important;
    }
`;
document.head.appendChild(style);