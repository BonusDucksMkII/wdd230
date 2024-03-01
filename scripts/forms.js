const pword = document.querySelector("#password");
const pwordConfirm = document.querySelector("#password-confirm");
const message = document.querySelector("#message");

pwordConfirm.addEventListener("focusout", checkSame);
pword.addEventListener("focusout", checkSame);

function checkSame() {
    if (pword.value !== pwordConfirm.value && pwordConfirm.value !== ""){
        message.innerHTML = "Passwords do not match.";
        message.classList.add("show");
    } else {
        message.classList.remove("show");
    }
}