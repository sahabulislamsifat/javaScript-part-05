// const country = {
//   firstName: "Dhaka",
//   lastName: "Bangladesh",
// };

// console.log(country);

// create a map
// const fruits = new Map();

// fruits.set("Mango", 500);
// fruits.set("Banana", 300);
// fruits.set("Jackfruit", 250);

// // console.log(fruits);
// console.log(fruits.get("Mango"));

const fruits = new Map([
  ["Mango", 500],
  ["apples", 340],
  ["oranges", 400],
]);

let text = "";

for (const x of fruits.entries()) {
  text += x;
}

console.log(text);
