
document.addEventListener("DOMContentLoaded", () => {

    countDown();

    document.addEventListener("click", (event) => {

        if (event.target.getAttribute("for")) { // check for both input and label     
            event.stopPropagation();
        } else {
            const selected = event.target;
            const name = selected.name;

            selected.className = "checked";

            const inputEl = document.getElementsByName(name);

            for (let i = 0; i < inputEl.length; i++) {
                const input = inputEl[i];

                const id = input.getAttribute("id");
                const labelEl = document.querySelector(`label[for="${id}"]`);

                setTimeout(() => {
                    input.disabled = "disabled";
                    labelEl.className = "disable";
                }, 10000);
            }
        }
    });
});

let timeLeft = 60;

const containerEl = document.getElementById("container");
const spanElement = document.createElement("span");
spanElement.className = "countdown";
containerEl.appendChild(spanElement);

function countDown() {

    if (timeLeft > -1) {
        spanElement.textContent = timeLeft--;
        setTimeout(() => {
            countDown();
        }, 1000);
    } else {
        spanElement.textContent = "Time out";
        getAllInputs();
        document.querySelector(`input[type='submit']`).click();
    }
}

function getAllInputs() {
    const inputs = document.querySelectorAll(`input[type='radio']`);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = "disabled";
    }
}

