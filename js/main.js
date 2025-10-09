const numBtns = document.querySelectorAll('.num');
const operBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equalBtn');
const acBtn = document.querySelector('.acBtn');
const line2 = document.querySelector('.line2');

function add(a,b) {return Number(a) + Number(b)};
function subtract(a,b) {return a - b};
function multiply(a,b) {return a*b};
function divide(a,b) {return a/b};
function modulo(a,b) {return a%b};

let firstNum;
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

function getOnScreenNum() {
    return line2.textContent;
}

function updateScreen(content) {
    line2.textContent = content;
}

function isSecondNum() {
    return (operator) ? true : false;
}

function concatNumber(inputNum) {
    let number;
    if (getOnScreenNum() == 0) return inputNum;
    else {
        let onScreenNum = String(getOnScreenNum());
        number = onScreenNum + String(inputNum);
    }
    return Number(number);
}

function inputSecondNum(inputNum) {
    updateScreen(0);
    return concatNumber(inputNum)
}

function onClickNumBtns() {
    numBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            if (isSecondNum()) {
                let number = inputSecondNum(this.textContent); 
                updateScreen(number);
            } else {
                let number = concatNumber(this.textContent)
                updateScreen(number);
            } 
        })
    });
}

function saveOperator(btn) {
    operator = btn.textContent;
}

function onClickOperBtns() {
    operBtns.forEach(btn => btn.addEventListener('click', function(){
        firstNum = getOnScreenNum();
        saveOperator(btn);
    }))
}

function runOperation() {
    return operate(firstNum, operator, secondNum);
}

function resetOperation() {
    operator = undefined;
}

function onClickEqualBtn() {
    equalBtn.addEventListener('click', function(){
        secondNum = getOnScreenNum();
        updateScreen(runOperation());
        resetOperation();
    })
}

function clear() {
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;
    updateScreen(0);
}

function onClickAcBtn() {
    acBtn.addEventListener('click', clear);
}

window.addEventListener('load', function() {
    onClickNumBtns();
    onClickOperBtns();
    onClickEqualBtn();
    onClickAcBtn();
})