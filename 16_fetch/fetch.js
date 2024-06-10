// Syntax for fetch api

// let promise = fetch(url,[options]);


let p ="https://cat-fact.herokuapp.com/facts";
// p.then((res)=> {
// return res.json();
// }).then((res1)=> {          //Promise chaining      // Method 1
//     console.log(res1);
// })

let getFacts = async () => {
    let response = await fetch(p);
    // console.log(response); //JSON Format
    let data = await response.json();                //Mehod 2
    // console.log(data);
}
getFacts();

const url = ('https://worldtimeapi.org/api/timezone/America/New_York');
// url.then((value1) => {
//     // console.log(value1);
//     return value1.json();    //Call here only
// }).then((response)=>{
//     // let response = value2.json(); //doesn't work
//     // console.log(response);
// })

async function  getData(){
 let response = await fetch(url);
 console.log(response);
}
getData();