const randomNumbers = [];
function randomNumber() {
    let number;
    do {
        number = Math.round(Math.random() * 24);
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
    options: ["HyperText Markup Language", "HotMail", "How to Make Lasagna"],
    name: "quiz_one",
    answer: 1
},
{
    question: "How many tags are in a regular HTML element?",
    options: [2, 1, 3],
    name: "quiz_two",
    answer: 1
},
{
    question: "What is the difference between an opening tag and a closing tag?",
    options: ["Opening tag has a / in front.", "Closing tag has a / in front.", "There is no difference."],
    name: "quiz_three",
    answer: 2
},
{
    question: "<br> What type of tag is this?",
    options: ["Break tag", "A broken one", "An opening tag"],
    name: "quiz_four",
    answer: 1
},
{
    question: "In which section or part of an HTML document is the meta tag typically located?",
    options: ["The last page", "Any page", "The second page"],
    name: "quiz_five",
    answer: 2
},
{
    question: "What is the smallest header in HTML by default?",
    options: ["h1", "h6", "h5"],
    name: "quiz_six",
    answer: 2
},
{
    question: "What are the types of lists available in HTML?",
    options: ["Ordered,Unordered lists", "Bulleted,Numbered lists", "Named,Unamed lists"],
    name: "quiz_seven",
    answer: 1
},
{
    question: "The correct sequence of HTML tags for starting a webpage is -",
    options: ["Head, Title, HTML, body", "HTML, Head, Title, Body", "HTML, Body, Title, Head"],
    name: "quiz_eight",
    answer: 2
},
{
    question: "Types of CSS",
    options: ["2", "3", "4"],
    name: "quiz_nine",
    answer: 2
},
{
    question: "Which of the following element is responsible for making the text bold in HTML?",
    options: ["<pre>", "<b>", "<br>"],
    name: "quiz_ten",
    answer: 2
},
{
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    options: ["<h6>", "<h1>", "<h3>"],
    name: "quiz_eleven",
    answer: 2
},
{
    question: "Which of the following tag is used to insert a line-break in HTML?",
    options: ["<b>", "<pre>", "<br>"],
    name: "quiz_twelve",
    answer: 3
},
{
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    options: ["<ul>", "<ol>", "<li>"],
    name: "quiz_thirteen",
    answer: 1
},
{
    question: "Which character is used to represent the closing of a tag in HTML?",
    options: ["/", "!", "?"],
    name: "quiz_fourteen",
    answer: 1
},
{
    question: "How to create a hyperlink in HTML?",
    options: ["<a href = 'www.javatpoint.com'> javaTpoint.com </a>", "<a url = 'www.javatpoint.com' javaTpoint.com /a>", "<a link = 'www.javatpoint.com'> javaTpoint.com </a>"],
    name: "quiz_fifteen",
    answer: 1
},
{
    question: "How to create an ordered list (a list with the list items in numbers) in HTML?",
    options: ["ul", "li", "ol"],
    name: "quiz_sixteen",
    answer: 3
},
{
    question: "Which of the following element is responsible for making the text italic in HTML?",
    options: ["<b>", "<p>", "<i>"],
    name: "quiz_seventeen",
    answer: 3
},
{
    question: "How to insert an image in HTML?",
    options: ["<img href = 'jtp.png' />", "<img url = 'jtp.png' />", "<img src = 'jtp.png' />"],
    name: "quiz_eighteen",
    answer: 3
},
{
    question: "How to add a background color in HTML?",
    options: ["<marquee bg color: 'red'>", "<marquee bgcolor: 'red'>", "<marquee bg-color: 'red'>"],
    name: "quiz_ninteen",
    answer: 2
},
{
    question: "Which of the following tag is used to make the underlined text?",
    options: ["<b>", "<ul>", "<u>"],
    name: "quiz_twenty",
    answer: 3
},
{
    question: "How to create a checkbox in HTML?",
    options: ["<input type='checkbox'>", "<input type='check'>", "<checkbox>"],
    name: "quiz_twentyone",
    answer: 1
},
{
    question: "Which of the following tag is used to define options in a drop-down selection list?",
    options: ["<select>", "<dropdown>", "<option>"],
    name: "quiz_twentytwo",
    answer: 3
},
{
    question: "HTML tags are enclosed in-",
    options: ["{and}", "<and>", "!and!"],
    name: "quiz_twentythree",
    answer: 2
},
{
    question: "Which of the following tag is used to add rows in the table?",
    options: ["<td> and </td>", "<tr> and </tr>", "<th> and </th>"],
    name: "quiz_twentyfour",
    answer: 2
},
{
    question: "The <hr> tag in HTML is used for -",
    options: ["new line", "horizontal ruler", "new paragraph"],
    name: "quiz_twentyfive",
    answer: 2
},
];

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
        const randomIdName = randomString(5);

        const inputEl = document.createElement("input");
        inputEl.setAttribute("type", "radio");
        inputEl.id = randomIdName;
        inputEl.setAttribute("name", questions[randomIndex].name);
        inputEl.setAttribute("value", j);
        inputEl.required = "required";

        const labelEl = document.createElement("label");
        labelEl.setAttribute("for", randomIdName);
        labelEl.textContent = questions[randomIndex].options[j];

        const breakEl = document.createElement("br");

        divEl.appendChild(inputEl);
        divEl.appendChild(labelEl);
        divEl.appendChild(breakEl);
    }
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
        paraElement.appendChild(spanEl);

        const randomIndex = randomNumbers[index];
        const name = questions[randomIndex].name;

        const selectedAnswers = document.
            querySelectorAll(`input[name="${name}"]`);

        for (let j = 0; j < selectedAnswers.length; j++) {
            const selectedAnswer = selectedAnswers[j];

            const selector = 'label[for=' + selectedAnswer.id + ']';
            const labelEl = document.querySelector(selector);

            if (Number(selectedAnswer.value) === questions[randomIndex].answer - 1) {
                labelEl.className = "correct-text";
                if (selectedAnswer.checked) {
                    spanEl.setAttribute("class", "correct");
                    spanEl.textContent = "Correct";
                    count++;
                }
            } else {
                if (selectedAnswer.checked) {
                    spanEl.setAttribute("class", "wrong");
                    spanEl.textContent = "Wrong";
                    labelEl.className = "wrong-text";
                }
            }
        }
    }
}

function explanation() {
    const divSelected = document.getElementsByClassName("question");
    console.log(divSelected);
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
    checkAns();
    explanation();
    submitDisable();
});