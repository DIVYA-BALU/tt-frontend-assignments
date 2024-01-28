// const bodyElement = document.getElementById("body");
// console.log("hello");
// bodyElement.appendChild(formElement);

const divElement = document.querySelector(".container");
const formElement = document.createElement("form");
divElement.append(formElement);

const headingElement = document.createElement("h1");
headingElement.textContent ="SignUp Form";
headingElement.className = "form-heading";
//headingElement.setAttribute("class","form-heading");

const labelELement =document.createElement("label");
labelELement.textContent = "First Name";

formElement.append(headingElement);
formElement.appendChild(labelELement);

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.maxLength = 20;
inputElement.placeholder="First Name";

formElement.appendChild(inputElement);
