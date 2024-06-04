//Case 1 without resolve how the promise is not consumed

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task is complete"); //As this is not resolved the promise is not consumed
    }, 1000)
});

promiseOne.then(function () {
    // console.log("Promise Consumed");
});

//Case 2 with resolve how the promise is consumed

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task is complete"); //As this is resolved the promise is consumed
        resolve();
    }, 1000)
});

promiseTwo.then(function () { //As resolve is passed then it is connected to .then
    // console.log("Promise Consumed");
});

//Case 3 we are working on more efficient way of coding

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Asysnc task 3");
        resolve();
    }, 1000)
}).then(function () {
    // console.log("Async 3 resolved");
});

//case 4 to use parameters in resolve in the promise 

new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Rahul", age: "27" });
    }, 1000)
}).then(function (user) {
    // console.log(user); //It will take the object from async function 
});

//case 5 to use then and catch for error handling 

// Concept of then and catch

new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true; //falsy
        if (!error) {
            resolve({ user: "Rahul", age: 27 })
        } else {
            reject("Exception is triggered") // This error got captured
        }
    }, 1000)
}).then(function (username) { //Truthy
    // console.log(username); //OP { user: 'Rahul', age: 27 }
    return username.user;
}).then(function (myUsername) { //Thruthy
    // console.log(myUsername); //OP Rahul
}).catch((myError) => {  //Falsy //Exception handling //Arrow function
    // console.log(myError);  //OP Exception is triggered
}).finally(() => ("This will execute in either condition")) //This will EXECUTE no matter what
//finally - This keyword I personally don't think is that much useful depending on use cases

//Case 6 with async and await not with then and catch

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  true;
        if(!error){
            resolve({username: "Rahul",age: 27});
        }else{
            reject("Hi there it is an error");
        }
    },1000)
});

async function consumePromiseFive(){
    try {
    const response = await PromiseFive;
    // console.log(response);
        
    } catch (error) {
        // console.log(error);
    }
}
consumePromiseFive();

