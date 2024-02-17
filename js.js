const screen = document.querySelector('#screen');
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

