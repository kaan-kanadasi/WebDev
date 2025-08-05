const button_steps = document.querySelectorAll(".side-btn");
const plans = document.querySelectorAll(".plan");
const invisible_for_monthly = document.querySelectorAll('.invisible-for-monthly');
const plan_price_for_calc = document.querySelectorAll(".plan-price-for-calc");
const month_year_sign = document.querySelectorAll(".month-year-sign");
const billing_switch = document.querySelector("#billing-switch")
const switch_input = document.querySelector(".switch input");
const monthly_billing = document.getElementById('monthly-billing');
const yearly_billing = document.getElementById('yearly-billing');
const go_back_button = document.getElementById("go-back-btn");
const next_button = document.getElementById("next-step-btn");
const error_parent_container = document.getElementsByClassName('error-label-container');
const plan_type_summary_page = document.getElementById('plan-type-summary-page');
const change_button_summary = document.getElementById('change-button-summary');
const arcade_plan = document.getElementById('arcade-plan');
const advanced_plan = document.getElementById('advanced-plan');
const pro_plan = document.getElementById('pro-plan');
const online_service = document.getElementById("online-service");
const larger_storage = document.getElementById('larger-storage');
const customizable_profile = document.getElementById('customizable-profile');
const total_display = document.getElementById('total-display');
const multiple_add_ons_container = document.getElementById("multiple-add-ons-container");
const steps = 
[
    document.getElementById("step-1"),
    document.getElementById("step-2"),
    document.getElementById("step-3"),
    document.getElementById("step-4"),
    document.getElementById("step-5")
];
let monthly_summary_plan_text = document.getElementById('monthly-summary-plan-text');
let year_or_month_summary_total = document.getElementById('year-or-month-summary-total');
let summary_plan_type_price = document.getElementById('summary-plan-type-price');
let input_name = document.getElementById('name');
let input_email_adress = document.getElementById('email-adress');
let input_phone_number = document.getElementById('phone-number');
let error_name = document.getElementById("error-name");
let error_email = document.getElementById("error-email");
let error_phone = document.getElementById("error-phone");
let total = 0;
let currentStep = 0;
let online_service_total = 0;
let larger_storage_total = 0;
let customizable_profile_total = 0;
let type_plan_price = 0;
let plan_type = "Arcade";
let is_empty_name = true;
let is_email_adress = true;
let is_phone_number = true;
let switch_on_monthly = true;
let online_service_clicked = false;
let larger_storage_clicked = false;
let customizable_profile_clicked = false;
let selectedPlan = arcade_plan;

function showStep(index) 
{
  steps.forEach((step, i) => {
    if(currentStep === 0) 
    {
        go_back_button.style.opacity = "0"; 
        go_back_button.style.pointerEvents = "none";
    } else {
        go_back_button.style.opacity = "1"; 
        go_back_button.style.pointerEvents = "auto";
    } 

    if(currentStep === 3)  next_button.innerHTML = "Confirm"; 
    else next_button.innerHTML = "Next Step"; 

    if(currentStep === 4) 
    {
        go_back_button.style.display = "none"; 
        next_button.style.display = "none"; 
    }

    if (i === index) 
    { 
        step.classList.add("active"); 
        button_steps[i].classList.add("active-side-button")
    } else { 
        step.classList.remove("active"); 
        button_steps[i].classList.remove("active-side-button")
    }
  });
}

function createErrorMessage() 
{
  const error = document.createElement("p");
  error.textContent = "This field is required";;
  error.style.color = "red";
  return error;
}

function checkError() 
{
    error_name.innerHTML = "";
    error_email.innerHTML = "";
    error_phone.innerHTML = "";

    if (is_empty_name) 
    {
        input_name.classList.add("input-error");
        error_name.appendChild(createErrorMessage());
    } 
    if (is_email_adress) 
    {
        input_email_adress.classList.add("input-error");
        error_email.appendChild(createErrorMessage());
    } 
    if (is_phone_number) 
    {
        input_phone_number.classList.add("input-error");
        error_phone.appendChild(createErrorMessage());
    } 
}

function nextPage()  
{
    if(canBePassedToNextPage()) 
    {
        input_name.classList.remove("input-error");
        input_email_adress.classList.remove("input-error"); 
        input_phone_number.classList.remove("input-error");

        if (currentStep < steps.length - 1) showStep(++currentStep);
    } else checkError();
}

