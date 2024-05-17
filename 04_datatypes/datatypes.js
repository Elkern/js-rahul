//Primitive dataType : Call by Value (It generate copy in memory)

/*  7 Types : 
    String,
    Number,
    Boolean,
    Null,
    Undefined,
    Symbol(To make value Unique),
    BigInt
*/

/* 
JavaScript is dynamically typed.
This means that variables in JavaScript can hold values of any data type, 
and the data type of a variable can change during the execution of the program.
*/

//Reference dataType (Non-Primitive) : Call by Reference 

/* 
Array,
Object,
Function
*/

let id = Symbol("123");
let anotherId = Symbol("123");
//  console.log(id == anotherId); 
 //False is the result as they are reference type not premitive thus have unique values

//  console.log(typeof (222222222222222222222n)); //This is bigInt dataType as we have added n at last
 const myArray = ["are","you",12]; //array  //datatype object
 let myObj = 
 {
    "name" : "Rahul",
    "age" : 27
 }//object
 
