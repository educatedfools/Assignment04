// IMPORT THE MODULE
import {performAddition} from './modules/calculator.js';
import {performSubtraction} from './modules/calculator.js';
import {performMultiplication} from './modules/calculator.js';
import {performDivision} from './modules/calculator.js';

let isValid = false;
let calculation, num1, num2;
while(isValid === false){
// COLLECT FIRST NUMBER FROM USER
    num1 = prompt('enter first number of calculation');
    num1 = parseFloat(num1);
// COLLECT SECOND NUMBER FROM USER
    num2 = prompt('enter second number of calculation');
    num2 = parseFloat(num2);
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operator = prompt('enter operation to be performed: add, subtract, multiply, divide')
// CHECK TO SEE WHAT OPERATION THEY'RE USING
    switch(operator){
        case 'add':
            calculation = 'add';
            isValid = true;
            break;
        case 'subtract':
            calculation = 'sub';
            isValid = true;
            break;
        case  'multiply':
            calculation = 'mult';
            isValid = true;
            break;
        case 'divide':
            calculation = 'divide';
            isValid = true;
            break;
        default:
            alert('You entered an incorrect operand');
            isValid = false;
    }
}

// CALL THE APPROPRIATE FUNCTION
if(calculation === 'add'){
    performAddition(num1, num2)
}
else if(calculation === 'sub'){
    performSubtraction(num1, num2)
}
else if(calculation === 'mult'){
    performMultiplication(num1, num2)
}
else if(calculation === 'divide'){
    performDivision(num1, num2)
}
