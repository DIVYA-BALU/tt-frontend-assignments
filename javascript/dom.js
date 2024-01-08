
const bodyEl = document.getElementById('body');
// console.log("helloworld");
// console.info("helloworld");
// console.warn("helloworld");
// console.error("helloworld");
//bodyEl.appendChild(formEl);
const divEl = document.createElement('div');
const formEl = document.createElement('form');
const FirstName_label = document.createElement('label');
FirstName_label.textContent = "FirstName: ";
const LastName_label = document.createElement('label');
LastName_label.textContent = "LastName:";
const headingEl = document.createElement('h1');
const inputFirstname = document.createElement('input');
inputFirstname.type = "text";
inputFirstname.maxLength = 20;
inputFirstname.placeholder = "Enter FirstName";
const inputLastname = document.createElement('input');
inputLastname.type = "text";
inputLastname.maxLength = 20;
inputLastname.placeholder = "Enter LastName";
headingEl.setAttribute("class", "form-h1");
headingEl.textContent = "SignUp Form";


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
    }
]


formEl.appendChild(headingEl);
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const labelEl = document.createElement('label');
    labelEl.textContent = input.label_name;
    let inputEl;
    if (input.input_type == "select") {
        inputEl = document.createElement('select');
        const items = input.items;
        items.map((item, index) => {
            const optionEl = document.createElement('option');
            optionEl.value = item.value;
            optionEl.textContent = item.label;
            inputEl.appendChild(optionEl);
        });
    }
    else {
        inputEl = document.createElement('input');
        inputEl.type = input.input_type;
        inputEl.maxLength = input.maxlength;
        inputEl.placeholder = input.placeholder;
    }
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
}
divEl.appendChild(formEl);
bodyEl.appendChild(divEl);

