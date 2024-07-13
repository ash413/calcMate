document.addEventListener("DOMConentLoaded", function(){

    
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';

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
            return b===0 ? 'Error' : a / b;
        default:
            return '';
        }
    }
    
    document.querySelector('#clear').addEventListener("click", function(){

    })

})