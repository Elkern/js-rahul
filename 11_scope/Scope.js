//Scopes of decleration

var xy = 300 // Global scope

let a = 200; //This will be printed as it is a global scope
if (true){  //This is Block scope
    let a = 23;
    const b = 24;
    var c = 25;
}

// console.log(a); //This will not print 
// console.log(b); //This will not print 
// console.log(c); //This will be printed  that's why in modern js var is not used as it is scope independent

//Function scope 

// Concept - Closure 
function one(){ //This function cannot access any parameter of child function
    let user = "Rahul";
    
    function two(){ //This function can access any parameter from parent function
        let platform = "Youtube"; 
        // console.log(user)
    }
    // console.log(platform); //Undefined
    two();
}
one();

//Similarly 

//We can use the same concept for if else statement 

if(true){
    let user = "Rahul";
    if (user === "Rahul"){
        let website = "YouTube"
        // console.log(user); // It can access the user
    }
    // console.log(website); //Came out to be undefined
}



// +++++++++++++++++++++++++++ Hoisting ++++++++++++++++++\\

function fnNew(num1,num2){
    return  num1 + num2;
}
console.log(fnNew(4,5));

//How you declare  your function 

console.log(newFn(0)); //Cannot access 'newFn' before initialization this is concept of hoisting
const newFn = function(num){ //This is know as Expression
   return num + 2
}
