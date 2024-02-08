const listId = document.getElementById("list");
const inputId = document.getElementById("favchap");
const button = document.querySelector("button[type = submit]");

button.addEventListener('click', () => {
    if (inputId.value.length === 0) {
        alert("Input is empty; please enter something.");
        inputId.focus();
    } else {
        let newList = document.createElement("li");
        let newButton = document.createElement("button");
        newList.innerHTML = inputId.value;
        newButton.innerHTML = "❌";
        listId.appendChild(newList);
        newList.appendChild(newButton);
        newButton.addEventListener("click", () => {
            listId.removeChild(newList);
        });
    }
});