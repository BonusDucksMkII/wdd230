const dateModified = document.querySelector("#lastModified");
dateModified.innerHTML = `Last modified: ${document.lastModified}`;

document.querySelector("#dateline").innerHTML = `Jonathan Todd - United States - ${new Date().getFullYear()}©`;