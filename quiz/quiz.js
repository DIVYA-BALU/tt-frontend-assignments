
document.addEventListener("DOMContentLoaded", () => {
    countdown;
    document.addEventListener("click", (event) => {

        if (event.target.getAttribute("for")) { // check for both input and label     
            event.stopPropagation();            //prevent that event from further progation
        } else if (event.target.getAttribute("type")) {
            const selected = event.target;
            const name = selected.name;
            const inputEls = document.getElementsByName(name);

            for (let i = 0; i < inputEls.length; i++) {
                const input = inputEls[i];
                const id = input.getAttribute("id");
                const labelEl = document.querySelector(`label[for="${id}"]`);
                setTimeout(() => {
                    input.disabled = "disabled";
                    labelEl.id = "disable";
                }, 5000);
            }
        }
    });
});

let timeLeft = 10;

const containerEl = document.getElementById("container");
const spanElement = document.createElement("span");
spanElement.className = "countdown";
containerEl.appendChild(spanElement);

function countDown() {

    if (timeLeft > -1) {
        spanElement.textContent = timeLeft--;
    } else {
        spanElement.textContent = "Time out";
        getAllInputs();
        document.querySelector(`input[type='submit']`).click();
    }
}

const countdown = setInterval(() => {
    countDown();
}, 1000);

function getAllInputs() {
    const radioInputs = document.querySelectorAll(`input[type='radio']`);
    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].disabled = "disabled";
    }
    const checkboxInputs = document.querySelectorAll(`input[type='checkbox']`);
    for (let i = 0; i < checkboxInputs.length; i++) {
        checkboxInputs[i].disabled = "disabled";
    }
}

const randomNumbers = [];
function randomNumber() {
    let number;
    do {
        number = Math.round(Math.random() * 26);
    } while (contains(number));
    randomNumbers.push(number);
    return number;
}

function contains(number) {
    for (let index = 0; index < randomNumbers.length; index++) {
        const element = randomNumbers[index];
        if (element === number) {
            return true;
        }
    }
    return false;
}

function randomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let res = '';
    for (var i = 0; i < lenString; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        res += characters.substring(rnum, rnum + 1);
    }
    return res;
}

