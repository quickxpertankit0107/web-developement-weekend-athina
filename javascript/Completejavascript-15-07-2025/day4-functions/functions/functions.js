
/*
A function is a block of statements that can be used repeatedly in a program.
A function will not execute automatically when a page loads.
A function will be executed by a call to the function.
A function can called multiple times

 syntax: function_keyword name_of_function()
 {
    code
 }

 there are 3 types of function
 normal function
 anonymous
 fat arrow function is introduce in e6
*/

//what are argument and parameters?
//Arguments are specified after the function name, inside the parentheses. 
// You can add as many arguments as you want, just separate them with a comma.


// sum()
// function sum() {  
   
//       var add1 = 20;
//       var add2 = 30;
//       return add1 + add2;
//       }


// normal function
// syntax function add(){}
// function add() {
//    let num1 = 10;
//    let num2 = 20;
//    // console.log();
//    alert(num1+num2)
  
// }

// add(); calling normal function at top


// anyonymous is called at only bottom
// syntax var add = function(){}
// var add = function(){
//    let num1 = 10;
//    let num2 = 20;
//    // console.log();
//    alert(num1+num2)
// }
// add()


// add() calling normal function at bottom

// syntax of arrow is called at only bottom
// var add =() =>{}

var add =() => {
   let num1 = 60;
   let num2 = 20;
   alert(num1+num2)
}
add();




// normal function
// function add(){
//       var num1=10;
//       var num2=20;
//       var res=num1+num2;

//       document.writeln(res);
//       console.log(res);
// }


// anonymous function
// const add=function(){
//       var num1=10;
//       var num2=20;
//       var res=num1-num2;

//       document.writeln(res);
//       console.log(res); 
// }

// add();


// add();

// arrow function
// const add=()=>{
//       var num1=10;
//       var num2=20;
//       var res=num1*num2;
//       document.writeln(res);
//       console.log(res);    
// }


// add(10,30);

// function with parameter
// function add(a,b){
//      var res= a+b;
//      alert(res);
// }

// function sum() {  
//             var add1 = 20;
//             var add2 = 30;
//             return add1 + add2;
            
//             }
// console.log(sum());


// add()
// sub()
// normal function
// function add() {
//       var a=10;
//       var b=20;
//       var c= a+b
//       alert(c)
// }

// function sub() {
//       var a=10;
//       var b=20;
//       var c= a-b
//       alert(`sub of ${a} & ${b} is ${c}`)
// }

// add()
// sub()



// multi using anonyomous function
var mul = function (a,b) {
      return a+b
}

mul(10,20);

// mul()
// mul()

// es6 introduced arrow function
// div()

// var div=()=>{
//       var a =10;
//       var b =20;
//       var c=a/b
//       alert(c)
// }










