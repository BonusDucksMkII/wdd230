let temperature = 43;
// mph
let windSpeed = 10;

windSpeed = windSpeed ** 0.16;

let result = windSpeed * temperature * 0.4275;
let temp = windSpeed * 35.75;
let temp1 = temperature * 0.6125;

result = (35.74 + temp1) - (temp) + (result);
console.log(result);

// 35.74 + 0.6125 * temperature - 35.75 * windSpeed ^ 0.16 + 0.4275 * temperature * windSpeed ^ 0.16

const apiKey = 'd4f7ecadb1c8c7be321dfc2a6371f3be';
//40.35944580453177, -110.21838487503821
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=40.35944580453177&lon=-110.21838487503821&cnt=24&units=imperial&appid=${apiKey}`;
const weatherSection = document.querySelector('#weather');

async function getWeather(url){
    let response = await fetch(url);
    try{
        if (response.ok){
            let data = await response.json();
            console.log(data);
            // total times per day is 24, 10800 ms per hour
            for (let i = 0; i < 24; i++){
                let t = data.list[i].dt_txt.split(' ');
                if (t[1].slice(0, 2) === '12'){
                    displayWeather(data, i);
                }
            }
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log("No data found");
    }  
}

function displayWeather(apiData, day){
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('card');

    const desc = document.createElement('p');
    const icon = document.createElement('img');

    let space = apiData.list[day].weather[0].description.split(' ');
    let date = apiData.list[day].dt_txt.split(' ');
    // console.log(apiData.list[2].weather[0].description.split(' '));
    let newString = `${space[0][0].toUpperCase() + space[0].slice(1)} ${space[1][0].toUpperCase() + space[1].slice(1)}`;
    desc.innerHTML = `${Math.round(apiData.list[day].main.temp)}° F - ${newString} - ${date[0]}`

    icon.setAttribute('src', `https://openweathermap.org/img/w/${apiData.list[day].weather[0].icon}.png`);
    icon.setAttribute('alt', 'weather icon');
    weatherCard.appendChild(icon);
    weatherCard.appendChild(desc);
    weatherSection.appendChild(weatherCard);
}

getWeather(url);

document.querySelector("#date").innerHTML = `Jonathan Todd - United States - ${new Date().getFullYear()}©`;