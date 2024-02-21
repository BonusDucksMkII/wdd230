const numOfVisits = document.querySelector("#numOfVisits");
const dateModified = document.querySelector("#lastModified");
dateModified.innerHTML = `Last modified: ${document.lastModified}`;

let pageVisits = Number(window.localStorage.getItem("pageVisits")) || 0;
if (pageVisits !== 0) {
    numOfVisits.innerHTML = `Page Visits: ${pageVisits}`;
} else {
    numOfVisits.innerHTML = "Welcome to my page!";
}

pageVisits++;
window.localStorage.setItem("pageVisits", pageVisits);

document.querySelector("#dateline").innerHTML = `Jonathan Todd - United States - ${new Date().getFullYear()}©`;