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

let currentInput = "";
let previousInput = "";
let operation = null;
let equalsPressed = false;

// ********************* //
// FUNCTIONS  
// ********************* //
function changeDisplay(value) 
{
    resultOutput.innerText = value; 
}

function handleDigit(digit) 
{
    if (equalsPressed) 
    {
        currentInput = digit; // when a digit is pressed start fresh after equal is pressed
        equalsPressed = false; // reset the variable for the next activiation 
    } 
    else { currentInput += digit; } // string concat if equal is not pressed else handle operation
    changeDisplay(currentInput);
}

function handleOperation(op) 
{
    if(currentInput === "" && previousInput === "") { return; }
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
            if(second === "0") 
            {
                changeDisplay("Error");
                clearAll();
                return;
            }
            result = first / second;
            break;
    }
    changeDisplay(result.toString());
    previousInput = result.toString();
    currentInput = "";
    operation = null;
    equalsPressed = false;
}

function clearAll() 
{
    currentInput = "";
    previousInput = "";
    operation = null;
    equalsPressed = false;
    changeDisplay("0");
}

function toggleSign() 
{
    if(currentInput !== "") 
    {
        currentInput = (parseFloat(currentInput) * -1).toString();
        changeDisplay(currentInput);
    }
}

function divideByHundred() 
{
    if(currentInput !== "") 
    {
        currentInput = (parseFloat(currentInput) / 100).toString();
        changeDisplay(currentInput);
    }
}

function addDecimal()
{
    if(currentInput !== "" && !currentInput.includes(".")) 
    {
        currentInput = currentInput + ".";
        changeDisplay(currentInput);
    }
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

changeDisplay("0"); // start with 0 