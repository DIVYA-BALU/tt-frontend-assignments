document.addEventListener("DOMContentLoaded",()=>{
    let container = document.createElement("div");
    container.className = "container";
    document.body.appendChild(container);

    let form = document.createElement("form");
    form.className = "contact-info";
    container.appendChild(form);

    function linebreaker() {
        const linebreak = document.createElement("br");
        form.appendChild(linebreak);
    }
    let title = document.createElement("h1");
    title.innerHTML = "Contact Info Form";
    form.appendChild(title);

    let firstNameLabel = document.createElement("label");
    firstNameLabel.innerText = "Full Name :";
    form.appendChild(firstNameLabel);
    linebreaker();
    let firstName = document.createElement("input");
    firstName.className = "first-name";
    firstName.type = "text";
    firstName.placeholder = "First";
    firstName.required = true;
    form.appendChild(firstName);
    
    let lastName = document.createElement("input");
    lastName.className = "last-name";
    lastName.type = "text";
    lastName.placeholder = "Last";
    lastName.required = true;
    form.appendChild(lastName);
    linebreaker();

    let DOBLabel = document.createElement("label");
    DOBLabel.innerText = "DOB :";
    form.appendChild(DOBLabel);
    linebreaker();
    let dob = document.createElement("input");
    dob.type ="date";
    dob.className ="dob";
    dob.required = true;
    form.appendChild(dob);
    linebreaker();

    let emailLabel = document.createElement("label");
    emailLabel.innerText = "Email :";
    form.appendChild(emailLabel);
    linebreaker();
    let email = document.createElement("input");
    email.type = "email";
    email.className = "email";
    email.required = true;
    form.appendChild(email);
    linebreaker();

    let phoneNumberLabel = document.createElement("label");
    phoneNumberLabel.innerText = "Phone number :";
    form.appendChild(phoneNumberLabel);
    linebreaker();
    let phoneNumber = document.createElement("input");
    phoneNumber.type = "tel";
    phoneNumber.className = "phoneNumber";
    phoneNumber.placeholder ="##########";
    phoneNumber.required = true;
    form.appendChild(phoneNumber);
    linebreaker();

    let institutionLabel = document.createElement("label");
    institutionLabel.innerText = "Institution Name :";
    form.appendChild(institutionLabel);
    linebreaker();
    let institution = document.createElement("input");
    institution.className = "institution";
    institution.type = "text";
    institution.placeholder = "Institution";
    institution.required = true;
    form.appendChild(institution);
    linebreaker();

    let gradeOrYearLabel = document.createElement("label");
    gradeOrYearLabel.innerText = "Grade/Year :";
    form.appendChild(gradeOrYearLabel);
    linebreaker();
    let gradeOrYear = document.createElement("input");
    gradeOrYear.className = "grade-or-year";
    gradeOrYear.type = "text";
    gradeOrYear.placeholder = "Grade Or Year";
    gradeOrYear.required = true;
    form.appendChild(gradeOrYear);
    linebreaker();

    linebreaker();

    let submit = document.createElement("button");
    submit.className = "submit"
    submit.textContent = "Submit";
    form.addEventListener("submit",(e)=>{
        // e.preventDefault()
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(dob.value);
        console.log(phoneNumber.value)
        console.log(email.value);
        console.log(institution.value);
        console.log(gradeOrYear.value);

        firstName.value='';
        lastName.value='';
        dob.value='';
        phoneNumber.value='';
        email.value='';
        institution.value='';
        gradeOrYear.value='';

    })
    form.appendChild(submit);
});