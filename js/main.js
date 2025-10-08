const numBtns = document.querySelectorAll('.num');
const operBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equalBtn');
const line2 = document.querySelector('.line2');

function add(a,b) {return a + b};
function subtract(a,b) {return a - b};
function multiply(a,b) {return a*b};
function divide(a,b) {return a/b};
function modulo(a,b) {return a%b};

let firstNum = 0;
let operator;
let secondNum;

function operate(firstNum,operator,secondNum){
    switch(operator) {
        case '+': return add(firstNum,secondNum);
        case '-': return subtract(firstNum,secondNum);
        case 'x': return multiply(firstNum,secondNum);
        case '÷': return divide(firstNum,secondNum);
        case '%': return modulo(firstNum,secondNum);
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

// on click operator buttons
function clickOperBtns() {
    firstNum = line2.textContent;
    operator = this.textContent;
    console.log(firstNum, operator)
}

function applyClickOperBtns() {
    operBtns.forEach(btn => btn.addEventListener('click', clickOperBtns))
}

// on click equal buttons
function clickEqualBtn() {
    secondNum = line2.textContent;
    let result = operate(firstNum, operator, secondNum);
    console.log(result);
    line2.textContent = result;
}

function applyClickEqualBtn () {
    equalBtn.addEventListener('click', clickEqualBtn)
}


window.addEventListener('load', function() {
    applyDisplayCurrNum();
    applyClickOperBtns();
    applyClickEqualBtn();
})