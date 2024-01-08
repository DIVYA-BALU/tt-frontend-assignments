const fieldFirst = { label: "Full Name", type: "text", id: "first-name", name: "first_name", placeholder: "First" };
const fieldLast = { type: "text", id: "last-name", name: "last_name", placeholder: "Last" };
const fields = [
    { label: "Date of Birth", type: "date", id: "date-of-birth", name: "date_of_birth", placeholder: "DD/MM/YYYY" },
    { label: "Email Address", type: "email", id: "email-id", name: "email_id" },
    { label: "Phone Number", type: "tel", id: "phone-number", name: "phone_number", placeholder: "### ### ####" },
    { label: "School/College/Institution", type: "text", id: "institution-name", name: "institution_name" },
    { label: "Grade/Year", type: "text", id: "grade-year", name: "year_grade" }
];

const form = document.createElement('form');
form.id = 'registerForm';
form.method = 'post';
form.action = 'submit';
const br = document.createElement('br');

const heading = document.createElement('h1');
heading.textContent = 'Youth Leadership Summit Registration Form';
form.appendChild(heading);

const inputDiv = document.createElement('div');
const label = document.createElement('label');

label.textContent = fieldFirst.label;
inputDiv.appendChild(label);
inputDiv.appendChild(br);

const input = document.createElement('input');
input.type = fieldFirst.type;
input.id = fieldFirst.id;
input.name = fieldFirst.name;
input.placeholder = fieldFirst.placeholder || '';

inputDiv.appendChild(input);

const input2 = document.createElement('input');
input2.type = fieldLast.type;
input2.id = fieldLast.id;
input2.name = fieldLast.name;
input2.placeholder = fieldLast.placeholder || '';

inputDiv.appendChild(input2);
form.appendChild(inputDiv);

fields.forEach(field => {

    const inputDiv = document.createElement('div');
    const label = document.createElement('label');
   

    label.textContent = field.label;
    inputDiv.appendChild(label);

    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;
    input.name = field.name;
    input.placeholder = field.placeholder || '';

    inputDiv.appendChild(input);
    form.appendChild(inputDiv);
});

form.appendChild(br.cloneNode());
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Next Page';
form.appendChild(submitBtn);
document.body.appendChild(form);

// function createLabel(){
//     return document.createElement('label');
// }

// let form = document.createElement("form");
// form.setAttribute("method", "post");
// form.setAttribute("action" , "submit");
// document.getElementsByTagName("body")[0].appendChild(form);

// let nameTag = createLabel();
// nameTag.innerHTML = "Full Name";
// let firstName = document.createElement("input");
// firstName.setAttribute("placeholder", "First");
// firstName.setAttribute("type", "text");
// firstName.setAttribute("id", "first-name");
// firstName.setAttribute("name", "first_name");
// firstName.appendChild(nameTag);

// let lastName = document.createElement("input");
// lastName.setAttribute("placeholder", "Last");
// lastName.setAttribute("type", "text");
// lastName.setAttribute("id", "last-name");
// lastName.setAttribute("name", "last_name");
// lastName.appendChild(nameTag);

// let dateOfBirthTag = createLabel();
// dateOfBirthTag.innerHTML = "Date of Birth";
// let dateOfBirth = document.createElement("input");
// dateOfBirth.setAttribute("placeholder", "DD/MM/YYYY");
// dateOfBirth.setAttribute("type", "date");
// dateOfBirth.setAttribute("id", "date-of-birth");
// dateOfBirth.setAttribute("name", "date_of_birth");
// dateOfBirth.appendChild(dateOfBirthTag);

// let emailTag = createLabel();
// emailTag.innerHTML = "Email Address";
// let email = document.createElement("input");
// email.setAttribute("type", "email");
// email.setAttribute("id", "email-id");
// email.setAttribute("name", "email_id");
// email.appendChild(emailTag);

// let phoneNumberTag = createLabel();
// phoneNumberTag.innerHTML = "Phone Number";
// let phoneNumber = document.createElement("input");
// phoneNumber.setAttribute("placeholder", "### ### ####");
// phoneNumber.setAttribute("type", "tel");
// phoneNumber.setAttribute("id", "phone-number");
// phoneNumber.setAttribute("name", "phone_number");
// phoneNumber.appendChild(phoneNumberTag)

// let institutionTag = createLabel();
// institutionTag.innerHTML = "School/College/Institution";
// let institution = document.createElement("input");
// institution.setAttribute("type", "text");
// institution.setAttribute("id", "institution-name");
// institution.setAttribute("name", "institution_name");
// institution.appendChild(institutionTag);

// let yearTag = createLabel();
// yearTag.innerHTML = "Grade/Year";
// let year = document.createElement("input");
// year.setAttribute("type", "text");
// year.setAttribute("id", "grade-year");
// year.setAttribute("name", "year_grade");
// year.appendChild(yearTag);

// let btnTag = createLabel();
// btnTag.innerHTML = "Next Page";
// let submitBtn = document.createElement("button");
// submitBtn.appendChild(btnTag);

// let br = document.createElement("br");
// form.appendChild(nameTag);
// form.appendChild(br.cloneNode());
// form.appendChild(firstName);
// form.appendChild(lastName);
// form.appendChild(br.cloneNode());
// form.appendChild(dateOfBirthTag);
// form.appendChild(br.cloneNode());
// form.appendChild(dateOfBirth);
// form.appendChild(br.cloneNode());
// form.appendChild(emailTag);
// form.appendChild(br.cloneNode());
// form.appendChild(email);
// form.appendChild(br.cloneNode());
// form.appendChild(phoneNumberTag);
// form.appendChild(br.cloneNode());
// form.appendChild(phoneNumber);
// form.appendChild(br.cloneNode());
// form.appendChild(institutionTag);
// form.appendChild(br.cloneNode());
// form.appendChild(institution);
// form.appendChild(br.cloneNode());
// form.appendChild(yearTag);
// form.appendChild(br.cloneNode());
// form.appendChild(year);
// form.appendChild(br.cloneNode());
// form.appendChild(submitBtn);
// form.appendChild(br.cloneNode());