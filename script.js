let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let type = document.querySelector("#type");
let inp = document.querySelector("#inp").value;
let API_KEY = "ae998ba2a37f96f1f6899f019db66f56";


const data = async  (inp)=>{

    city.innerHTML = `Please Wait your request is processing`;
    temp.innerHTML = ``
    type.innerHTML = ``
    
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${API_KEY}&units=metric`);
    
   
    let jsonData = await getData.json();
    

    city.innerHTML = `City : ${jsonData.name}`;
    temp.innerHTML = `Temp : ${jsonData.main.temp} °C`
    type.innerHTML = `Weather : ${jsonData.weather[0].main}`

}

function myFun(){
    inp = document.querySelector("#inp").value;
    data(inp);
}


