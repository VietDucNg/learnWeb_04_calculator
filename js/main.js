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
let result;

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

function isOperExist() {
    return (operator) ? true : false;
}

function isResultExist () {
    return (result) ? true : false;
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
            if (isOperExist()) {
                secondNum = inputSecondNum(this.textContent);
                updateScreen(secondNum);
            } else if (isResultExist()) {
                firstNum = result;
                secondNum = inputSecondNum(this.textContent);
                updateScreen(secondNum);
            } else {
                firstNum = concatNumber(this.textContent)
                updateScreen(firstNum);
            } 
        })
    });
}

function saveOperator(btn) {
    operator = btn.textContent;
}

function onClickOperBtns() {
    operBtns.forEach(btn => btn.addEventListener('click', function(){
        if (secondNum) {
            result = runOperation()
            updateScreen(result);
            saveOperator(btn);
            firstNum = result;
            secondNum = undefined;
        } else saveOperator(btn);
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
        result = runOperation();
        updateScreen(result);
        resetOperation();
        firstNum = result;
        secondNum = undefined;
    })
}

function clear() {
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;
    result = undefined;
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