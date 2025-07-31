// what is array?
// array is used to store collections of various kind of data.
// only in js array is an object
// object is collections of methods and property
// syntax to define array
// const test = []  // its an array 

// to define object
// const test = {}

// single dimensional array examples
const arr =["rahul","yogita","rizwan","vinayak"];// strings
const arr2=["viraj",true,null,278378_83938] // mixed array
// console.log(arr);
// console.log(arr[3]);
// console.log(typeof(arr));

// console.log(arr2[0]);

// multi dimensional array
const arr3 = [
    "shyam",121,
    [
        true,false,["vrutika"],"rizwan"
    ],
    786,53565
]
// console.log(arr3);
// console.log(arr3[2][3]);//rizwan

let arr4 = [
    12134,89798,[
        "sam","john",
        ["alan"],898989898,"nyc"
    ],
    656565,[true,false],"david","william"
]

// take out alan,false,david
console.log(arr4);

console.log(arr4[2][2][0]); // alan
console.log(arr4[5]);//david
console.log(arr4[4][1]);//false













