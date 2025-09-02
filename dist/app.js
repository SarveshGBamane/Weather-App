let apiKey = 'f1f6d53716295e1597c3c6a426d7f025';
let ip = document.getElementById('ip');
let btn = document.getElementById('btn');

let locationN = document.getElementById('location');
let temp = document.getElementById('temp');
let weather = document.getElementById('weather');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let cloudCover = document.getElementById('cloudCover');

let url = '';



let printWeatherData = async()=>{
    try {

        
        let response = await fetch(url);
        if(!response.ok){
            alert("City not found!");
            return;
        }

        let data = await response.json();

        locationN.innerText = data.name;
        temp.innerText = data.main.temp + ' °C';
        weather.innerText = data.weather[0].description;
        wind.innerText = data.wind.speed + ' m/s';
        humidity.innerText = data.main.humidity + '%';
        pressure.innerText = data.main.pressure + ' hPa';
        cloudCover.innerText = data.clouds.all + '%';

        
    } catch (err) {
        alert("Something went wrong, please try again later.");
    }
}


btn.addEventListener('click' , ()=>{

    let loc = ip.value;

    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;

    if(loc!=''){ 
        printWeatherData();
    }
    else{
        alert('Please enter the city name');
    }

    

    ip.value = '';

    
})

