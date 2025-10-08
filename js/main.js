const numBtns = document.querySelectorAll('.num');
const line2 = document.querySelector('.line2');

function add(a,b) {return a + b};
function subtract(a,b) {return a - b};
function multiply(a,b) {return a*b};
function divide(a,b) {return a/b};
function modulo(a,b) {return a%b};

let firstNum;
let operator;
let secondNum;

function operate(firstNum,operator,secondNum){
    switch(operator) {
        case 'add': return add(firstNum,secondNum);
        case 'subtract': return subtract(firstNum,secondNum);
        case 'multiply': return multiply(firstNum,secondNum);
        case 'divide': return divide(firstNum,secondNum);
        case 'modulo': return modulo(firstNum,secondNum);
    }
}

// display selected number in line 2
function displayCurrNum() {
    line2.textContent = this.textContent;
}

function applyDisplayCurrNum() {
    numBtns.forEach(btn => {
        btn.addEventListener('click', displayCurrNum)
    });
}

window.addEventListener('load', function() {
    applyDisplayCurrNum();
})