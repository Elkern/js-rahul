// Context 

// this is use to consider the context(Values) in the scope

let Details = {
    user: "Rahul",
    age: 27,

    WelcomeHere : function(){  //In this function we are using the context of this to get values 
        // console.log(`This the details of a person whose name is ${this.user} and age is ${this.age}`);
        // console.log(this);
        //{ user: 'Rahul', age: 27, WelcomeHere: [Function: WelcomeHere] }
    }
}
Details.WelcomeHere();

// console.log(this); // OP {}

Details.user = "Sam"
Details.WelcomeHere();
// console.log(this); // { user: 'Sam', age: 27, WelcomeHere: [Function: WelcomeHere] }


// The Global Object for Browser is "Window" But here it is {}
//That is when we use this-keyword here it gives {} but in browser it is Window

//context in function

function myNew(){
    let user ="Rahul"
   // console.log(this.user); //OP undefined this works on object but not function like this
    
    //console.log(this);
    //OP  
    
    /* <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Function: structuredClone],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [Function: value],
        crypto: [Getter]
      } */
}
myNew()

//********************************* ARROW FUNCTION ****************************\\

const myArrFn = (num) => {     //This is arrow function
    return num + 2             //Explicit return
}

// console.log(myArrFn(5));

//To not use braces and to skip return statement

const myArrFn1 = (num) => num + 2 //Implicit return
// console.log(myArrFn1(4))

//To return a object 
const myArrFn2 = (num) => ({username: "user"})
// console.log(myArrFn2(7));

// IIFE Immediately Invoked Function Expression

// (function myXYZFn(){
//     console.log(`This is the IIFE`);
// })();

// (function loij(){
//     console.log(`This is the IIFE`);
// })(); // Invoking the function

// (function MyNewFn(){
//   console.log(`hi`)
// })();

// ((name1) => {  //IIFE is only working if nothing is present previously
//   console.log(`This can be written in any language i prefer ${name1}`)
// } )("English"); 