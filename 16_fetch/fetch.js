//https://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}
// lat 72.87
// lon 18.65
let p =fetch("https://history.openweathermap.org/data/2.5/history/city?lat=72.87&lon=18.65");
p.then((res)=> {
return res.json();
}).then((res1)=> {
    console.log(res1);
})
