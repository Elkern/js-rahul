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
    console.log(data);
}
getFacts();
