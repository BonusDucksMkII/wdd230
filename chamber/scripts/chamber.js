const darkButton = document.querySelector("#dark-mode");
const main = document.querySelector("body");

const nav = document.querySelector(".nav-menu");
const hamButton = document.querySelector("#menu");

const formDateTime = document.querySelector(".date-time");
const formTel = document.querySelector("#mobile-num");

const directoryURL = "./data/members.json";
const directoryDiv = document.querySelector(".directory-list");
const directoryCheck = document.querySelector(".grid-directory");

// let formInputs = document.getElementsByTagName("input");
// Array.from(formInputs).forEach(element => {
//     element.addEventListener("focusout", () => {
//         console.log("Hi");
//     });
// });

let visitDate = localStorage.getItem("visitDate");

function milliseconds_to_days(time){
    time /= 86400000;
    return Math.round(time);
}

function displayMembersList(jsonData){
    jsonData.members.forEach(company => {
        const directoryList = document.createElement("div");
        const directoryName = document.createElement("h3");
        directoryName.innerText = `${company.companyInfo[0]}`;
        directoryList.append(directoryName);
        for (i = 1; i < (company.companyInfo.length); i++){
            const directoryThing = document.createElement("p");
            if (i == 3){
                directoryThing.innerHTML = `<a href=${company.companyInfo[i]}>${company.companyInfo[i]}</a>`;
            } else if (i == 5) {
                switch (company.companyInfo[i]){
                    case 1:
                        directoryThing.innerText = 'Non-Profit 💸';
                        directoryThing.style.fontSize = "18px";
                        break;
                    case 2:
                        directoryThing.innerText = 'Bronze 🥉';
                        directoryThing.style.fontSize = "18px";
                        break;
                    case 3:
                        directoryThing.innerText = 'Silver 🥈';
                        directoryThing.style.fontSize = "18px";
                        break;
                    case 4:
                        directoryThing.innerText = 'Gold 🥇';
                        directoryThing.style.fontSize = "18px";
                        break;
                }
            } else {
                directoryThing.innerText = `${company.companyInfo[i]}`;
            }
            directoryList.append(directoryThing);
        };
        console.log(company.companyInfo[0]);
        directoryDiv.append(directoryList);
    });
}

async function fetchMembers(url){
    const response = await fetch(url);
    const data = await response.json();
    displayMembersList(data);
}

// Dark mode
darkButton.addEventListener("click", () => {
    if (main.classList.contains('dark-mode')) {
        // console.log("hi")
        main.className = '';
    } else {
        // console.log("bye")
        main.className = 'dark-mode';
    }
});


// Ham menu
hamButton.addEventListener('click', () => {
	nav.classList.toggle('show');
	hamButton.classList.toggle('show');
});


// Date modified
const dateModified = document.querySelector("#date");
dateModified.innerHTML = `Last modified: ${document.lastModified}`;

document.querySelector("#personal").innerHTML = `Jonathan Todd - BYU-I WDD 230 Assignment - ${new Date().getFullYear()}©`;


// Visitor welcome/visit counter
try {
    if (!visitDate){
        welcome.textContent = `Welcome! Let us know if you have any questions`;
        visitDate = Date.now();
        localStorage.setItem("visitDate", visitDate);
    } else {
        visitDate = Number(localStorage.getItem("visitDate"));
        today = Date.now();
        difference = today - visitDate;
        test = true;
        if (difference > 86400000){
            console.log(difference);
            welcome.textContent = milliseconds_to_days(difference) > 1 ? `You last visited ${milliseconds_to_days(difference)} days ago.`: `You last visited ${milliseconds_to_days(difference)} day ago.`;
            localStorage.setItem("visitDate", today);
        } else {
            console.log(difference);
            welcome.textContent = `Back so soon? Awesome!`;
        }
    }
} catch (ReferenceError) {
    console.log("This page doesn't have these elements.");
}


// Form page stuff
try {
    formDateTime.value = Date.now();
} catch (ReferenceError) {
    console.log("This page doesn't have these elements.");
}

// Directory page
directoryCheck.addEventListener('click', () => {
    directoryDiv.classList.toggle('cards');
});

fetchMembers(directoryURL);
