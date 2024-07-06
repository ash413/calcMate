document.addEventListener()


function calculate(firstOperand, operator, secondOperand){
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand);

    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return '';
    }
}