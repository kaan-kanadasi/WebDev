// ********************* //
// VARIABLES  
// ********************* //
const resultOutput = document.getElementById('current-result');
const eraseBtn = document.getElementById('btn-ac');
const signBtn = document.getElementById('btn-pls-mns');
const divideBy100Btn = document.getElementById('btn-modulus');
const divideBtn = document.getElementById('btn-divide');
const multiplyBtn = document.getElementById('btn-multiply');
const subtractBtn = document.getElementById('btn-subtract');
const addBtn = document.getElementById('btn-add');
const equalsBtn = document.getElementById('btn-equals');
const commaBtn = document.getElementById('btn-comma');
const toggleBtn = document.getElementById("toggle-btn");
const popupBtns = document.getElementById("popup-buttons");
const popupBtnsMain = document.getElementById("popup-buttons-main-panel");

const divItselfBtn = document.getElementById("btn-div-itself");
const tenPowerBtn = document.getElementById("btn-ten-power");
const lnBtn = document.getElementById("btn-ln");
const logBtn = document.getElementById("btn-log");
const eBtn = document.getElementById("btn-e");
const unlemBtn = document.getElementById("btn-unlem");
const powerTwoBtn = document.getElementById("btn-power-two");
const powerThreeBtn = document.getElementById("btn-power-three");
const piBtn = document.getElementById("btn-pi");
const powerHalfBtn = document.getElementById("btn-power-half");

const digitButtons = 
[
    document.getElementById('btn-zero'),
    document.getElementById('btn-one'),
    document.getElementById('btn-two'),
    document.getElementById('btn-three'),
    document.getElementById('btn-four'),
    document.getElementById('btn-five'),
    document.getElementById('btn-six'),
    document.getElementById('btn-seven'),
    document.getElementById('btn-eight'),
    document.getElementById('btn-nine')
];

let currentInput = "0";
let previousInput = "";
let operation = null;
let equalsPressed = false;
let hidOperationPressed = false;

// ********************* //
// FUNCTIONS  
// ********************* //
function changeDisplay(value) 
{
    resultOutput.innerText = value; 
    changeACDisplay(value);
}

function changeACDisplay(value) 
{
    if (previousInput === "" && (currentInput === "0" || currentInput === "")) { eraseBtn.innerText = "AC"; } 
    else if (value === "0") { eraseBtn.innerText = "AC"; }
    else { eraseBtn.innerText = "C"; }
}

function handleDigit(digit) 
{
    if (equalsPressed || hidOperationPressed) 
    {
        if (previousInput.includes(".")) { currentInput += previousInput + digit; } 
        else { currentInput = digit; }// when a digit is pressed start fresh after equal is pressed 
        previousInput = "";
        operation = null;
        equalsPressed = false; // reset the variable for the next activiation
        hidOperationPressed = false; // reset the variable for the next activiation
    } 
    else if (hidOperationPressed) 
    {
        previousInput = "";
        hidOperationPressed = false; // reset the variable for the next activiation 
    }
    else if(digit === "0" && currentInput === "0") { return; } // if 0 is already the displayed value, dont add more 0s next to it
    else if(digit !== "0" && currentInput === "0") { currentInput = digit; } // if 0 is already the displayed value, erase it before creating a new display  
    else { currentInput += digit; } // string concat if equal is not pressed else handle operation
    changeDisplay(currentInput);
}

function handleOperation(op) 
{
    if(currentInput === "" && previousInput === "") // nothing is entered so dont compute anything 
    { 
        operation = op;
        return; 
    }
    else if(previousInput !== "" && currentInput !== "") { compute(); } 
    else if(currentInput !== "") // when there is only one number in the operation
    {
        previousInput = currentInput; // store the entered number as the previous input 
        currentInput = ""; // clear out current typed input 
    }
    operation = op;
    equalsPressed = false;
}

function compute() 
{
    let result = 0;
    const first = parseFloat(previousInput);
    const second = parseFloat(currentInput);

    if(currentInput !== "" && previousInput === "") { return; }
    if(operation === null) { return; } // if the user pressees = for no reason after doing a claculation, dont do anything
    switch(operation) 
    {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            if(second === 0) 
            {
                changeDisplay("Error");
                resetState();
                return;
            }
            result = first / second;
            break;
    }
    changeDisplay(result.toString());
    previousInput = result.toString();
    currentInput = "";
    operation = null;
    equalsPressed = true;
}

// when equal is pressed this function resets the state variables 
function resetState() 
{
    currentInput = "0";
    previousInput = "";
    operation = null;
    equalsPressed = false;
    changeACDisplay("1");
}

// for the AC button 
function clearAll() 
{
    resetState();
    changeDisplay('0');
}

function toggleSign() 
{
    multiplyNum(-1);
}

function divideByHundred() 
{
    multiplyNum(1/100);
}

function addDecimal()
{
    if(currentInput !== "" && !currentInput.includes(".")) 
    {
        currentInput = currentInput + ".";
        changeDisplay(currentInput);
    } 
    else if (previousInput !== "" && !previousInput.includes(".")) 
    {
        previousInput = previousInput + ".";
        changeDisplay(previousInput);
    }    
    else if (currentInput === "") 
    { 
        currentInput = "0."; 
        changeDisplay(currentInput);
    }
    else if (previousInput === "") 
    { 
        previousInput = "0.";
        changeDisplay(previousInput);
    }
}

function multiplyNum(amount) 
{
    if(currentInput !== "") 
    {
        currentInput = (parseFloat(currentInput) * amount).toString();
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        previousInput = (parseFloat(previousInput) * amount).toString();
        changeDisplay(previousInput);  
    }
}

