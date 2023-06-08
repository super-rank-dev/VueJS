// Viết chương trình sử dụng arrow function truyền vào số lượng tham số không cố định (số nguyên).
// In ra các số đã nhập theo thứ tự tăng dần.

const sortNumber = (...numbers) => {
    return numbers.sort((a, b) => a - b);
};

console.log(sortNumber(6, 7, 8, 9, 10, 1, 2, 3, 4, 5));

// Cho array (99, 88. 66). Viết chương trình thêm 5 số (tùy ý) vào trước mảng và 2 số (tùy ý) vào phía sau của mảng.

const array = [99, 88, 66];

const addNumber = (array, ...numbers) => {
    console.log(numbers.length);
    if (numbers.length >= 7) {
        return [...numbers.slice(0, 5), ...array, ...numbers.slice(5)];
    } else {
        console.log("Please enter at least 7 numbers");
    }
};

console.log(addNumber(array, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// Viết hàm arrow function tính tổng, hiệu, thương, tích của 2 số được đặt trong một file _math.js.
// Thực hiện phép các phép tính tại file index.js
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

const minus = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

console.log(sum(1, 2));
console.log(minus(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

// Viết chương trình có 3 tham số là số nguyên. In ra day số ngăn cách nhau bằng dấu ", " sử dụng arrow function và template string.
const printNumber = (a, b, c) => {
    return `${a}, ${b}, ${c}`;
};

console.log(printNumber(1, 2, 3));

