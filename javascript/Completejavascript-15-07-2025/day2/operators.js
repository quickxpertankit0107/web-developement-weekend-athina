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

// 3types of dialog boxes
// 1) alert it comes with ok button
// alert("hello")

// 2) prompt it is used to takes values from users
// prompt("enter your namae")

// 3 confirm it comes with ok and cancel button
// confirm("are u sure u want to delete")

var a = 20;
// var b = 20;
// console.log(a===b);

if(a>10){
    console.log("is not equals");
    
}

else{
    console.log("is equals");
    
}




