const darkButton = document.querySelector("#dark-mode");
darkButton.addEventListener("click", () => {
    const main = document.querySelector("main");
    main.classList.toggle('dark-mode');
})

// Date modified
const dateModified = document.querySelector("#date");
dateModified.innerHTML = `Last modified: ${document.lastModified}`;

document.querySelector("#personal").innerHTML = `Jonathan Todd - BYU-I WDD 230 Assignment - ${new Date().getFullYear()}©`;