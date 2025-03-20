// try {
//   // regular code...........
// } catch (err) {
//   console.log(err);
// }

let x = 5;

try {
  if (x == "") throw "Empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "to low";
  if (x > 10)
    throw {
      message: "to high",
      name: "HIGHT ERROR",
    };
} catch (err) {
  console.log(err.message);
}

console.log("this is an error.....");