function backPage() 
{
    if (currentStep > 0) showStep(--currentStep);
}

function finalCheckInput() 
{
    is_empty_name = input_name.value.trim() === ""; 
    is_email_adress = input_email_adress.value.trim() === "";
    is_phone_number = input_phone_number.value.trim() === "";
}

function canBePassedToNextPage()
{
    finalCheckInput();
    return !(is_empty_name || is_email_adress || is_phone_number);
}

function clearErrorOnInput(inputElement, errorElement, isErrorFlag) {
    inputElement.addEventListener("input", () => {
        if (inputElement.value.trim() !== "") {
            inputElement.classList.remove("input-error");
            errorElement.innerHTML = "";
            if (isErrorFlag === "name") is_empty_name = false;
            if (isErrorFlag === "email") is_email_adress = false;
            if (isErrorFlag === "phone") is_phone_number = false;
        } else checkError();
    });
}

function calculateSummary() 
{
    multiple_add_ons_container.innerHTML = "";

    selectedPlan = document.querySelector(".plan.plan-clicked");
    if (!selectedPlan) selectedPlan = arcade_plan;

    const planPriceElem = selectedPlan.querySelector(".plan-price-for-calc");
    if (planPriceElem) type_plan_price = parseInt(planPriceElem.textContent);
    total = type_plan_price;

    if(online_service_clicked) 
    { 
        online_service_total = switch_on_monthly ? 1 : 10;
        createAddsOnsElement('Online Service', online_service_total) 
    }
    if(larger_storage_clicked) 
    {
        larger_storage_total = switch_on_monthly ? 2 : 20;
        createAddsOnsElement('Larger Storage', larger_storage_total) 
    }
    if(customizable_profile_clicked) 
    {
        customizable_profile_total = switch_on_monthly ? 2 : 20;
        createAddsOnsElement('Customizable Profile', customizable_profile_total) 
    }
    total += online_service_total + larger_storage_total + customizable_profile_total;

    return total;
}

function updateTotal() 
{
    total_display.innerHTML = calculateSummary().toString();
}

function resetForChangeButton() 
{
    online_service_total = 0;
    larger_storage_total = 0;
    customizable_profile_total = 0;
    type_plan_price = 0;
    selectedPlan = arcade_plan;
    if (!selectedPlan) selectedPlan = arcade_plan;
    plan_type = "Arcade";
    monthly_billing.style.fontWeight = 'bold';
    yearly_billing.style.fontWeight = 'normal';
    invisible_for_monthly.forEach(e => e.style.display = "none");
    month_year_sign.forEach(sign => sign.innerHTML = "/mo");
    billing_switch.checked = false; 
    online_service.checked = false;
    larger_storage.checked = false;
    customizable_profile.checked = false;
    is_empty_name = true;
    is_email_adress = true;
    is_phone_number = true;
    switch_on_monthly = true;
    online_service_clicked = false;
    larger_storage_clicked = false;
    customizable_profile_clicked = false;
}

function resetAll() 
{
    resetForChangeButton();
    total = 0;
    currentStep = 0;
    input_name.value = "";
    input_email_adress.value = "";
    input_phone_number.value = "";
    updateTotal();
    updateSummaryUI();
}

input_name.addEventListener('input', () => {
    if (input_name.value.trim() === "") is_empty_name = true; 
    else is_empty_name = false; 
});

input_email_adress.addEventListener('input', () => {
    if (input_email_adress.value.trim() === "") is_email_adress = true; 
    else is_email_adress = false; 
});

input_phone_number.addEventListener('input', () => {
    if (input_phone_number.value.trim() === "") is_phone_number = true; 
    else is_phone_number = false; 
});

// iterate throught Node List type_of_plan
plans.forEach(plan => {
    plan.addEventListener("click", () => {
        plans.forEach(element => element.classList.remove("plan-clicked")); // for each eleemtn it remvoes the plan-clicked class when clicked 
        plan.classList.add("plan-clicked"); // then adds the class to the clicked button 

        if(arcade_plan.classList.contains("plan-clicked")) plan_type = "Arcade";
        else if(advanced_plan.classList.contains("plan-clicked")) plan_type = "Advanced";
        else if(pro_plan.classList.contains("plan-clicked")) plan_type = "Pro";

        updateTotal();
        updateSummaryUI();
    });
});

