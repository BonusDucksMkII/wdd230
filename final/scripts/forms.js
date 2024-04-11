const country = document.querySelector("#country");
const url = "https://api.countrystatecity.in/v1/countries";

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

country.addEventListener("focusout", unitedStates);

async function getCountries(url){
    let response = fetch(url, requestOptions);
    if (response.ok){
        let data = (await response).json();
        console.log(data);
    }
}

function unitedStates(){
    if (country.value == "United States" || country.value == "US"){
        const newList = document.createElement("input");
    }
}

getCountries(url);