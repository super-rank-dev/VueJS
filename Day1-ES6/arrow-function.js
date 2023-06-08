//Function expression
const addNumbers = function (number1, number2) {
    return number1 + number2;
};

//Arrow function expression
const arrowFunctionAdd = (number1, number2) => number1 + number2;

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
