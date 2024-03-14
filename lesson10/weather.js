const apiKey = 'd4f7ecadb1c8c7be321dfc2a6371f3be';
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// 49.749926715381015, 6.637491835552139
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.749926715381015&lon=6.637491835552139&units=imperial&appid=${apiKey}`;

async function apiFetch(url){
    let response = await fetch(url);
    try {
        if (response.ok){   
            let data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(apiData){
    currentTemp.innerHTML = `${apiData.main.temp}° F.`;
    captionDesc.innerHTML = `${apiData.weather[0].description}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${apiData.weather[0].icon}.png`);
}

apiFetch(url);