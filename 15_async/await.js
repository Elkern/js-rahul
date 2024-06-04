/*  Their are total 6 things which can be reffered as ASYNCRONOUS in JS

1. setTimeOut
2. setInterval
3. Promise
4. fetch
5. axios
6. XMLHttpRequest
*/

// e.g - >  In case a line of code should be executed  then a line of code should work we use async

// e.g -> Real life scenario -> one line is dedicated for bringing FB photo but if async is their
// we will wait for it to bring the photo and then show it 

// If not used like this the fb photo will not bring any response but still it will execute the show
// code and we will recieve error as the photo is not present.


//  The async part ehich send the request are
//  fetch, setTimeOut, setInterval , promise , axios

// the code which wait for the answer from async part 
// Then, catch,callbacks, async , await

console.log("This is our training for async and await");

function oneAwait(){
    console.log("Inside oneAwait function");
    return "Rahul";

}
console.log("Before calling Rahul");
let a = oneAwait();                 //Function is called here so it's console is printed
console.log("After calling Rahul");
console.log(a);
console.log("This is the last line of JS");