let a = 10;

function test() {
  a = 20;
  console.log(a); // 20
}

test();
console.log(a); // 10

//////////////////////////////
let x = 5;

function changeX() {
  x = 10;
}

console.log(x); // 5
changeX();
console.log(x); // 10


//////////////////////////

if (true) {
  let y = 50;
}
// console.log(y);

//////////////////////////
var z;
console.log(z);
z = 30;

//////////////////////////

// function example() {
//   console.log(a);
//   let a = 5;
// }

// example();

//////////////////////////

let message = "Привет";

function updateMessage() {
  message = "Пока";
}

console.log(message);
updateMessage();
console.log(message);
//////////////////////////


var foo = "Hello";
let bar = "World";

console.log(window.foo);
console.log(window.bar);
