const baseURL = "https://bonusducksmkii.github.io/wdd230/";
//const linksURL = "https://bonusducksmkii.github.io/wdd230/";
const linksURL = "./data/links.json";
const lessonList = document.querySelector(".lessons");

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(data){
    let i = 1;
    data.lessons.forEach(each => {
        const linksList = document.createElement("ul");
        let linksLine = document.createElement("li");
        let stringLine = `Week ${i}: `;
        each.links.forEach(link => {
            stringLine = stringLine.concat(`<a href=\"${link.url}\">${link.title}</a> `);
            linksList.appendChild(linksLine);
        });
        linksLine.innerHTML = stringLine;
        lessonList.appendChild(linksList);
        i++;
    });
}

getLinks();

