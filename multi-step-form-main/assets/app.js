const type_of_plan = document.querySelectorAll(".plan"); // returns a node list so cannot select all nodes by just addEventListener
const billing_switch = document.querySelector("#billing-switch")
const monthly_billing = document.getElementById('monthly-billing');
const yearly_billing = document.getElementById('yearly-billing');

// iterate throught Node List type_of_plan
type_of_plan.forEach(plan => {
    plan.addEventListener("click", () => {
        type_of_plan.forEach(element => element.classList.remove("plan-clicked")); // for each eleemtn it remvoes the plan-clicked class when clicked 
        plan.classList.add("plan-clicked"); // then adds the class to the clicked button 
    });
});

billing_switch.addEventListener('change', () => {
    if(billing_switch.checked) {
        monthly_billing.style.fontWeight = 'normal';
        yearly_billing.style.fontWeight = 'bold';
    } else {
        monthly_billing.style.fontWeight = 'bold';
        yearly_billing.style.fontWeight = 'normal';
    }
});

 