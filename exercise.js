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
function favColor() {
  document.querySelector(".button").addEventListener("click", (color) => {
    alert("Green");
  });
}

//Exercise 4
const num = 15;
//Show double
function showDouble() {
  document.querySelector(".button-show").addEventListener("click", (double) => {
    alert(num * 2);
  });
}
//Show triple
function showTriple() {
  document.querySelector(".button-show").addEventListener("click", (triple) => {
    alert(num * 3);
  });
}
//Show half
function showHalf() {
  document.querySelector(".button-show").addEventListener("click", (half) => {
    alert(num / 2);
  });
}

//Exercises 5
