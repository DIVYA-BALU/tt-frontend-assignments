const mainEl = document.getElementById("main");
const inputEl1 = document.createElement("input");
const inputEl2  = document.createElement("input");
const pEl1 = document.createElement("p");
const pEl2 = document.createElement("p");

mainEl.appendChild(inputEl1);
mainEl.appendChild(pEl1);
mainEl.appendChild(inputEl2);
mainEl.appendChild(pEl2);

let onChange = (textValue) => {
    inputEl1.value = textValue;
    inputEl2.value = textValue;
    pEl1.textContent = textValue;
    pEl2.textContent = textValue;
}

let value = "ramu";

inputEl1.addEventListener("input", (e) => {
    onChange(e.target.value);
});

inputEl2.addEventListener("input", (e) => {
    onChange(e.target.value.toUpperCase());
    });

onChange(value)
