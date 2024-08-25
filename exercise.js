//Exercise 1
const num1 = 8;
const num2 = 2;
// Addition 10
console.log(num1 + num2);
//Subtraction 6
console.log(num1 - num2);
// Multiplication 16
console.log(num1 * num2);
// Division 4
console.log(num1 / num2);

//Exercise 2
let greetings = "Hi, ";
let named = "Eric";
const program = greetings.concat(named);
document.write(program + "!");

//Exercise 3
document.querySelector(".button").addEventListener("click", () => {
  alert("My favorite color is Green");
});

//Exercise 4
const num = 15;
//Show double
document.querySelector(".button-show").addEventListener("click", () => {
  alert(num * 2);
});
//Show triple
document.querySelector(".button-show").addEventListener("click", () => {
  alert(num * 3);
});
//Show half
document.querySelector(".button-show").addEventListener("click", () => {
  alert(num / 2);
});

//Exercises 5
let count = 0;
document.getElementById("countClick").addEventListener("click", () => {
  count += 1;
  console.log("Clicked " + count);
});
