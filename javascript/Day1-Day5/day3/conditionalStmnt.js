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
let a = 10;
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
// var i,j;
// for (i = 1; i <= 5; i++) {
//     var row = '';
//     for (j = 1; j <= i; j++) {
//         row = row +'*'; 
//     }
//     console.log(row);
// }


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
let num =prompt("enter your number");
for(let i=1;i<=num;i++){
  console.log(`table of ${i}`);
  console.log(i);

  for(let a=1;a<=10;a++){
    console.log(`${i} x ${a}=${i*a}`);
    document.write(`${i} x ${a}=${i*a}`,"<br>")

  }
  
}
 