let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 1

// var is function scoped or global scoped
var y = 1;

if (y === 1) {
    var y = 2;

    console.log(y);
    // Expected output: 2
}

console.log(y);
// Expected output: 2

const number = 42;

try {
    number = 99;
} catch (err) {
    console.log(err);
    // Expected output: TypeError: invalid assignment to const `number'
    // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

const obj = {
    name: "John"
};

obj.prop = [123, 12];
console.log(obj);

function sum(x = 1, y = 2, ...args) {
    let total = 0;
    for (const a of args) {
        let str = `${total} + ${a} = ${total + a}`;
        console.log(str);
        total += a;
    }
    return total;
}

let a = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(a);

const odd = [1, 3, 5];
const combined = [...odd, 2, 4, 6, ...odd];
console.log(combined);
const copies = [...combined];
console.log(copies);

let post = {
    title: "JavaScript Template Literals",
    excerpt: "Introduction to JavaScript template literals in ES6",
    body: "Content of the post will be here...",
    tags: ["es6", "template literals", "javascript"]
};

let { title, excerpt, body, tags } = post;

let postHtml = `
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map((tag) => `<li>${tag}</li>`).join("\n      ")}
    </ul>
</footer>`;

// console.log(postHtml);
const root = document.getElementById("root");
root.innerHTML = postHtml;
