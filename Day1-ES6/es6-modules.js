import { sum, minus, multiply, divide } from "./operators.js";
import { arrowFunctionAdd } from "./arrow-function.js";

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const btn_sum = document.getElementsByClassName("sum")[0];

// console.log(sum(1, 2, 3, 4, 5));

btn_sum.addEventListener("click", () => {
    // console.log("clicked");
    let a = parseInt(number1.value);
    let b = parseInt(number2.value);
    let array = [a, b];
    const total = arrowFunctionAdd(a, b);
    console.log(total);
});

// console.log(sum(1, 2, 3, 4, 5));
