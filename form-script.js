const bodyEle = document.querySelector(".content");
const divEle = document.createElement("div");
const formEle = document.createElement("form");
const headingEle = document.createElement("h1");
headingEle.textContent = "Sign up form";
formEle.appendChild(headingEle);


function randomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
    console.log(lenString);
    //define a variable consisting alphabets in small and capital letter  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    //specify the length for the new string  
    let res = '';

    //loop to select a new character in each iteration  
    for (var i = 0; i < lenString; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        res += characters.substring(rnum, rnum + 1);
    }

    return res; 
}


function randomNumber(itemLength){
    return Math.floor(Math.random()*itemLength);
}

const inputs = [
    {
        label_name: "First Name",
        input_type: "text",
        placeholder: "Enter your First Name",
        maxlength: 20
    },
    {
        label_name: "Last Name",
        input_type: "text",
        placeholder: "Enter your Last Name",
        maxlength: 20
    },
    {
        label_name: "Country",
        input_type: "select",
        items: [
            {
                value: "",
                label: "Select country"
            },
            {
                value: 1,
                label: "India"
            },
            {
                value: 2,
                label: "USA"
            }
        ]
    },
    {
        label_name: "Languages",
        input_type: "checkbox",
        items: [
            {
                value: 1,
                label: "English"
            },
            {
                value: 2,
                label: "Tamil"
            },
            {
                value: 3,
                label: "Hindi"
            },
            {
                value: 4,
                label: "Kannada"
            },
        ]
    }
]

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const labelEle = document.createElement("label");
    labelEle.textContent = input.label_name;


    let inputEle;

    if (input.input_type === "select") {
        inputEle = document.createElement("select");

        const items = input.items;
        items.map((item) => {
            const optionEle = document.createElement("option");
            optionEle.textContent = item.label;
            optionEle.value = item.value;
            inputEle.appendChild(optionEle);
        });
    }
    else if (input.input_type === "checkbox" || input.input_type === "radio") {
        const divEle=document.createElement("div");

        const items=input.items;
        items.map((item) => {
            const randomName=randomNumber(30);
            const inputEle=document.createElement("input");
            inputEle.type=input.input_type;
            inputEle.value=item.value;
            inputEle.id=randomName;
            const labelEle=document.createElement("label");
            labelEle.textContent=item.label;
            labelEle.setAttribute("for",randomName);
            divEle.appendChild(inputEle);
            divEle.appendChild(labelEle);
        });
        inputEle = divEle;
    }
    else {
        inputEle = document.createElement("input");
        inputEle.type = input.input_type;
        inputEle.placeholder = input.placeholder;
        inputEle.maxLength = input.maxlength;
    }



    formEle.appendChild(labelEle);
    formEle.appendChild(inputEle);
    const breakEle = document.createElement("br");
    const breakEle2 = document.createElement("br");
    formEle.appendChild(breakEle);
    formEle.appendChild(breakEle2);
}


divEle.appendChild(formEle);
bodyEle.appendChild(divEle);    
