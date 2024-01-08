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

const divEl = document.getElementById("content");
const formEl = document.createElement("form");
formEl.method="post";
formEl.id="myform";
const headingEl = document.createElement("h1");
headingEl.textContent = "SignUp Form";
// headingEl.setAttribute("class","form-heading");
headingEl.setAttribute("data-user", "form-headings");
//headingEl.className = "form-heading";
// headingEl.style.textAlign = "center";
// headingEl.style.color = "blue";


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
        inputEl.title="skills";
            inputEl.multiple = "multiple"
        } else{
            inputEl.title="country";
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
            labelEl.setAttribute("for", randomName);
            divEl.appendChild(inputEl);
            divEl.appendChild(labelEl);

        });
        inputEl = divEl;
    } else {
        inputEl = document.createElement("input");
        inputEl.name=input.label_name;
        inputEl.type = input.input_type;
        inputEl.maxLength = input.maxlength;
        inputEl.placeholder = input.placeholder;
    }

    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
    formEl.appendChild(breakEl);

}
const buttonEl = document.createElement('input');
buttonEl.type = 'button';
buttonEl.value = 'submit';
buttonEl.name = 'submit';
buttonEl.setAttribute("onclick","clickFunction()")
formEl.appendChild(buttonEl);
divEl.appendChild(formEl);


function clickFunction(){
    // const element = formEl.elements
    // // var formData = new FormData(element);
    // let a=document.querySelectorAll("input")
    // for(let i = 0; i<a.length; i++){
    //     console.log(a[i].name,a[i].value);}
    
    // // output as an object
    // // console.log(Object.fromEntries(formData));
    // // console.log(element);
    // for(let i = 0; i<element.length; i++){
    // console.log(element[i].name,element[i].getRootNode);}

    event.preventDefault(); // Prevent form submission

    // Get the form element
    var form = document.getElementById('myform');

    // Create a FormData object from the form
    var formData = new FormData(form);
    console.log(formData.getAll);
    // Loop through the FormData entries and display key-value pairs
    formData.forEach(function(value, key){
        console.log(key + ': ' + value);
    });
}
