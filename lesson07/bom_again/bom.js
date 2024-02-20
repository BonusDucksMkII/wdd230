const listId = document.getElementById("list");
const inputId = document.getElementById("favchap");
const button = document.querySelector("button[type = submit]");
let chaptersArray = getChapterList() || [];
localStorage.setItem("BOMfavChapters", JSON.stringify(chaptersArray));


function getChapterList(){
    return JSON.parse(localStorage.getItem('BOMfavChapters'));
}

function setChapterList(){
    localStorage.setItem('BOMfavChapters', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function displayList(item){
    let newList = document.createElement("li");
    let newButton = document.createElement("button");
    newList.innerHTML = item;
    newButton.innerHTML = "❌";
    listId.appendChild(newList);
    newList.appendChild(newButton);
    newButton.addEventListener("click", () => {
        listId.removeChild(newList);
        deleteChapter(item);
    });
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', () => {
    if (inputId.value.length === 0) {
        alert("Input is empty; please enter something.");
        inputId.focus();
    } else {
        displayList(inputId.value);
        chaptersArray.push(inputId.value);
        setChapterList();
        inputId.value = "";
        inputId.focus();
    }
});


