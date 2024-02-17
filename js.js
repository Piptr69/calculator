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

const smallScreen = document.querySelector("#small-screen");

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    smallScreen.textContent = screen.textContent + '+';
});