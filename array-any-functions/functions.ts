function greet(name: string) {
  console.log("Hello " + name.toUpperCase() + "!!");
}

// greet(42)

// function addTwoNumbers(x, y) {
//   return x + y;
// }

// addTwoNumbers(5);

function getFavoriteNumber(): number {
  return 7;
}

async function getAnotherNumber(): Promise<number> {
  return 20;
}
