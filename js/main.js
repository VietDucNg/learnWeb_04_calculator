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