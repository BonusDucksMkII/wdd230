const darkButton = document.querySelector("#dark-mode");
const main = document.querySelector("body");

const nav = document.querySelector(".nav-menu");
const hamButton = document.querySelector("#menu");

const formDateTime = document.querySelector(".date-time");
const formTel = document.querySelector("#mobile-num");

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

