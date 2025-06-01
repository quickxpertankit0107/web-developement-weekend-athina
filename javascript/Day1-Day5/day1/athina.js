// initalization
// var demo1 = "hello athina from freece";

// //declaration 
// var demo2;

// var demo3 = true

// var demo4=null


// var demo5=1000
// console.log(typeof(demo5));


// // object creation
// var test = {
//     id:1, // key:value -> pair
//     name:'athina',
//     city:'greece',

// }


// arrays is used to store collections of data in a single variable

// single dimensional array
// var arr=["athina",true,null,10_000_00,];

// multi-dimensional array
// var arr2=[
//     "ankit",12,
//     [true,false],
//     [10,20,30,48],
//     [
//         {city:["london","nyc","german"]}
//     ]
// ]

// console.log(arr);
// console.log(arr[0]);

// console.log(arr2);

// to get false value
// console.log(arr2[2][1]);
// console.log(arr2[4][0].city[2]);


// operators

// var num1=10;
// var num2=20;
// var res=num1num2;
// // backticks below esc button 
// console.log(`the addition of ${num1} and ${num2} is ${res}`); // template literals
// console.log('the addition of',num1,'and',num2,'is',res);

// var num3=5;
// var num4=3
// var res=num3%num4
// // num3+=3;
// console.log(res);

// loosely equals operator anytype with same values
// ==

// let num1="10";
// let num2=10;


// strictly equals operator with types and value
// ==
// console.log(num1===num2);


// AND &&
// console.log(true && false);  // false
// console.log(5 > 3 && 10 > 2); // true


// OR ||
// console.log(true || false);  // false
// console.log(5 > 3 && 10 > 2)

// console.log(!(false || false));


// dialog boxes in js
// 3types 
// 1 alert with ok button
// console.log(alert("hello athena"));.


// 2confirm comes with ok and cancel
// console.log(confirm("are u sure u want to logout?"));

// prompt it takes values from users
// console.log(prompt("enter ur name"));

// var num1=10;

// var num2=20;

// console.log(( num1>num2 ) ? "quick" : "xpert");

// var i,j;
// // outerloop
// for ( i = 1; i <= 5; i++) {
//     var row = '';
//     // inner loop
//     for (j = 1; j <= i; j++) {
//         row = row +'*'; 
//     }
//     console.log(row);
// }


// var demo=20
// demo=30;
// console.log(demo);


// let demo = 10;
// console.log(demo);


// es6 
// let demo2="athina";
// demo2="ankit";
// console.log(demo2);


// const demo3 = 20;
// demo3=30
// console.log(demo3);


// loops is js
// for(var a=4;a>=0;a=a-1){
//     // console.log("ankit");
//     // document.write("ankit","<br>")
//     console.log(a);
//     if(a===3){
//         console.log("sam");
//     }
// }

// var count = 0;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// do{
//   console.log(count);
//   count++;
// }

// while(count<5)  

// const fruit = 'apple';

// switch (fruit) {
//     case 'banana':
//         console.log("It's a fruit!");
//         break;

//     case 'egg':
//         console.log("egg is not fruit");
//         break;

//     case 'apple':
//             console.log("It's a fruit! & it is apple");
//             break;
//     default:
//         console.log("Not a fruit.");
// }