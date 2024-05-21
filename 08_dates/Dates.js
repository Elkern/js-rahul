// Dates


//+++++++++++++++++++++   For Using Time in oData  ++++++++++++++++++\\

// let date = new Date(Date.now()); // Get converted in Date and Time
// let Time1 = date.toTimeString(); // Only Time part is considered
// let humanReadableTime = Time1.split(" ")[0]; //we took particularly the time
// console.log(humanReadableTime);
// let milliSec = humanReadableTime.split(":"); // we split it to Hr Min Sec
// console.log((milliSec[0]*3600 + milliSec[1]*60 + milliSec[2])) //this is in Secs
// console.log(typeof((milliSec[0]*3600 + milliSec[1]*60 + milliSec[2])*1000)) //this is in ms


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\



// console.log(date);   //OP 2024-05-21T06:00:36.674Z  type object
// console.log(date.toString()); //OP Tue May 21 2024 06:02:22 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); //OP Tue May 21 2024 (Time is removed)
// console.log(date.toISOString()); //OP  2024-05-21T06:05:24.935Z type string
// console.log(date.toJSON()); //OP  2024-05-21T06:08:00.755Z  
// console.log(date.toLocaleDateString()); // OP 5/21/2024
// console.log(date.toLocaleString()); // OP 5/21/2024, 6:10:08 AM
// console.log(new Date(2023,11/*Dec*/,20).toDateString()); // OP Wed Dec 20 2023
// console.log(new Date(2023,0,29,5,3,34).toLocaleString());// OP 1/29/2023, 5:03:34 AM


// console.log(myTimeStamp); //OP 1716272748206  which is in millisec
// // comparison are always done in ms only like e.g is given below
// let date2 = new Date(2023,10,23,23,9);
// console.log(date2.getTime()); //OP 1700780940000 which is in millisec
// //This needs to compare
// console.log(Math.floor((date2.getTime()))/1000) //OP this will give in seconds
//IMP
// console.log(date.toLocaleString("en-IN"));
// const date = new Date();

// Set the time zone to Indian Standard Time (IST)
// date.setUTCHours(date.getUTCHours() + 5); // UTC+5 hours for IST
// date.setUTCMinutes(date.getUTCMinutes() + 30); // UTC+5:30 for IST

// Convert the adjusted date to a string with the "en-IN" locale
// console.log(date.toLocaleString("en-IN")); // this matches indian time
// console.log(date.toLocaleString("default",{
//     dateStyle: "short",
//     timeStyle:"short",
    
// })); 
// console.log(date.toLocaleDateString());
// console.log(date);









