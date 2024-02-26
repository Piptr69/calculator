const screen = document.querySelector('#main-screen');
screen.textContent = '0'
const numericButtons = document.querySelectorAll('.nbtn');
numericButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (screen.textContent == '0') {
            screen.textContent = button.textContent;
        }
        else {
            screen.textContent = screen.textContent + button.textContent;
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

let currentInput = screen.textContent;
let currentOperation;
let laterInput;

const divideBtn = document.querySelector("#divideBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const addBtn = document.querySelector("#addBtn");
const SubBtn = document.querySelector("#SubBtn");

divideBtn.addEventListener('click', () => {
    currentOperation = 'divide';
});

multiplyBtn.addEventListener('click', () => {
    currentOperation = 'multiply';
});

addBtn.addEventListener('click', () => {
    currentOperation = 'add';
});

SubBtn.addEventListener('click', () => {
    currentOperation = 'subtract';
});


function operate(number1, op, number2) {
    if (op === 'add') {
        add(number1, number2);
    }
    else if (op =='subtract') {
        subtract(number1, number2)
    }
    else if (op =='multiply') {
        multiply(number1, number2)
    }
    else if (op =='divide') {
        divide(number1, number2)
    }
};

const operateBtn = document.querySelector("")