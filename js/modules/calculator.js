// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(num1, num2, operand){
    switch(operand){
        case 'add':
            alert(num1 + num2);
            break;
        case 'subtract':
            alert(num1 - num2);
            break;
        case 'multiply':
            alert(num1 * num2);
            break;
        case 'divide':
            alert(num1 / num2);
            break;
        default:
            alert('You Blew It!');
    }
}
// ADD FOUR PUBLIC FUNCTIONS BELOW-
//////////////////////////////////
// ADD FUNCTION
const performAddition = (num1, num2) => {
    calculate(num1, num2, 'add');
}
// SUBTRACT FUNCTION
const performSubtraction = (num1, num2) => {
    calculate(num1, num2, 'subtract');
}
// MULTIPLY FUNCTION
const performMultiplication = (num1, num2) => {
    calculate(num1, num2, 'multiply');
}
// DIVIDE FUNCTION
const performDivision = (num1, num2) => {
    calculate(num1, num2, 'divide');
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {performAddition, performSubtraction, performMultiplication, performDivision};
