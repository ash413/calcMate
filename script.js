document.addEventListener("DOMContentLoaded", function(){

    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';
    let firstOperand = null;
    let secondOperand = null;
    let operator = null;
    let shouldResetDisplay = false;

    function resetDisplay(){
        displayValue = '0';
        display.textContent = displayValue;
    }

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
    
    document.getElementById('clear').addEventListener("click", function(){
        displayValue = '';
        firstOperand = null;
        secondOperand = null;
        operator = null;
        shouldResetDisplay = false;
        resetDisplay();
    });

    document.getElementById('delete').addEventListener("click", function(){
        if(displayValue.length > 1){
            displayValue = displayValue.slice(0, -1);
        }
        else{
            displayValue = '0'
        }
        display.textContent = displayValue;
    });

    document.getElementById('equals').addEventListener("click", function(){
        if(firstOperand !== null && operator){
            secondOperand = displayValue;
            displayValue = calculate(firstOperand, operator, secondOperand);
            display.textContent = displayValue;
            firstOperand = displayValue;
            operator = null;
        }
        shouldResetDisplay = true;
    });

    document.querySelector('.buttons').addEventListener("click", function(event){
        const target = event.target;

        if(!target.classList.contains('btn')||target.id==='clear'||target.id==='delete'||target.id==='equals'){
            return;
        }

        const value = target.textContent;

        if(target.classList.contains('operator')){
            if(firstOperand === null){
                firstOperand = displayValue;
            }
            else if(operator){
                secondOperand = displayValue;
                displayValue = calculate(firstOperand, operator, secondOperand);
                firstOperand = displayValue;
                display.textContent = displayValue;
            }
            operator = value;
            shouldResetDisplay = true;
        }
        else {
            if(shouldResetDisplay){
                displayValue = '';
                shouldResetDisplay = false;
            }
            if(displayValue === '0'){
                displayValue = value;
            }
            else {
                displayValue += value;
            }
            display.textContent = displayValue;
        }
    });
})