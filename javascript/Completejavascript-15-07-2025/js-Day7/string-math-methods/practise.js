

// ----------------------------------------------

var text = "quickxpert QUICK QUICK";
console.log("before--->",text);

var repTxt = text
  .replaceAll("QUICK", "instant")   
  .replaceAll("xpert", "advance"); 

console.log("after-->",repTxt);
// ----------------------------------------------

let text = "hello i am sam from nyc,studing at xyz";
console.log(text.substr(24));
// ----------------------------------------------
var str = "hello world here";
console.log(str.split(", "));
// ----------------------------------------------
 var num = Number(prompt("Enter a number"));

if (!isNaN(num)) {
  var square = Math.pow(num, 2);
  alert("The square of " + num + " is " + square);
} else {
  alert("Please enter a valid number.");
}
// ---------------------------------------------------------
function dice() {
    const fruits = [1, 2, 3, 4, 5, 6];
    let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

    console.clear(); // clears previous output
    console.log('you got:', randomFruit);
}
 

