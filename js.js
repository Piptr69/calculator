const screen = document.querySelector('#screen');
const numericButtons = document.querySelectorAll('.nbtn');
numericButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        screen.textContent = button.textContent;
    });
});
