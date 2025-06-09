// What is Hoisting
// Hoisting is a JavaScript mechanism where the interpreter 
// moves variable and function declarations to the top of their scope (before code execution).
// JavaScript hoists declarations to the top of the scope.

// example with var
// var is hoisted and initialized with undefined
// console.log(a); // undefined
// var a =10;
// console.log(a); // 10


// -----------------------------------------------------------
// let and const are hoisted but not initialized.
// example with let
// console.log(b); // ReferenceError: Cannot access 'b' before initialization

// let b = 20;
// console.log(b);
// -----------------------------------------------------------
// example with const
// console.log(c); // ReferenceError: Cannot access 'c' before initialization

// const c = 30;
// console.log(c);
// -----------------------------------------------------------






