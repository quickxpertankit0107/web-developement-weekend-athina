/* 
syntax:
if else 
if (condition) {
  // Code to execute if condition is true
} else if (anotherCondition) {
  // Code to execute if another condition is true
} else {
  // Code to execute if none of the conditions are true
}

// Example
let a = 10; // static
let b = 20;
let c = 10;

if (a > b) {
  console.log("a is greater than b");
} else if (a === c) {
  console.log("a equals c");
  alert("hello qx");
} else {
  console.log("Conditions not met");
}
--------------------------------------------------------------
ternery operator
 // variable = (condition) ? trueResult : falseResult;

console.log((a < b) ? "a is less than b" : "a is not less than b");
--------------------------------------------------------------
syntax:

var a ="expression"

switch (expression) {
  case value1:
    // Code block
    break;
  case value2:
    // Code block
    break;
  default:
    // Code block
}

// Example
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log("It's a banana!");
    break;
  case 'egg':
    console.log("Egg is not a fruit");
    break;
  case 'apple':
    console.log("It's a fruit and it's an apple!");
    break;
  default:
    console.log("Not a fruit.");
}

--------------------------------------------------

// LOOPS IN JS
for(initalization;condition;inc/dec){
    code to be executed
}

for(var i=0;i<=5;i++){
  console.log(i)
}

// star code
// for outer loop
for (let i = 1; i <= 5; i++) {
      // inner loop: 
      for (let j = 1; j <= i; j++) {
        document.write('*');
      }
      document.write('<br>');
    }


-------------------------------------------------

while(condition){
    code to be executed
    inc or dec
}

var count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

var count = 0;

do{
code to be execuated
}

while(condition)

do{
console.log(count);
  count++;
}
while(count<5)  


*/

// code for multiplication table
// let num =Number(prompt("enter your number"));
// for(let i=1;i<=num;i++){
//   console.log(`table of ${i}`);
//   console.log(i);

//   for(let a=1;a<=10;a++){
//     console.log(`${i} x ${a}=${i*a}`);
//     document.write(`${i} x ${a}=${i*a}`,"<br>")

//   }
  
// }
 

// ternary operator
// var a=10;
// var b=20;

// console.log((a==b) ? "a is equals" : "not equals");


// switch case
// const fruit = prompt("enter audi,bmw,swift").toLowerCase()

// switch (fruit) {
//   case 'audi':
//     console.log("It's a luxury");
//     break;
//   case 'bmw':
//     console.log("bmw car");
//     break;
//   case 'swift':
//     console.log("swift car");
//     break;
//   default:
//     console.log("Not a car.");
// }

// console.log("ankit");
// console.log("ankit");
// console.log("ankit");
// console.log("ankit");
// console.log("ankit");
// console.log("ankit");

// var r;

// for(r=5;r>=0;r=r-1){
// // console.log(r);
// if(r==5){
//   console.log("ankit");
// }

// else if(r!=6){
//   console.log("no such values");
//   document.write("no such values")
// }
// }

// while
// var count = 0;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// do{
// console.log(count);
// count++;
// }
// while(count<5)  

  // conditional statements if else,ternary,switch
  // looping for loop,while loop do while


  // normal pattern
  // outer loop star pattern
for (let i = 1; i <= 5; i++) {
      // inner loop: 
      for (let j = 1; j <= i; j++) {
        document.write('*');
      }
      document.write('<br>');
    }

// reverse pattern
// for (let i = 1; i <= 5; i++) {
// //       // inner loop: 
//       for (let j = 5; j >= i; j--) {
//         document.write('*');
//       }
//       document.write('<br>');
//     }

// multiplication table
// var i =2;
//  for(let a=1;a<=10;a++){
//     // console.log(`${i} x ${a}=${i*a}`);
//     document.write(`${i} x ${a}=${i*a}`,"<br>");
    // document.write(`${i}`,"<br>");
    // document.write(`${a}`,"<br>");
    // document.write(`${i*a}`,"<br>")
    // console.log(a);
  // }

  // switch task using prompt take cars
  // print stars in reverse
  // table with prompt

  const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log("It's a banana!");
    break;
  case 'egg':
    console.log("Egg is not a fruit");
    break;
  case 'apple':
    console.log("It's a fruit and it's an apple!");
    break;
  default:
    console.log("Not a fruit.");
}

var num = prompt("enter number")
alert((num %2 ===0 ? "even" : "odd"))

