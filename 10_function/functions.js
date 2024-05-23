//++++++Function execution ++++++++\\

//e.g.1
function newFn (){
// console.log("yo");
}
newFn/*Reference of the function*/()/*Execution*/;

//e.g.2
function newPar(param1,param2){ //parameters
    // console.log(param1 + param2);
}
newPar(3,4);   // Inside this parenthesis whatever we pass is called is know as arguments

//e.g.3
function newFn1 (par1,par2){
return par1 + par2
}
// console.log(`The Result is ${newFn1(5,4)}`);

//e.g.4
function newFn2(para1,para2){
    return para1 - para2 
    // console.log("hui"); //Below return it is unreachable code
}
// console.log(newFn2(1,2))

//e.g.5
function newFn4(user = "ui"  ){ // Default value can be set
    if(!user){                // falsy statemnt check for undefine,NaN,null,false,0,""
        // console.log("hey");
        return
        //if return is missing it will execute the further line after so this if fails
    }
    return user
}
// console.log(newFn4("io"));   //this will overwrite the default value//e.g.5

//e.g.6
function myRestOperator(...num1){  // Rest Operator same as spread name varies acc.n to usecases
    return num1
}

// console.log(myRestOperator(100,200,300));

//e.g.7
function myRestOperator2(val1,val2,...num1){
    return num1
}
// console.log(myRestOperator2(20,30,40,50)); //OP [ 40, 50 ]

// How to pass an object in a function 1st Way
function myFn (handleObj){
//    console.log(`The name of employee is ${handleObj.userName} and his age is ${handleObj.age} so he have to work for ${handleObj.hrs} hrs`)
}
myFn({
    userName : "Rahul",
    age: 27,
    hrs: 8
})

// How to pass an object in a function 2nd Way
const myObj = {
    user: "rahul",
    age: 27
}
function myFn2 (handleObj){
    // console.log(`This is a random statement to check name ${handleObj.user} and age ${handleObj.age}`);
}
myFn2(myObj);

// Array to use in function 

let myArr = [100,200,300,400];
function myFn4(myParam){
    return  myParam[1]
}
// console.log(myFn4(myArr));

//To take value from one function to another
function myValue(){
    let value1 = "arm"
    inThisFn(value1)
}
function inThisFn(val){
// console.log(val);
}
myValue()

