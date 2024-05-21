/* Two types of Memory - 1) Heap (Non-Primitive) and 2) Stack (Primitive)*/

//Stack Memory -- Primitive Data-type

let user1 = "Rahul";

let user2 = user1;

user2 = "Vansh";

// console.log(user1); //Output Rahul
// console.log(user2); //Output Vansh

//Heap Memory -- Non-Primitive Data-type

let object1 = {
    "email": "rahul@abc.com",
    "api":   "https://abcd.com"
}

let object2 = object1;

object2.email = "abcd@kbc.com";

// console.log(object1); // Output { `email: 'abcd@kbc.com'`, api: 'https://abcd.com' }
// console.log(object2); // Output { `email: 'abcd@kbc.com'`, api: 'https://abcd.com' }



