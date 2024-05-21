// OutDated Syntax for String
// const Dim = "time";

// console.log("Their is no " + Dim + " to waste"); //Old style

//String interpolation

// const value = 50;
// const Vehicle = "Tempo-Tmp-org";

// console.log(`There is a requirement of ${value} ${Vehicle}s`); //New Style

// console.log(value.__proto__);
// console.log(Vehicle.charAt(2)); //It will find the char of the provided index
// console.log(Vehicle.indexOf('o'));
// console.log(Vehicle.substring(0,4));// whatever needed from the string based on start index and end index
// console.log(Vehicle.slice(-8,5)); //can take negative values and work the same as substring
//  let spaceVar = "    Rahu l ";
//  console.log(spaceVar);
//  console.log(spaceVar.trim());//Trim removes spaces from Start and End // OP - Rahu l

// let uri = "https://rahulmj%20jukilo.com"
// console.log(uri.replace("%20",""));    //Paramters 1) What to replace 2) want to replace with
// console.log(encodeURI(uri));           //Only encode selective part of uri
// console.log(encodeURIComponent(uri));  //Encode everything in url
// console.log(decodeURI(uri));           //Only decode selective part of uri
// console.log(decodeURIComponent(uri));  //Decode everything in url

// console.log(uri.includes("%20")); //It gives value T or F based on value is presnt or not
// console.log(Vehicle.split("-",1)); //prams (seperator,limit = How many words you need) 
// // [ 'Tempo', 'Tmp', 'org' ]  it splits and stores in array 
// console.log(Vehicle.split("-")[2]);  // org as OP
// console.log(`This is for praactice as i need a letter from ${Vehicle.at(2)}`); 
//At is like charAt but at takes -ve values
// let a = {
//     0:{
//    0:{
//     "ab":"rahul",
//     "ac":"Majumdar"
//    },
//    1:{
//     "ab":"ram",
//     "ac":"Majumdar"
//    }
//     },
//     1:{
//     "ab":"Vansh",
//     "ac":"Gupta"
//     }
// }

// let b = {
//     "ab":"Elkern",
//     "ac":"Hacker"
// }
// let arrA = Object.values(a[0]); /// ******** \\\
// arrB = Object.values(arrA)
//  // This don't see the key only gives inside values
// console.log(arrB);
// let arrB = [b];
// Concatenate arrays
// let mergedArray = arrA.concat(b);
//  console.log(mergedArray);
// let abc = "abc";
// console.log(abc.constructor == String);
// function Tree(name) {
//   this.name = name;
// }

// const theTree = new Tree("Redwood");
// console.log(`theTree.constructor is ${theTree.constructor}`);

// let abd = "aaaerree1234";
// console.log(abd.endsWith("123",11)); //OP true here 2nd parameter is limit
//              endsWith(searchString, endPosition)

// console.log("abdcertyUUII".includes("uuii"));
// // OP False

// console.log("abdcertyUUII".toLowerCase().includes("uuii"));
// // OP True  (Case- Sensitive)

// console.log("abdcertyUUII".toLowerCase().includes("u"));
// // OP True 

// let ab = "oppo-pi-lo";

// let index = ab.indexOf("pi");

// console.log(`The index in ${ab} is ${index}`);

//The index in oppo-pi-lo is 5

// let rahul = "Hi I know I am Cool";
// let searchText = "Cool";

// console.log(`The sentence ${rahul} here I know the last word's index is ${rahul.lastIndexOf(searchText,20)}`);

// Understand the difference between indexOf and lastIndexOf
// let abcd = "abcdeffedca"
// console.log(abcd.indexOf("f")); //OP - 5
// console.log(abcd.lastIndexOf("f"));  //OP - 6

// let ex = "abcda a123 Ybbccdd";
// let regex = ex.match(/\w/g);
// console.log(regex);
// let regex1 = ex.matchAll(/\w/g);
// for (const match of regex1) { // for matchAll we need to Iterate over the iterator
//     console.log(match[0]);
// }
// console.log(regex1);

// console.log("abcd".padStart(7,","));
// let abc = "Hi Hola "
// console.log(`Greetings in different language ${abc.repeat(3)}`);

//  Replace and ReplaceAll

// let eg = "Hi I now have a cat and got another cat and also another cat so I got total of 3 cats"

// console.log(eg.replace("cat","dog"));// OP Hi I now have a dog and got another cat and also another cat so I got total of 3 cats
// console.log(eg.replaceAll("cat","dog"));// OP Hi I now have a dog and got another dog and also another dog so I got total of 3 dogs

// let an = "abc ABC"
// let re = /[A-Z]/g
// // console.log(an.search(re));
// Use search() if you want to find the position of a substring or a pattern within a string.
// Use match() if you want to extract the actual matched substrings or if you need to work with multiple matches.









