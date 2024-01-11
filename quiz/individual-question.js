function createDiv(className){
    const divEl = document.createElement("div")
    divEl.className = className;
    return divEl;
}
  
function createRadioButtonOrCheckBox(type, name, value, id) {
    const inputEl = document.createElement("input");
    inputEl.type = type;
    inputEl.name = name;
    inputEl.value = value;
    inputEl.id = id;
    if (type === "radio") {
      inputEl.setAttribute("required", "");
    }
    return inputEl;
}
  
function createLabel(name, label) {
const labelEl = document.createElement("label");
labelEl.setAttribute("for", name);
labelEl.innerText = label;
return labelEl;
}

function disableRadioButton(inputEl) {
const radioButtons = document.getElementsByName(inputEl.name);
for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].disabled = true;
    console.log(radioButtons[index]);
}
}

function enableRadioButton(inputEl) {
const radioButtons = document.getElementsByName(inputEl.name);
for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].disabled = false;
    radioButtons[index].checked = false;
}
}

function createParagraph(className, content) {
const pEl = document.createElement("p");
pEl.className = className;
pEl.innerText = content;
return pEl;
}

function createImage(src, altText) {
const imgEl = document.createElement("img");
imgEl.src = src;
imgEl.alt = altText;
return imgEl;
}

function createTextFeild(placeholder, name) {
const inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.name = name;
inputEl.placeholder = placeholder;
return inputEl;
}

function createButton(type, text){
const buttonEl = document.createElement("button");
buttonEl.type = type;
buttonEl.innerText = text;
return buttonEl
}

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function randomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let res = "";
  
    for (var i = 0; i < lenString; i++) {
      let rnum = Math.floor(Math.random() * characters.length);
      res += characters.substring(rnum, rnum + 1);
    }
  
    return res;
}

function nextButton(){
    const nextButton = createDiv("next-button");
    nextButton.innerText = "Next Page";
    return nextButton;
}

const body = document.getElementById("root");
const contents = createDiv("content");
const welcomePara = createParagraph("welcome","welcome")
const questionEl = createDiv("question-box");
contents.appendChild(welcomePara);
body.appendChild(contents);
