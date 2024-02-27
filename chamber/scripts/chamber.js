const darkButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");

const nav = document.querySelector("#nav-menu");
const hamButton = document.querySelector("#menu");

darkButton.addEventListener("click", () => {
    console.log("clickd")
    if (main.classList.contains('dark-mode')) {
        // console.log("hi")
        main.className = '';
    } else {
        // console.log("bye")
        main.className = 'dark-mode';
    }
});

hamButton.addEventListener('click', () => {
	nav.classList.toggle('show');
	hamButton.classList.toggle('show');
});


// Date modified
const dateModified = document.querySelector("#date");
dateModified.innerHTML = `Last modified: ${document.lastModified}`;

document.querySelector("#personal").innerHTML = `Jonathan Todd - BYU-I WDD 230 Assignment - ${new Date().getFullYear()}©`;