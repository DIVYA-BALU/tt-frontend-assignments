// "use strict";
// const bodyElement = document.getElementById("body")
// bodyElement.appendChild(divElement);
// console.log();
// console.info();
// console.warn();
// console.error();

// const divElement = document.querySelector(".container");
// const formElement = document.createElement("form");
// // formElement.className = "form";
// formElement.setAttribute("class","form")
// divElement.appendChild(formElement)

// const Namelabel = document.createElement("label");
// Namelabel.setAttribute("class","name-label");
// Namelabel.textContent = "Name :";
// formElement.appendChild(Namelabel);

// const FirstName = document.createElement("input");
// FirstName.setAttribute("class","first-name");
// FirstName.placeholder = "First Name";
// formElement.appendChild(FirstName);

// const LastName = document.createElement("input");
// LastName.setAttribute("class","last-name");
// LastName.placeholder = "Last Name";
// formElement.appendChild(LastName);


// let arr = []
// let formElementIterator = Array.from(formElement.elements)
// formElementIterator.forEach(element => {
//     console.log(element.value);
//     arr.push(element.value)
// });
// console.log(arr)



function randomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
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



const divEl = document.querySelector(".container");
const formEl = document.createElement("form");
formEl.method = "post";
const headingEl = document.createElement("h1");
headingEl.textContent = "SignUp Form";
// headingEl.setAttribute("class","form-heading");
headingEl.setAttribute("data-user", "form-headings");
//headingEl.className = "form-heading";
// headingEl.style.textAlign = "center";
// headingEl.style.color = "blue";
const firstNameLabelEl = document.createElement("label");
firstNameLabelEl.textContent = "First Name";

const firstNameInputEl = document.createElement("input");
firstNameInputEl.type = "text";
firstNameInputEl.maxLength = 20;
firstNameInputEl.placeholder = "Enter Your First Name";

const lastNameLabelEl = document.createElement("label");
lastNameLabelEl.textContent = "Last Name";

const lastNameInputEl = document.createElement("input");
lastNameInputEl.type = "text";
lastNameInputEl.maxLength = 20;
lastNameInputEl.placeholder = "Enter Your Last Name";

const inputs = [
    {
        label_name: "First Name",
        input_type: "text",
        placeholder: "Enter Your First Name",
        maxlength: 20
    },
    {
        label_name: "Last Name",
        input_type: "text",
        placeholder: "Enter Your Last Name",
        maxlength: 20
    },
    {
        label_name: "Country",
        input_type: "select",
        items: [
            {
                value: "",
                label: "Select Country"
            },
            {
                value: 1,
                label: "India"
            },
            {
                value: 8,
                label: "USA"
            },
            {
                value: 10,
                label: "China"
            },
            {
                value: 4,
                label: "Pakistan"
            },
            {
                value: 100,
                label: "Japan"
            }

        ]
    },
    {
        label_name: "Language",
        input_type: "checkbox",
        items: [
            {
                value: 1,
                label: "English"
            },
            {
                value: 8,
                label: "Tamil"
            },
            {
                value: 10,
                label: "Telugu"
            },
            {
                value: 4,
                label: "Hindi"
            },
            {
                value: 100,
                label: "Japanese"
            }
        ]
    },
    {
        label_name: "Gender",
        input_type: "radio",
        name: "gender",
        items: [
            {
                value: 1,
                label: "Male"
            },
            {
                value: 8,
                label: "Female"
            },
            {
                value: 10,
                label: "Other"
            }
        ]
    },
    {
        label_name: "Skills",
        input_type: "select",
        is_multiple: true,
        items: [
            {
                value: "",
                label: "Select Skills"
            },
            {
                value: 1,
                label: "Java"
            },
            {
                value: 8,
                label: "Python"
            },
            {
                value: 10,
                label: "JavaScript"
            },
            {
                value: 4,
                label: "HTML"
            }
        ]
    },
];

formEl.appendChild(headingEl);

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const labelEl = document.createElement("label");
    labelEl.textContent = input.label_name;
    
    const breakEl = document.createElement("br");
    
    let inputEl;

    if (input.input_type === "select") {
        inputEl = document.createElement("select");

        if (input.is_multiple) {
            inputEl.multiple = "multiple"
        } 

        const items = input.items;

        items.map((item, index) => {
            const optionEl = document.createElement("option");
            optionEl.value = item.value;
            optionEl.textContent = item.label;
            inputEl.appendChild(optionEl);
        });

    } else if (input.input_type === "checkbox" || input.input_type === "radio") {
        const items = input.items;
        const divEl = document.createElement("div");
        items.map((item, index) => {
            const randomName = randomString(30);
            const inputEl = document.createElement("input");
            inputEl.type = input.input_type;
            inputEl.value = item.value;
            inputEl.name = input.name;
            inputEl.id = randomName;
            const labelEl = document.createElement('label');
            labelEl.textContent = item.label;
            labelEl.setAttribute("for", randomName)
            divEl.appendChild(inputEl);
            divEl.appendChild(labelEl);

        });
        inputEl = divEl;
    } else {
        inputEl = document.createElement("input");
        inputEl.type = input.input_type;
        inputEl.maxLength = input.maxlength;
        inputEl.placeholder = input.placeholder;
    }
    //  = document.createElement("input");
    // inputEl.type = input.input_type;
    // inputEl.maxLength = input.maxlength;
    // inputEl.placeholder = input.placeholder;

    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(breakEl);
}

const submit = document.createElement("input")
submit.className = "submit";
submit.type = "submit"
submit.textContent = "submit";
formEl.addEventListener("submit",function (e){
    e.preventDefault();
    let arr = []
    let formElementIterator = Array.from(formEl.elements)
    formElementIterator.forEach(element => {
        console.log(element.value);
        arr.push(element.value)
    });
    console.log(arr)
})
formEl.appendChild(submit);


const div1 = document.createElement("div");
const p = document.createElement("p")
p.innerText="hi div 1"
div1.style.backgroundColor = "red"
div1.appendChild(p)
const div2 = document.createElement("div");
const p1 = document.createElement("p")
div2.style.backgroundColor = "blue";
p1.innerText="hi div 2"
div2.appendChild(p1)
const div3 = document.createElement("div");
const p2 = document.createElement("p")
div3.style.backgroundColor=     "green";
p2.innerText="hi div 3"
div3.appendChild(p2);
document.body.appendChild(div1);
div1.appendChild(div2);
div2.appendChild(div3);
// formEl.appendChild(firstNameLabelEl);
// formEl.appendChild(firstNameInputEl);
// formEl.appendChild(lastNameLabelEl);
// formEl.appendChild(lastNameInputEl);
divEl.appendChild(formEl);

div1.addEventListener("click",function(e){
 console.log(this);
 console.log(e);
})

// div2.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     console.log(this);
//    })

div3.addEventListener("click",(e)=>{
    // e.stopPropagation()
    console.log(this);
   })

console.log(this)

function test() {
    console.log(this)
}
new test()

const person ={
    first_name: "sai",
    last_name: "varun",
    age: "21",
    get_full_name:function(){
        console.log(`${this.first_name} ${this.last_name}`);
    }
}
person.get_full_name()