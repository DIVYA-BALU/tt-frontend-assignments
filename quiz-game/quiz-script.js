const body = document.body;

const quizBody = document.createElement("div");
quizBody.id = "quizBody";

const quizQuestions = [
    {
        question: "Who is making the web standards?",
        options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
        answer: "The World Wide Web Consortium",
        name: "question1"

    },
    {
        question: "How can you open a link in a new browser window?",
        options: ["_blank", "target", "same"],
        answer: "_blank",
        name: "question2"

    },
    {
        question: "What does HTML stands for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language",
        name: "question3"

    },
    {
        question: "How to remove the underline from hyperlinks using CSS?",
        options: ["a {underline:none}", "a {text-decoration:no underline}", "a {text-decoration:none}"],
        answer: "a {text-decoration:none}",
        name: "question4"

    },
    {
        question: "What tag do you use to put a title on a table?",
        options: ["<tr>", "<caption>", "<title>"],
        answer: "<caption>",
        name: "question5"

    },
    {
        question: "What tag adds comments to your HTML code?",
        options: ["<!-->", "<comment>", "<title>"],
        answer: "<!-->",
        name: "question6"

    },
    {
        question: "What is a CSS inline style?",
        options: ["CSS code in a style attribute", "CSS code in a style tag", "CSS code in an external css file"],
        answer: "CSS code in a style attribute",
        name: "question7"

    },
    {
        question: "What HTML tag makes a link?",
        options: ["<a>", "<tr>", "<img>"],
        answer: "<a>",
        name: "question8"

    },
    {
        question: "What HTML tag makes a new line?",
        options: ["<a>", "<br>", "<img>"],
        answer: "<br>",
        name: "question9"

    },
    {
        question: "Who is making the web standards?",
        options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
        answer: "The World Wide Web Consortium",
        name: "question10"

    },
    {
        question: "In HTML, what element is used to define the structure of an HTML document, such as headings and paragraphs?",
        options: ["<body>", "<header>", "<section>"],
        answer: "<body>",
        name: "question11"
    },
    {
        question: "Which CSS property is used to control the space between elements inside the content box?",
        options: ["margin", "padding", "border"],
        answer: "padding",
        name: "question12"

    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<li>"],
        answer: "<ul>",
        name: "question13"

    },
    {
        question: "In CSS, what property is used to control the size of text?",
        options: ["font-size", "text-size", "size"],
        answer: "font-size",
        name: "question14"

    },
    {
        question: "What does the JavaScript `console.log()` function do?",
        options: ["Display a message in the console", "Create a new variable", "Define a function"],
        answer: "Display a message in the console",
        name: "question15"

    },
    {
        question: "Which HTML attribute is used to provide additional information about an element?",
        options: ["data-info", "extra", "class"],
        answer: "class",
        name: "question16"

    },
    {
        question: "In CSS, what property is used to set the text alignment within an element?",
        options: ["text-align", "alignment", "align"],
        answer: "text-align",
        name: "question17"

    },
    {
        question: "What is the purpose of the `for` loop in JavaScript?",
        options: ["To create a conditional statement", "To iterate over a sequence of values", "To select elements with CSS selectors"],
        answer: "To iterate over a sequence of values",
        name: "question18"

    },
    {
        question: "Which HTML tag is used to create a hyperlink to another webpage?",
        options: ["<link>", "<a>", "<url>"],
        answer: "<a>",
        name: "question19"

    },
    {
        question: "In CSS, how do you select all paragraphs within a div with the class 'content'?",
        options: [".content p", "div.content p", "#content p"],
        answer: "div.content p",
        name: "question20"

    },
    {
        question: "What is the purpose of the `JSON.stringify` method in JavaScript?",
        options: ["To parse JSON data", "To convert a JavaScript object to a JSON string", "To fetch data from an API"],
        answer: "To convert a JavaScript object to a JSON string",
        name: "question21"

    },
    {
        question: "Which HTML attribute is used to specify alternative text for an image?",
        options: ["alt", "description", "text"],
        answer: "alt",
        name: "question22"

    },
    {
        question: "What HTML tag do you put things in if you want them to appear on the page?",
        options: ["<HTML>", "<p>", "<body>"],
        answer: "<body>",
        name: "question23"
    },
    {
        question: "In CSS, what property is used to set the font weight of text?",
        options: ["font-weight", "text-weight", "weight"],
        answer: "font-weight",
        name: "question24"

    },
    {
        question: "Which HTML tag is used to create a table?",
        options: ["<table>", "<tr>", "<td>"],
        answer: "<table>",
        name: "question25"

    }
];


const indexOfQuestionsSelected = [];
let questionCount = 10;
let count = 0;
while (questionCount) {
    const questionIndex = Math.floor(Math.random() * quizQuestions.length);

    if (!indexOfQuestionsSelected.includes(questionIndex)) {
        indexOfQuestionsSelected.push(questionIndex);
        questionCount--;

        const div = document.createElement("div");
        const question = quizQuestions[questionIndex];

        const h4El = document.createElement("h4");
        h4El.textContent = ++count + ". " + question.question;
        div.appendChild(h4El);

        const options = question.options;

        options.map((option, index) => {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("inner-div");
            const inputEl = document.createElement("input");
            inputEl.type = "radio";
            inputEl.name = question.name;

            const labelEl = document.createElement("label");
            labelEl.textContent = option;
            // const breakEl = document.createElement("br");

            // innerDiv.appendChild(breakEl);
            innerDiv.appendChild(inputEl);
            innerDiv.appendChild(labelEl);
            div.appendChild(innerDiv);
            quizBody.appendChild(div);


        })
    };
}


function isQuizComplete() {
    for (let i = 0; i < indexOfQuestionsSelected.length; i++) {
        const questionIndex = indexOfQuestionsSelected[i];
        const question = quizQuestions[questionIndex];
        const selectedOption = document.querySelector(`input[name='${question.name}']:checked`);
        if (!selectedOption) {
            return false;
        }
    }
    return true;
}

let mark = 0;
let calculateCount = 0;
function dispalyAnswers() {
    if (!isQuizComplete()) {
        alert("Please answer all questions");
        return;
    }
    calculateCount++;
    for (let i = 0; i < indexOfQuestionsSelected.length; i++) {
        const questionIndex = indexOfQuestionsSelected[i];
        const question = quizQuestions[questionIndex];

        const selectedOption = document.querySelector(`input[name='${question.name}']:checked`);

        if (selectedOption) {
            const ansDiv = selectedOption.closest('.inner-div');
            const labelEl = ansDiv.querySelector('label');


            if (labelEl.textContent === question.answer) {
                mark++;
                ansDiv.classList.add("correct-answer");
            } else {
                ansDiv.classList.add("wrong-answer");
                const correctOptionIndex = question.options.indexOf(question.answer);
                const correctOptionDiv = ansDiv.parentNode.children[correctOptionIndex + 1];
                correctOptionDiv.classList.add("correct-answer");
            }
        }
    }
    if (calculateCount === 1)
        quizMarks();
}
const buttonEl = document.createElement("input");
buttonEl.type = "button";
buttonEl.value = "submit";

buttonEl.addEventListener("click", () => {
    dispalyAnswers();

});

function quizMarks() {
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    const h2El = document.createElement("h2");
    h2El.textContent = "YOUR SCORE OUT OF 10 IS : " + mark;
    resultDiv.appendChild(h2El);
    quizBody.appendChild(resultDiv);
}


quizBody.appendChild(buttonEl);
body.appendChild(quizBody);