function updateSummaryUI() 
{
    plan_type_summary_page.innerText = plan_type;
    summary_plan_type_price.innerText = `$${type_plan_price}`;
}

function createAddsOnsElement(titleAddOns, priceAddOns) 
{
    const add_ons_Div = document.createElement("div");
    add_ons_Div.classList.add("summary-add-ons-container");
    add_ons_Div.innerHTML = 
    `
        <span class="summary-add-ons-title">${titleAddOns}</span>
        <span class="summary-add-ons-price">+$${priceAddOns}<span class="month-year-sign">/mo</span></span>
    `;
    multiple_add_ons_container.appendChild(add_ons_Div);
}

billing_switch.addEventListener('change', () => {
    if(billing_switch.checked) 
    {
        monthly_billing.style.fontWeight = 'normal';
        yearly_billing.style.fontWeight = 'bold';
    } else {
        monthly_billing.style.fontWeight = 'bold';
        yearly_billing.style.fontWeight = 'normal';
    }
});

switch_input.addEventListener("change", e => {
    switch_on_monthly = !e.target.checked;

    if(!switch_on_monthly) 
    {
        plans.forEach(plan => plan.classList.add("plan-enlarged-for-yearly"));
        invisible_for_monthly.forEach(e => e.style.display = "block");
        plan_price_for_calc.forEach(price => price.innerHTML = (parseInt(price.innerHTML) * 10).toString());
        month_year_sign.forEach(sign => sign.innerHTML = "/yr");
        monthly_summary_plan_text.textContent = "(Yearly)";
        year_or_month_summary_total.textContent = "year";
        type_plan_price *= 10;
    } 
    else 
    {
        plans.forEach(plan => plan.classList.remove("plan-enlarged-for-yearly"));
        invisible_for_monthly.forEach(e => e.style.display = "none");
        plan_price_for_calc.forEach(price => price.innerHTML = (parseInt(price.innerHTML) / 10).toString());
        month_year_sign.forEach(sign => sign.innerHTML = "/mo");
        monthly_summary_plan_text.textContent = "(Monthly)";
        year_or_month_summary_total.textContent = "month";
        type_plan_price /= 10;
    }
    updateTotal();
    updateSummaryUI();
});

next_button.addEventListener("click", nextPage);
go_back_button.addEventListener("click", backPage);

online_service.addEventListener("click", () => {
    online_service_clicked = !online_service_clicked;
    updateTotal();
    updateSummaryUI();
});

larger_storage.addEventListener("click", () => {
    larger_storage_clicked = !larger_storage_clicked;
    updateTotal();
    updateSummaryUI();
});

customizable_profile.addEventListener("click", () => {
    customizable_profile_clicked = !customizable_profile_clicked;
    updateTotal();
    updateSummaryUI();
});

function setYearlyPrices() 
{
    switch_on_monthly = false;
    monthly_billing.style.fontWeight = "normal";
    yearly_billing.style.fontWeight = "bold";
    month_year_sign.forEach(mys => mys.textContent = "/yr");
    invisible_for_monthly.forEach(el => el.style.display = "block");
    plan_price_for_calc.forEach(price => price.innerHTML = (parseInt(price.innerHTML) / 10).toString());
    
}

function setMonthlyPrices() 
{
    switch_on_monthly = true;
    monthly_billing.style.fontWeight = "bold";
    yearly_billing.style.fontWeight = "normal";
    month_year_sign.forEach(mys => mys.textContent = "/mo");
    invisible_for_monthly.forEach(el => el.style.display = "none");
    plan_price_for_calc.forEach(price => price.innerHTML = (parseInt(price.innerHTML) * 10).toString());
}


change_button_summary.addEventListener('click', () => {
    plans.forEach(element => element.classList.remove("plan-clicked"));
    arcade_plan.classList.add('plan-clicked');
    
    if (billing_switch.checked) setYearlyPrices();
    else setMonthlyPrices();
    
    resetForChangeButton();
    updateTotal();
    updateSummaryUI();
    currentStep -= 2;
    showStep(currentStep);
});

clearErrorOnInput(input_name, error_name, "name");
clearErrorOnInput(input_email_adress, error_email, "email");
clearErrorOnInput(input_phone_number, error_phone, "phone");

document.addEventListener("DOMContentLoaded", () => resetAll());