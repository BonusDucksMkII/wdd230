const apiKey = 'd4f7ecadb1c8c7be321dfc2a6371f3be';
const lat = '20.422447902039792';
const long = '-86.92272626380337';
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=24&units=imperial&appid=${apiKey}`;
const weatherSection = document.querySelector('#weather');

const tempSection = document.querySelector('.high-temp');
const tempButton = document.querySelector('#temp');

tempButton.addEventListener('click', () => {
	tempSection.classList.toggle('hide');
	tempButton.classList.toggle('hide');
});

async function getWeather(url){
    let response = await fetch(url);
    try{
        if (response.ok){
            let data = await response.json();
            console.log(data);
            displayTemp(data);
            // total times per day is 24, 10800 ms per hour
            for (let i = 0; i < 24; i++){
                let t = data.list[i].dt_txt.split(' ');
                if (t[1].slice(0, 2) === '15'){
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
    desc.innerHTML = `${Math.round(apiData.list[day].main.temp)}° F - ${newString}`

    icon.setAttribute('src', `https://openweathermap.org/img/wn/${apiData.list[day].weather[0].icon}@2x.png`);
    icon.setAttribute('alt', 'weather icon');
    weatherCard.appendChild(icon);
    weatherCard.appendChild(desc);
    weatherSection.appendChild(weatherCard);
}

function displayTemp(apiData){
    // highest temperature data
    const temp = document.createElement("p");
    temp.textContent = `The high for today is ${Math.round(apiData.list[0].main.temp_max)}° F`;
    tempSection.appendChild(temp);
}

getWeather(url);