function divItself() 
{
    if(currentInput !== "") 
    {
        if(currentInput === 0) 
        { 
            changeDisplay("Error");
            resetState();
            return;
        } 
        currentInput = (1/ parseFloat(currentInput)).toString();
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        if(previousInput === 0) 
        { 
            changeDisplay("Error");
            resetState();
            return;
        }
        previousInput = (1/ parseFloat(previousInput)).toString();
        changeDisplay(previousInput);  
    }
    hidOperationPressed = true;
}

function tenPower() 
{
    if(currentInput !== "") 
    {
        currentInput = (10 ** parseFloat(currentInput)).toString();
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        previousInput = (10 ** parseFloat(previousInput)).toString();
        changeDisplay(previousInput);  
    }
    hidOperationPressed = true;
}

function log() 
{
    if(currentInput !== "") 
    {
        currentInput = (Math.log10(parseFloat(currentInput))).toString();
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        previousInput = (Math.log10(parseFloat(previousInput))).toString();
        changeDisplay(previousInput);  
    }
    hidOperationPressed = true;
}

function ln() 
{
    if(currentInput !== "") 
    {
        if(currentInput === 0) 
        { 
            changeDisplay("Error");
            resetState();
            return;
        }
        else 
        {
            currentInput = (Math.log(parseFloat(currentInput))).toString();
            changeDisplay(currentInput);
        }
    }
    else if (previousInput !== "")
    {
        if(previousInput === 0) 
        { 
            changeDisplay("Error");
            resetState();
            return;
        } 
        else 
        {
            previousInput = (Math.log(parseFloat(previousInput))).toString();
            changeDisplay(previousInput);  
        }
    }
    hidOperationPressed = true;
}

function factorial(num) 
{
    num = parseInt(num); 
    if(num < 0)
    {
        changeDisplay("Error");
        resetState();
        return;
    }
    let result = 1;
    while(num > 1) { result *= num--; }
    return result;
}

function unlem() 
{
    let result;
    if(currentInput !== "") 
    {
        result = factorial(currentInput) 
        if(result !== undefined) 
        {
            currentInput = result.toString();
            changeDisplay(currentInput);
        }
    }
    else if (previousInput !== "")
    {
        result = factorial(previousInput) 
        if(result !== undefined) 
        {
            previousInput = result.toString();
            changeDisplay(previousInput);
        }
    }
    hidOperationPressed = true;
}

function power(n)
{
    if(currentInput !== "") 
    {
        currentInput = (parseFloat(currentInput) ** n).toString();
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        previousInput = (parseFloat(previousInput) ** n).toString();
        changeDisplay(previousInput);  
    }
    hidOperationPressed = true;
}

function e() 
{
    const eValue = Math.E.toString();
    if(currentInput !== "") 
    {
        currentInput = eValue;
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        previousInput = eValue;
        changeDisplay(previousInput);  
    } 
    else 
    {
        currentInput = eValue;
        changeDisplay(currentInput);
    }
    hidOperationPressed = true;
}

function pi() 
{
    const piValue = Math.PI.toString();
    if(currentInput !== "") 
    {
        currentInput = piValue;
        changeDisplay(currentInput);
    }
    else if (previousInput !== "")
    {
        previousInput = piValue;
        changeDisplay(previousInput);  
    }
    else 
    {
        currentInput = piValue;
        changeDisplay(currentInput);
    }
    hidOperationPressed = true;
}

// ********************* //
// EVENT LISTENERS   
// ********************* //
digitButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => handleDigit(index.toString()));
});
divideBtn.addEventListener("click", () => handleOperation("/"));
multiplyBtn.addEventListener("click", () => handleOperation("*"));
subtractBtn.addEventListener("click", () => handleOperation("-"));
addBtn.addEventListener("click", () => handleOperation("+"));
equalsBtn.addEventListener("click", compute);
eraseBtn.addEventListener("click", clearAll);
signBtn.addEventListener("click", toggleSign);
divideBy100Btn.addEventListener("click", divideByHundred);
commaBtn.addEventListener("click", addDecimal);
toggleBtn.addEventListener("click", () => {
    popupBtns.classList.toggle("show");
    popupBtnsMain.classList.toggle("show");
    // console.log("Toggled popup:", popupBtns.classList.contains("show"));
});

divItselfBtn.addEventListener("click", divItself);
tenPowerBtn.addEventListener("click", tenPower);
lnBtn.addEventListener("click", ln);
logBtn.addEventListener("click", log);
eBtn.addEventListener("click", e);
unlemBtn.addEventListener("click", unlem);
powerTwoBtn.addEventListener("click", () => power(2));
powerThreeBtn.addEventListener("click", () => power(3));
piBtn.addEventListener("click", pi);
powerHalfBtn.addEventListener("click", () => power(0.5));

changeDisplay("0"); // start with 0 

document.addEventListener('keydown', function (event) {
    const allowedNumbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    const operationKeys = ["+", "-", "*", "/"];
    const allowedKeys = [ ...allowedNumbers, ...operationKeys, ".", 'Enter', 'Backspace', 'Delete', "Escape"];

    if (!allowedKeys.includes(event.key)) { event.preventDefault(); }
    else if(event.key === "Enter") { compute(); }
    else if(allowedNumbers.includes(event.key)) { handleDigit(event.key); }
    else if(operationKeys.includes(event.key)) { handleOperation(event.key); }
    else if(event.key === ".") { addDecimal(); }
    else if(event.key === "Escape") { clearAll(); }
    else if(event.key === "Backspace" || event.key === "Delete") 
    {
        if (equalsPressed) return; 
        currentInput = currentInput.slice(0, -1);
        if (currentInput === "") currentInput = "0";
        changeDisplay(currentInput);
    }
});