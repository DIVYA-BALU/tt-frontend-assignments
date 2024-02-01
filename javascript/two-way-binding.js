const body = document.getElementById("content");
const inpEl1 = document.createElement('input');
const inpEl2 = document.createElement('input');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
body.appendChild(inpEl1);
body.appendChild(p1);
body.appendChild(inpEl2);
body.appendChild(p2);

let ngname = "type here";
let textChange = (text) => {
    inpEl1.value = text;
    inpEl2.value = text;
    p1.innerText = text;
    p2.innerText = text;
}

textChange(ngname);

inpEl1.addEventListener("input", (e) => {
    textChange(e.target.value);
});

inpEl2.addEventListener('input', (e) => {
    textChange(e.target.value.toUpperCase());
});

