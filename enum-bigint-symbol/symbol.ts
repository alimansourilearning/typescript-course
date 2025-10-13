let firstValue = Symbol("value");
let thirdValue = Symbol();
if (firstValue === thirdValue) {
}

const secondValue = Symbol();
const fourthValue = Symbol();
if (secondValue === fourthValue) {
}

// console.log(firstValue);

// console.log(Symbol() === Symbol());
// console.log(Symbol("a") === Symbol("a"));

console.log(typeof firstValue);
