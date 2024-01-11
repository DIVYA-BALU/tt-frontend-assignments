document.addEventListener("DOMContentLoaded", () => {
    startCountdown();

    document.addEventListener("click", (event) => {
        if (event.target.getAttribute("for")) {
            event.stopPropagation();
        } else if (event.target.getAttribute("type")) {
            handleInputSelection(event);
        }
    });
});

let timeLeft = 10;
let correctAnswersCount = 0;

const containerElement = document.getElementById("container");
const countdownSpanElement = document.createElement("span");
countdownSpanElement.className = "countdown";
containerElement.appendChild(countdownSpanElement);

function startCountdown() {
    const countdownInterval = setInterval(() => {
        if (timeLeft > -1) {
            countdownSpanElement.textContent = timeLeft--;
        } else {
            countdownSpanElement.textContent = "Time out";
            disableAllInputs();
            document.querySelector(`input[type='submit']`).click();
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function handleInputSelection(event) {
    const selectedElement = event.target;
    const name = selectedElement.name;
    const inputElements = document.getElementsByName(name);

    for (let i = 0; i < inputElements.length; i++) {
        const input = inputElements[i];
        const id = input.getAttribute("id");
        const labelElement = document.querySelector(`label[for="${id}"]`);

        setTimeout(() => {
            input.disabled = "disabled";
            labelElement.id = "disable";
        }, 5000);
    }
}

function disableAllInputs() {
    disableInputsByType("radio");
    disableInputsByType("checkbox");
}

function disableInputsByType(type) {
    const inputs = document.querySelectorAll(`input[type='${type}']`);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = "disabled";
    }
}

const randomNumbers = [];

function generateRandomNumber() {
    let number;
    do {
        number = Math.round(Math.random() * 26);
    } while (containsNumber(number));
    randomNumbers.push(number);
    return number;
}

function containsNumber(number) {
    return randomNumbers.includes(number);
}

function generateRandomString(length) {
    length = length === undefined ? 7 : length;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let result = '';
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * characters.length);
        result += characters.substring(randomNum, randomNum + 1);
    }
    return result;
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
const quizContainerElement = document.getElementById("container");
const quizFormElement = document.createElement("form");
quizFormElement.setAttribute("id", "quiz_form");
const quizHeadingElement = document.createElement("h1");
quizHeadingElement.textContent = "HTML Quiz";
quizFormElement.appendChild(quizHeadingElement);

for (let index = 0; index < questions.length; index++) {
    const randomIndex = generateRandomNumber();
    const divEl = document.createElement("div");
    divEl.setAttribute("class", "question");
    quizFormElement.appendChild(divEl);
    const paraEl = document.createElement("p");
    paraEl.textContent = `Q${index + 1} . ${questions[randomIndex].question}`;
    divEl.appendChild(paraEl);

    for (let j = 0; j < questions[randomIndex].options.length; j++) {

        if (questions[randomIndex].type === "radio" || questions[randomIndex].type === "checkbox") {
            const randomIdName = generateRandomString(5);
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
}

const buttonContainerElement = document.createElement("div");
buttonContainerElement.setAttribute("class", "button");
const submitButtonElement = document.createElement("input");
submitButtonElement.type = "submit";
buttonContainerElement.appendChild(submitButtonElement);
quizFormElement.appendChild(buttonContainerElement);

const questionEl = document.getElementsByTagName("p");

function checkAnswers() {
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
                    correctAnswersCount++;
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
            correctAnswersCount++;
        }
    }
}

function displayCorrectAnswers() {
    const questionDivElements = document.getElementsByClassName("question");

    for (let i = 0; i < questionDivElements.length; i++) {
        const correctAnswerDivElement = document.createElement("div");
        correctAnswerDivElement.className = "explanation";
        correctAnswerDivElement.textContent = "Correct Answer: ";

        const randomIndex = randomNumbers[i];
        const correctAnswerIndex = questions[randomIndex].options.findIndex(option => option.answer === true);

        const correctAnswerLabel = document.createElement("span");
        correctAnswerLabel.textContent = questions[randomIndex].options[correctAnswerIndex].option;

        correctAnswerDivElement.appendChild(correctAnswerLabel);
        questionDivElements[i].id = "explain";
        questionDivElements[i].appendChild(correctAnswerDivElement);
    }
}


function disableSubmitButton() {
    buttonContainerElement.setAttribute("class", "button-disable");
    const resultParagraphElement = document.createElement("p");
    let result;
    if (correctAnswersCount > 5) {
        result = "Passed";
        resultParagraphElement.setAttribute("class", "pass");
    } else {
        result = "Failed";
        resultParagraphElement.setAttribute("class", "fail");
    }
    resultParagraphElement.textContent = `Total Score : ${correctAnswersCount} out of 10 ${result}`;
    buttonContainerElement.appendChild(resultParagraphElement);
    const retakeLinkElement = document.createElement("a");
    retakeLinkElement.setAttribute("href", "index.html");
    retakeLinkElement.textContent = "Retake";
    buttonContainerElement.appendChild(retakeLinkElement);
}

quizContainerElement.appendChild(quizFormElement);

quizFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    checkAnswers();
    displayCorrectAnswers(); // Changed the function name
    disableSubmitButton();
});