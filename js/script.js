const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

numberButtons.forEach(button => {
    button.addEventListener('click', () => display.attachNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});