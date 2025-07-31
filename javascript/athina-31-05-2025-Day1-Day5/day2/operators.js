// Arithmetic operators
/* 
+   addition        x+y
-   subtraction     x-y
*   multiplication  x*y
/   division        x/y
%   modulous        x%y   
++  increment       ++x
-- decerement       --x

Assignment operator
=    assign              x=5
+=   add and assign      x+=3
-=   subtract and assign  x-=3
*=   multiply & assign    x*=3
/=   divide & assign      x/=3
%=   modulus & assign     x%=3  remainder

Comprasion Operator

==   Equal to           x==y
=== checks var tape with no
!=   Not equal          x!=y
>    greater than       x>y
<    less than          x<y
>=  greater than equal  x>=y
<=  less than qual      x<=y


[x & y are operands] [+ = are operators] [z] --> result
x +  y = z 

Logical Operator
&&  and   if both T T =T IF T F =F  x < 5 && x <10
||  or    if one True an is True    x <5  || x < 4
!   not   reverse result t->f f->t  !(x<5 && x<10)




*/

// let num1=20;
// let num2=30; // type corecision
// let result= num1 + num2
// // normal method
// document.writeln("the addition of ",num1," and ",num2," is ",result);
// // template literal--> use backticks below escape button(``)
// document.writeln(`the addition of  ${num1} and ${num2} is ${result}`)
// document.writeln(`the addition of ${num1} and ${num2} is ${result}`)


// ===
// var demo1="10";
// var demo2=10;
// console.log(demo1 === demo2); // false

// ==
// var demo1="10";
// var demo2=10;
// console.log(demo1 == demo2); // true

// var num1 = 10;
// var num2 = 20;

// if(num1<!num2){
//     console.log("no it is not greater");
// }

// else{
//     console.log("djhdjh");
    
// }




// AND (&&)
// Returns true if both operands are true.
// If the first operand is falsy, it returns that operand.
// If the first operand is truthy, it returns the second operand.

// console.log(true && false);  // false
// console.log(5 > 3 && 10 > 2); // true

// OR (||)
// Returns true if at least one operand is true.
// If the first operand is truthy, it returns that operand.
// If the first operand is falsy, it returns the second operand.

// console.log(true || false); // true
// console.log(5==5 || 5!=5);  // "Hello" (first truthy value)

// ! operator inverts the result of the && expression.
// console.log(!(true && true));

// age task

// let age =50;

// if(age<=49){
//     document.writeln("you cannot drive")
// }

// else if(age>12){
// document.writeln("10 is not eligible")
// }

// else{
//     document.writeln("you can drive")
// }

// 3 dialog boxes in js
// 1)alert
// console.log(alert("hello world"));

// 2prompt 
// let num1 = prompt("enter your number");
// if(num1<=10 || num1<=17){
//     confirm("you cannot drive")
// }

// else if(num1<=18 || num1<=50){
//     alert("eligable to drive")
// }
// // else if(num1<50){
// //     confirm("age is valid")
// // }

// else{
// alert("age limit exceed")
// }

// confirm



