// Access Button
const btn = document.querySelector(".update-btn");
const weather = document.querySelector(".tempInC");
const curCityBox = document.querySelector(".tempCity");
const inpt = document.querySelector(".curCity");
const feelWeather = document.querySelector(".feelInC");
const humidityTxt = document.querySelector(".cur-humidity");
const windSpeedTxt = document.querySelector(".cur-windSpeed");
const visibilityTxt = document.querySelector(".cur-visibility");
const sunriseTxt = document.querySelector(".cur-sunrise");
const sunsetTxt = document.querySelector(".cur-sunset");

let curCity;
let curLong;
let curLat;

// Ask user for location
navigator.geolocation.getCurrentPosition(
    (suc) => {
        curLong = suc.coords.longitude;
        curLat = suc.coords.latitude;
        (async () => {
            let newURL = `https://nominatim.openstreetmap.org/reverse?lat=${curLat}&lon=${curLong}&format=json`;
            let data = await fetch(newURL);
            let response = await data.json();
            localStorage.setItem("curCity", response.address.city);         //store locally
        })();
}, (err) => {
        curCity = "Mumbai";
})

let BASEURL = "https://wttr.in/Mumbai?format=j1";
let BASEURL2 = "https://nominatim.openstreetmap.org/reverse?lat=28.7342666&lon=77.5099787&format=json";

curCity = !localStorage.getItem("curCity") ? "Mumbai" : localStorage.getItem('curCity');

const getData = async () => {
    if (inpt.value) {
        curCity = inpt.value;
    }
    let newURL = `https://wttr.in/${curCity}?format=j1`;
    let data = await fetch(newURL);
    let response = await data.json();
    //Get Temperature
    let curWeather = response.current_condition[0].temp_C;
    weather.innerText = `${curWeather}°C`;
    //Get Area
    let curArea = response.nearest_area[0].areaName[0].value;
    curCityBox.innerText = curArea;
    //Get FeelsLike
    let feelsLike = response.current_condition[0].FeelsLikeC;
    feelWeather.innerText = `${feelsLike}°C`;
    //Get Humidity
    let humidity = response.current_condition[0].humidity;
    humidityTxt.innerText = `${humidity}%`;
    //Get WindSpeed
    let windSpeed = response.current_condition[0].windspeedKmph;
    windSpeedTxt.innerText = `${windSpeed}kph`;
    //Get visibility
    let visibility = response.current_condition[0].visibility;
    visibilityTxt.innerText = `${visibility}km`;
    //Get Sunrise
    let sunrise = response.weather[0].astronomy[0].sunrise;
    sunriseTxt.innerText = sunrise;
    //Get Sunset
    let sunset = response.weather[0].astronomy[0].sunset;
    sunsetTxt.innerText = sunset;
    // Reset the placeholder & the value
    inpt.placeholder = curCity;
    inpt.value = "";
}

getData();                  //first execution
btn.addEventListener("click", getData);
inpt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getData();
    }
})