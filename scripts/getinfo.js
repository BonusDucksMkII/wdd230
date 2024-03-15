const apiKey = 'd4f7ecadb1c8c7be321dfc2a6371f3be';
//40.53316700515095, -111.92132045767082
const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.53316700515095&lon=-111.92132045767082&units=imperial&appid=${apiKey}`;

const infoCard = document.querySelector(".card");
const weather = document.querySelector(".weather");
const numOfVisits = document.querySelector("#numOfVisits");
const dateModified = document.querySelector("#lastModified");


dateModified.innerHTML = `Last modified: ${document.lastModified}`;

async function getWeather(url){
    let response = await fetch(url);
    try{
        if (response.ok){
            let data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log("No data found");
    }  
}

function displayWeather(apiData){
    const regex = /[\s]/
    let space = apiData.weather[0].description.split(' ');
    console.log(apiData.weather[0].description.split(' '));
    let newString = `${space[0][0].toUpperCase() + space[0].slice(1)} ${space[1][0].toUpperCase() + space[1].slice(1)}`;
    weather.innerHTML= `<img src=\'https://openweathermap.org/img/w/${apiData.weather[0].icon}.png\' alt=\'weather icon\'> 
                        ${apiData.main.temp}° F - ${newString}`;
}

let pageVisits = Number(window.localStorage.getItem("pageVisits")) || 0;
if (pageVisits !== 0) {
    numOfVisits.innerHTML = `Page Visits: ${pageVisits}`;
} else {
    numOfVisits.innerHTML = "Welcome to my page!";
}

pageVisits++;
window.localStorage.setItem("pageVisits", pageVisits);

document.querySelector("#dateline").innerHTML = `Jonathan Todd - United States - ${new Date().getFullYear()}©`;

getWeather(url);