let currentOperand = '';
let previousOperand = '';
let operation = null;
let memory = 0;

const display = document.getElementById('display');

function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDecimal() {
    if (currentOperand.includes('.')) return;
    currentOperand += '.';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function chooseOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculateResult();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function calculateSquareRoot() {
    if (currentOperand === '') return;
    currentOperand = Math.sqrt(parseFloat(currentOperand));
    updateDisplay();
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    currentOperand = memory.toString();
    updateDisplay();
}

function memoryAdd() {
    if (currentOperand === '') return;
    memory += parseFloat(currentOperand);
}

function memorySubtract() {
    if (currentOperand === '') return;
    memory -= parseFloat(currentOperand);
}

function updateDisplay() {
    display.innerText = currentOperand;
}
