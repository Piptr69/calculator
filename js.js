const screen = document.querySelector('#main-screen');
screen.textContent = '0'

const numericButtons = document.querySelectorAll('.nbtn');
numericButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (screen.textContent == '0') {
            screen.textContent = button.textContent;
        }
        else {
            screen.textContent += button.textContent;
        }
    });
});

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    screen.textContent = '0';
});

const dotBtn = document.querySelector('#dot');
dotBtn.addEventListener('click', () => {
    if(!(screen.textContent.includes('.')))
    screen.textContent = screen.textContent + '.';
});

function add(number1, number2) {
    return number1 + number2;
};

function subtract(number1, number2) {
    return number1 - number2;
};

function multiply(number1, number2) {
    return number1 * number2;
};

function divide(number1, number2) {
    return number1 / number2;
};

let currentInput = 0;
let currentOperation;
let laterInput;

const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const addBtn = document.querySelector("#addBtn");
const SubBtn = document.querySelector("#SubBtn");

divideBtn.addEventListener('click', () => {
    currentInput = parseFloat(screen.textContent);
    currentOperation = 'divide';
    screen.textContent = '0';
});

multiplyBtn.addEventListener('click', () => {
    currentInput = parseFloat(screen.textContent);
    currentOperation = 'multiply';
    screen.textContent = '0';
});

addBtn.addEventListener('click', () => {
    currentInput = parseFloat(screen.textContent);
    currentOperation = 'add';
    screen.textContent = '0';
});

subBtn.addEventListener('click', () => {
    currentInput = parseFloat(screen.textContent);
    currentOperation = 'subtract';
    screen.textContent = '0';
});


function operate(number1, op, number2) {
    if (op === 'add') {
        return add(number1, number2);
    }
    else if (op =='subtract') {
        return subtract(number1, number2)
    }
    else if (op =='multiply') {
        return multiply(number1, number2)
    }
    else if (op =='divide') {
        return divide(number1, number2)
    }
};

const operateBtn = document.querySelector("#opBtn");
operateBtn.addEventListener('click', () => {
    laterInput = parseFloat(screen.textContent);
    let result = operate(currentInput, currentOperation, laterInput);
    screen.textContent = result;
});