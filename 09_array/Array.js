// // Array

// // [] -- brackets
// // () -- paranthesis
// // {} -- braces

// let myArr = [0,"rahul",null,undefined,123n,Symbol('123'),true];
// // console.log(myArr.at(1)); // We give index and it returns the value
// const letters = [["a","b"], "b", "c"];

// const alphaNumeric = letters.concat([[1],[1,2], [2, 3]]);
// // console.log(alphaNumeric); 
// const array1 = [1, 2];
// const array2 = ['a', ['b', 'c']];
// // console.log(array1.concat(...array2.pop()));

// //Difference between slice and splice 

// //Slice - manipulates the works on copy of the array so og don't change and last index is not included

// // let sliceArr = myArr.slice(2/*Starting Index*/,5/*Ending Index*/);
// // console.log(sliceArr);
 
// //Splice - Directly change the value of array here and the number of places are decided from 2nd index

// //let myArr = [0,"rahul",null,undefined,123n,Symbol('123'),true];
// let spliceArr = myArr.splice(2/*Starting Index*/,2/*Number of places after starting number to be consider*/);

// console.log(spliceArr); // [ null, undefined ]
// console.log(myArr); //OP [ 0, 'rahul', 123n, Symbol(123), true ]
// let spliceArr1 = myArr.splice(2,2,34/*This will be replaced by the elements which are removed*/,59);

// console.log(spliceArr1); // [ 123n, Symbol(123) ]
// console.log(myArr); //OP [ 0, 'rahul', 34, 59, true ];
