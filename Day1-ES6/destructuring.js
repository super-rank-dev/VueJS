let a, b, rest;
[a, b] = [10, 20];

console.log(a, b);
// Expected output: 10 20
console.log(rest);
// Expected output: undefined

[a, b, ...rest] = [10, 21, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
console.log(a, b);
// Expected output: 10 21

