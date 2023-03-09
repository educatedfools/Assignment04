// ADD A PRIVATE FUNCTION CALLED CALCULATE
//I'm confused about this. Isn't a private function essentially just a nested function?
//I'm not understanding the purpose within the context of this assignment

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
const performAddition = (num1, num2) => {
    alert(num1 + num2);
}
    // SUBTRACT FUNCTION
const performSubtraction = (num1, num2) => {
    alert(num1 - num2);
}
    // MULTIPLY FUNCTION
const performMultiplication = (num1, num2) => {
    alert(num1 * num2);
}
    // DIVIDE FUNCTION
const performDivision = (num1, num2) => {
    alert(num1 / num2);
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {performAddition, performSubtraction, performMultiplication, performDivision};
