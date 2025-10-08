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

function getCurrNum() {
    return line2.textContent;
}

function updateLine2(content) {
    line2.textContent = content;
}

function onClickNumBtns() {
    numBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            updateLine2(this.textContent);
        })
    });
}

function saveOperator(btn) {
    operator = btn.textContent;
}

function onClickOperBtns() {
    operBtns.forEach(btn => btn.addEventListener('click', function(){
        firstNum = getCurrNum();
        saveOperator(btn);
    }))
}

function runOperation() {
    return operate(firstNum, operator, secondNum);
}

function onClickEqualBtn () {
    equalBtn.addEventListener('click', function(){
        secondNum = getCurrNum();
        let result = runOperation();
        updateLine2(result);
    })
}


window.addEventListener('load', function() {
    onClickNumBtns();
    onClickOperBtns();
    onClickEqualBtn();
})