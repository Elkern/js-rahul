console.log("2" < 3); //they won't consider data types
console.log("2" == 2); //they won't consider data types

console.log(null == 0); // Equality operator behaves differently as we certinly know that 0 is cannot be equal to NaN 
console.log(typeof (null)); // Data type is object
console.log(typeof (undefined)); // has it's own data type undefined
console.log(null >= 0); //this is true as comparison operator behaves differently it checks if NaN is less than or greater than any number wich is not certain so it gives it as true
console.log(null <= 0); // same as above

console.log(undefined >= 0);
