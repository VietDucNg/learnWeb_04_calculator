const numBtns = document.querySelectorAll('.num');
const operBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equalBtn');
const acBtn = document.querySelector('.acBtn');
const lastScreen = document.querySelector('.lastScreen');
const currentScreen = document.querySelector('.currentScreen');

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

function updateLastScreen(){
    if (result) lastScreen.textContent = `${result} ${operator}`;
    else lastScreen.textContent = `${firstNum} ${operator}`;
}

function updateCurrentScreen(content) {
    currentScreen.textContent = content;
}

function concatNumber(number,inputNum) {
    if (number == undefined) return inputNum;
    else {
        number = String(number) + String(inputNum);
    }
    return Number(number);
}

function inputSecondNum(inputNum) {
    updateCurrentScreen(0);
    return concatNumber(secondNum,inputNum)
}

numBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        if (operator) {
            secondNum = inputSecondNum(this.textContent);
            updateCurrentScreen(secondNum);
        } else if (result) {
            firstNum = result;
            secondNum = inputSecondNum(this.textContent);
            updateCurrentScreen(secondNum);
        } else {
            firstNum = concatNumber(firstNum,this.textContent)
            updateCurrentScreen(firstNum);
        } 
    })
});

function saveOperator(btn) {
    operator = btn.textContent;
}

operBtns.forEach(btn => btn.addEventListener('click', function(){
    if (secondNum) {
        result = runOperation()
        updateCurrentScreen(result);
        saveOperator(btn);
        firstNum = result;
        secondNum = undefined;
        updateLastScreen();
    } else {
        saveOperator(btn);
        updateLastScreen();
    }
}));

function runOperation() {
    return operate(firstNum, operator, secondNum);
}

equalBtn.addEventListener('click', function(){
    result = runOperation();
    lastScreen.textContent = `${firstNum} ${operator} ${secondNum} =`;
    updateCurrentScreen(result);
    operator = undefined;
    firstNum = result;
    secondNum = undefined;
});

function clear() {
    firstNum = undefined;
    operator = undefined;
    secondNum = undefined;
    result = undefined;
    lastScreen.textContent=''
    updateCurrentScreen(0);
}

acBtn.addEventListener('click', clear);