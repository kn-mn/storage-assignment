
const saveButton = document.getElementById("save-btn");
const clearButton = document.getElementById("clear-btn");
const usernameInput = document.getElementById("username");
const displayParagraph = document.getElementById("display-name");

saveButton.addEventListener("click", saveName);
clearButton.addEventListener("click", clearName);
window.addEventListener("load", loadSavedName);

function saveName() {
   const nameToSave = usernameInput.value;
   localStorage.setItem("username",nameToSave);
   displayParagraph.textContent = nameToSave;
}

function clearName() {
    localStorage.removeItem("username");
    displayParagraph.textContent = "";
}

function loadSavedName() {
    const nameToLoad = localStorage.getItem("username");
    if (nameToLoad) {displayParagraph.textContent = nameToLoad;        
    }
}