const questions = [{
    question: "What does HTML stand for?",
    name: "quiz_one",
    options: [{
        option: "HyperText Markup Language",
        answer: true
    },
    {
        option: "HotMail",
        answer: false
    },
    {
        option: "How to Make Lasagna",
        answer: false
    }],
    type: "radio",
},
{
    question: "How many tags are in a regular HTML element?",
    name: "quiz_two",
    options: [{
        option: 2,
        answer: true
    },
    {
        option: 1,
        answer: false
    },
    {
        option: 3,
        answer: false
    }],
    type: "radio"
},
{
    question: "What is the difference between an opening tag and a closing tag?",
    name: "quiz_three",
    options: [{
        option: "Opening tag has a / in front.",
        answer: false
    },
    {
        option: "Closing tag has a / in front.",
        answer: true
    },
    {
        option: "There is no difference.",
        answer: false
    }],
    type: "radio"
},
{
    question: "<br> What type of tag is this?",
    name: "quiz_four",
    options: [{
        option: "Break tag",
        answer: true
    },
    {
        option: "A broken one",
        answer: false
    },
    {
        option: "An opening tag",
        answer: false
    }],
    type: "radio"
},
{
    question: "In which section or part of an HTML document is the meta tag typically located?",
    name: "quiz_five",
    options: [{
        option: "The last page",
        answer: false
    },
    {
        option: "Any page",
        answer: true
    },
    {
        option: "The second page",
        answer: false
    }],
    type: "radio"
},
{
    question: "What is the smallest header in HTML by default?",
    name: "quiz_six",
    options: [{
        option: "h1",
        answer: false
    },
    {
        option: "h6",
        answer: true
    },
    {
        option: "h5",
        answer: false
    }],
    type: "radio"
},
{
    question: "What are the types of lists available in HTML?",
    name: "quiz_seven",
    options: [{
        option: "Ordered,Unordered lists",
        answer: true
    },
    {
        option: "Bulleted,Numbered lists",
        answer: false
    },
    {
        option: "Named,Unamed lists",
        answer: false
    }],
    type: "radio"
},
{
    question: "The correct sequence of HTML tags for starting a webpage is -",
    name: "quiz_eight",
    options: [{
        option: "Head, Title, HTML, body",
        answer: false
    },
    {
        option: "HTML, Head, Title, Body",
        answer: true
    },
    {
        option: "HTML, Body, Title, Head",
        answer: false
    }],
    type: "radio"
},
{
    question: "Types of CSS",
    name: "quiz_nine",
    options: [{
        option: "2",
        answer: false
    },
    {
        option: "3",
        answer: true
    },
    {
        option: "4",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which of the following element is responsible for making the text bold in HTML?",
    name: "quiz_ten",
    options: [{
        option: "<pre>",
        answer: false
    },
    {
        option: "<b>",
        answer: true
    },
    {
        option: "<br>",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    name: "quiz_eleven",
    options: [{
        option: "<h6>",
        answer: false
    },
    {
        option: "<h1>",
        answer: true
    },
    {
        option: "<h3>",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which of the following tag is used to insert a line-break in HTML?",
    name: "quiz_twelve",
    options: [{
        option: "<b>",
        answer: false
    },
    {
        option: "<pre>",
        answer: false
    },
    {
        option: "<br>",
        answer: true
    }],
    type: "radio",
    answer: 3
},
{
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    name: "quiz_thirteen",
    options: [{
        option: "<ul>",
        answer: true
    },
    {
        option: "<ol>",
        answer: false
    },
    {
        option: "<li>",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which character is used to represent the closing of a tag in HTML?",
    name: "quiz_fourteen",
    options: [{
        option: "/",
        answer: true
    },
    {
        option: "!",
        answer: false
    },
    {
        option: "?",
        answer: false
    }],
    type: "radio"
},
{
    question: "How to create a hyperlink in HTML?",
    name: "quiz_fifteen",
    options: [{
        option: "<a href = 'www.javatpoint.com'> javaTpoint.com </a>",
        answer: true
    },
    {
        option: "<a url = 'www.javatpoint.com' javaTpoint.com /a>",
        answer: false
    },
    {
        option: "<a link = 'www.javatpoint.com'> javaTpoint.com </a>",
        answer: false
    }],
    type: "radio"
},
{
    question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
    name: "quiz_sixteen",
    options: [{
        option: "ul",
        answer: false
    },
    {
        option: "li",
        answer: false
    },
    {
        option: "ol",
        answer: true
    }],

    type: "radio",
    answer: 3
},
{
    question: "Which of the following element is responsible for making the text italic in HTML?",
    name: "quiz_seventeen",
    options: [{
        option: "<b>",
        answer: false
    },
    {
        option: "<p>",
        answer: false
    },
    {
        option: "<i>",
        answer: true
    }],
    type: "radio"
},
{
    question: "How to insert an image in HTML?",
    name: "quiz_eighteen",
    options: [{
        option: "<img href = 'jtp.png' />",
        answer: false
    },
    {
        option: "<img url = 'jtp.png' />",
        answer: false
    },
    {
        option: "<img src = 'jtp.png' />",
        answer: true
    }],
    type: "radio"
},
{
    question: "How to add a background color in HTML?",
    name: "quiz_ninteen",
    options: [{
        option: "<marquee bg color: 'red'>",
        answer: false
    },
    {
        option: "<marquee bgcolor: 'red'>",
        answer: true
    },
    {
        option: "<marquee bg-color: 'red'>",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which of the following tag is used to make the underlined text?",
    name: "quiz_twenty",
    options: [{
        option: "<b>",
        answer: false
    },
    {
        option: "<ul>",
        answer: false
    },
    {
        option: "<u>",
        answer: true
    }],
    type: "radio"
},
{
    question: "How to create a checkbox in HTML?",
    name: "quiz_twentyone",
    options: [{
        option: "<input type='checkbox'>",
        answer: true
    },
    {
        option: "<input type='check'>",
        answer: false
    },
    {
        option: "<checkbox>",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which of the following tag is used to define options in a drop-down selection list?",
    name: "quiz_twentytwo",
    options: [{
        option: "<select>",
        answer: false
    },
    {
        option: "<dropdown>",
        answer: false
    },
    {
        option: "<option>",
        answer: true
    }],
    type: "radio"
},
{
    question: "HTML tags are enclosed in-",
    name: "quiz_twentythree",
    options: [{
        option: "{and}",
        answer: false
    },
    {
        option: "<and>",
        answer: true
    },
    {
        option: "!and!",
        answer: false
    }],
    type: "radio"
},
{
    question: "Which of the following tag is used to add rows in the table?",
    name: "quiz_twentyfour",
    options: [{
        option: "<td> and </td>",
        answer: false
    },
    {
        option: "<tr> and </tr>",
        answer: true
    },
    {
        option: "<th> and </th>",
        answer: false
    }],
    type: "radio"
},
{
    question: "The <hr> tag in HTML is used for -",
    name: "quiz_twentyfive",
    options: [{
        option: "new line",
        answer: false
    },
    {
        option: "horizontal ruler",
        answer: true
    },
    {
        option: "new paragraph",
        answer: false
    }],
    type: "radio"
},
{
    question: "What do you understand by HTML?",
    name: "quiz_twentysix",
    options: [{
        option: "HTML describes the structure of a webpage",
        answer: true
    },
    {
        option: "HTML is the standard markup language mainly used to create web pages",
        answer: true
    },
    {
        option: "HTML consists of a set of elements that helps the browser how to view the content",
        answer: true
    }],
    type: "checkbox"
},
{
    question: "Which of the following tags are inline elements in HTML? (Select all that apply)",
    name: "quiz_twentyseven",
    options: [{
        option: "<div>",
        answer: false
    },
    {
        option: "<span>",
        answer: true
    },
    {
        option: "<p>",
        answer: true
    },
    {
        option: "<h1>",
        answer: false
    },
    {
        option: "<ul></ul>",
        answer: false
    }],
    type: "checkbox"
}];

// let skip = 5;

const divEl = document.getElementById("container");
const formEl = document.createElement("form");
formEl.setAttribute("id", "quiz_form");
const headingEl = document.createElement("h1");
headingEl.textContent = "HTML Quiz";
formEl.appendChild(headingEl);

for (let index = 0; index < 10; index++) {
    const randomIndex = randomNumber();
    const divEl = document.createElement("div");
    divEl.setAttribute("class", "question");
    formEl.appendChild(divEl);
    const paraEl = document.createElement("p");
    paraEl.textContent = `Q${index + 1} . ${questions[randomIndex].question}`;
    divEl.appendChild(paraEl);

    for (let j = 0; j < questions[randomIndex].options.length; j++) {

        if (questions[j].type === "radio" || questions[j].type === "checkbox") {
            const randomIdName = randomString(5);
            const inputEl = document.createElement("input");
            inputEl.setAttribute("type", questions[randomIndex].type);
            inputEl.id = randomIdName;
            inputEl.setAttribute("name", questions[randomIndex].name);
            inputEl.setAttribute("value", j);
            if (questions[randomIndex].type === "radio") {
                inputEl.required = "required";
            }
            const labelEl = document.createElement("label");
            labelEl.setAttribute("for", randomIdName);
            labelEl.textContent = questions[randomIndex].options[j].option;
            const breakEl = document.createElement("br");
            divEl.appendChild(inputEl);
            divEl.appendChild(labelEl);
            divEl.appendChild(breakEl);
        }
    }
    // if(skip > 0){
    //     const skipEl = document.createElement("input");
    // }
}

const buttonDivEl = document.createElement("div");
buttonDivEl.setAttribute("class", "button");
const inputEl = document.createElement("input");
inputEl.type = "submit";
buttonDivEl.appendChild(inputEl);
formEl.appendChild(buttonDivEl);

const questionEl = document.getElementsByTagName("p");
let count = 0;

function checkAns() {
    for (let index = 0; index < randomNumbers.length; index++) {

        const paraElement = questionEl[index];
        const spanEl = document.createElement("span");
        spanEl.id = "answer";
        paraElement.appendChild(spanEl);

        const randomIndex = randomNumbers[index];
        const name = questions[randomIndex].name;
        const selectedAnswers = document.
            querySelectorAll(`input[name="${name}"]`);

        let checkCount = 0;

        for (let j = 0; j < selectedAnswers.length; j++) {
            const selectedAnswer = selectedAnswers[j];
            const selector = `label[for="${selectedAnswer.id}"]`;
            const labelEl = document.querySelector(selector);
            const isChecked = selectedAnswer.checked;

            if (questions[randomIndex].options[j].answer === true) {
                labelEl.className = "correct-text";
                if (isChecked && questions[randomIndex].type === "radio") {
                    spanEl.setAttribute("class", "correct");
                    spanEl.textContent = "Correct";
                    count++;
                }
                if ((isChecked === false) && questions[randomIndex].type === "checkbox") {
                    checkCount++;
                }
            } else {
                if (isChecked) {
                    spanEl.setAttribute("class", "wrong");
                    spanEl.textContent = "Wrong";
                    labelEl.className = "wrong-text";
                }
            }
        }
        if (checkCount === 0 && questions[randomIndex].type === "checkbox") {
            spanEl.setAttribute("class", "correct");
            spanEl.textContent = "Correct";
            count++;
        }
    }
}

// function skip() {
//     document.addEventListener("click", (event) => {
//         if (event.target) {

//         }
//     })
// }

function explanation() {
    const divSelected = document.getElementsByClassName("question");

    for (let i = 0; i < divSelected.length; i++) {
        const divEl = document.createElement("div");
        divEl.className = "explanation";
        divEl.textContent = "Explanation :";
        divSelected[i].id = "explain";
        divSelected[i].appendChild(divEl);
    }
}

function submitDisable() {
    buttonDivEl.setAttribute("class", "button-disable");
    const paraEl = document.createElement("p");
    let result;
    if (count > 5) {
        result = "Passed";
        paraEl.setAttribute("class", "pass");
    } else {
        result = "Failed";
        paraEl.setAttribute("class", "fail");
    }
    paraEl.textContent = `Total Score : ${count} out of 10 ${result}`;
    buttonDivEl.appendChild(paraEl);
    const inputEl = document.createElement("a");
    inputEl.setAttribute("href", "index.html");
    inputEl.textContent = "Retake";
    buttonDivEl.appendChild(inputEl);
}

divEl.appendChild(formEl);

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    clearInterval(countdown);
    checkAns();
    explanation();
    submitDisable();
});