// const mySelf = new Set(["a", "b", "c", "d"]);
// const mySelf = new Set();

// mySelf.add("a");
// mySelf.add("b");
// mySelf.add("c");
// mySelf.add("d");
// mySelf.add("a");

// console.log(mySelf);

const letters = new Set(["a", "b", "c", "d"]);

let text = "";

letters.forEach(function (value) {
  text += value;
});

// console.log(text);
console.log(letters.values());
