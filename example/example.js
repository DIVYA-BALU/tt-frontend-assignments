const divEl = document.getElementById("container");

const inputEl1 = document.createElement("input");
inputEl1.type = "text";
inputEl1.name = "name1";
divEl.appendChild(inputEl1);

const paraEl1 = document.createElement("p");
divEl.appendChild(paraEl1);

const inputEl2 = document.createElement("input");
inputEl2.type = "text";
inputEl2.name = "name2";
divEl.appendChild(inputEl2);

const paraEl2 = document.createElement("p");
divEl.appendChild(paraEl2);

document.addEventListener("input", (event) => {

    const inputEl = event.target;

    if (inputEl.name === "name1") {

        const val = inputEl.value;

        paraEl1.textContent = val;

        inputEl2.value = val;
        paraEl2.textContent = val;
        
    }else{

        const val = inputEl.value.toUpperCase();
        inputEl2.value = inputEl2.value.toUpperCase();

        paraEl2.textContent = val;

        inputEl1.value = val;
        paraEl1.textContent = val;
    }

});
