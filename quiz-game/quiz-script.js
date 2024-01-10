const body = document.body;

const quizBody = document.createElement("form");
quizBody.id = "quizBody";

const quizQuestions = [
    {
        question: "Who is making the web standards?",
        options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
        answer: "The World Wide Web Consortium",
        type: "radio",
        name: "question1"

    },
    {
        question: "How can you open a link in a new browser window?",
        options: ["_blank", "target", "same"],
        answer: "_blank",
        type: "radio",
        name: "question2"

    },
    {
        question: "What does HTML stands for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language",
        type: "radio",
        name: "question3"

    },
    {
        question: "How to remove the underline from hyperlinks using CSS?",
        options: ["a {underline:none}", "a {text-decoration:no underline}", "a {text-decoration:none}"],
        answer: "a {text-decoration:none}",
        type: "radio",
        name: "question4"

    },
    {
        question: "What tag do you use to put a title on a table?",
        options: ["<tr>", "<caption>", "<title>"],
        answer: "<caption>",
        type: "radio",
        name: "question5"

    },
    {
        question: "What tag adds comments to your HTML code?",
        options: ["<!-->", "<comment>", "<title>"],
        answer: "<!-->",
        type: "radio",
        name: "question6"

    },
    {
        question: "What is a CSS inline style?",
        options: ["CSS code in a style attribute", "CSS code in a style tag", "CSS code in an external css file"],
        answer: "CSS code in a style attribute",
        type: "radio",
        name: "question7"

    },
    {
        question: "What HTML tag makes a link?",
        options: ["<a>", "<tr>", "<img>"],
        answer: "<a>",
        type: "radio",
        name: "question8"

    },
    {
        question: "What HTML tag makes a new line?",
        options: ["<a>", "<br>", "<img>"],
        answer: "<br>",
        type: "radio",
        name: "question9"

    },
    {
        question: "Who is making the web standards?",
        options: ["Mozilla", "Microsoft", "The World Wide Web Consortium"],
        answer: "The World Wide Web Consortium",
        type: "radio",
        name: "question10"

    },
    {
        question: "In HTML, what element is used to define the structure of an HTML document, such as headings and paragraphs?",
        options: ["<body>", "<header>", "<section>"],
        answer: "<body>",
        type: "radio",
        name: "question11"
    },
    {
        question: "Which CSS property is used to control the space between elements inside the content box?",
        options: ["margin", "padding", "border"],
        answer: "padding",
        type: "radio",
        name: "question12"

    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<li>"],
        answer: "<ul>",
        type: "radio",
        name: "question13"

    },
    {
        question: "In CSS, what property is used to control the size of text?",
        options: ["font-size", "text-size", "size"],
        answer: "font-size",
        type: "radio",
        name: "question14"

    },
    {
        question: "What does the JavaScript `console.log()` function do?",
        options: ["Display a message in the console", "Create a new variable", "Define a function"],
        answer: "Display a message in the console",
        type: "radio",
        name: "question15"

    },
    {
        question: "Which HTML attribute is used to provide additional information about an element?",
        options: ["data-info", "extra", "class"],
        answer: "class",
        type: "radio",
        name: "question16"

    },
    {
        question: "In CSS, what property is used to set the text alignment within an element?",
        options: ["text-align", "alignment", "align"],
        answer: "text-align",
        type: "radio",
        name: "question17"

    },
    {
        question: "What is the purpose of the `for` loop in JavaScript?",
        options: ["To create a conditional statement", "To iterate over a sequence of values", "To select elements with CSS selectors"],
        answer: "To iterate over a sequence of values",
        type: "radio",
        name: "question18"

    },
    {
        question: "Which HTML tag is used to create a hyperlink to another webpage?",
        options: ["<link>", "<a>", "<url>"],
        answer: "<a>",
        type: "radio",
        name: "question19"

    },
    {
        question: "In CSS, how do you select all paragraphs within a div with the class 'content'?",
        options: [".content p", "div.content p", "#content p"],
        answer: "div.content p",
        type: "radio",
        name: "question20"

    },
    {
        question: "What is the purpose of the `JSON.stringify` method in JavaScript?",
        options: ["To parse JSON data", "To convert a JavaScript object to a JSON string", "To fetch data from an API"],
        answer: "To convert a JavaScript object to a JSON string",
        type: "radio",
        name: "question21"

    },
    {
        question: "Which HTML attribute is used to specify alternative text for an image?",
        options: ["alt", "description", "text"],
        answer: "alt",
        type: "radio",
        name: "question22"

    },
    {
        question: "What HTML tag do you put things in if you want them to appear on the page?",
        options: ["<HTML>", "<p>", "<body>"],
        answer: "<body>",
        type: "radio",
        name: "question23"
    },
    {
        question: "In CSS, what property is used to set the font weight of text?",
        options: ["font-weight", "text-weight", "weight"],
        answer: "font-weight",
        type: "radio",
        name: "question24"

    },
    {
        question: "Which HTML tag is used to create a table?",
        options: ["<table>", "<tr>", "<td>"],
        answer: "<table>",
        type: "radio",
        name: "question25"

    },
    {
        question: "Select the programming languages:",
        options: ["JavaScript", "Python", "Java", "C++", "Ruby"],
        answer: ["JavaScript", "Python", "Java","C++", "Ruby"],
        type: "checkbox",
        name: "question26"
    },
    {
        question: "Select the capital of France:",
        options: ["Berlin", "Paris", "London", "Madrid"],
        answer: ["Paris"],
        type: "dropdown",
        name: "question27"
    },
    {
        question: "Select the capital of France:",
        options: ["Berlin", "Paris", "London", "Madrid"],
        answer: ["Paris"],
        type: "dropdown",
        name: "question27"
    },
    {
        question: "Select the capital of France:",
        options: ["Berlin", "Paris", "London", "Madrid"],
        answer: ["Paris"],
        type: "dropdown",
        name: "question27"
    },
    {
        question: "Select the web development frameworks:",
        options: ["React", "Angular", "Vue", "Django", "Spring"],
        answer: ["React", "Angular", "Vue", "Django"],
        type: "checkbox",
        name: "question28"
    },
    {
        question: "Select the web development frameworks:",
        options: ["React", "Angular", "Vue", "Django", "Spring"],
        answer: ["React", "Angular", "Vue", "Django"],
        type: "checkbox",
        name: "question29"
    },
    {
        question: "Choose the front-end languages:",
        options: ["HTML", "CSS", "JavaScript", "Java", "Python"],
        answer: ["HTML", "CSS", "JavaScript"],
        type: "checkbox",
        name: "question30"
    },
    {
        question: "Select the databases:",
        options: ["MySQL", "MongoDB", "Oracle", "SQLite", "PostgreSQL"],
        answer: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
        type: "checkbox",
        name: "question31"
    },
    {
        question: "Choose the programming paradigms:",
        options: ["Object-Oriented", "Functional", "Imperative", "Declarative", "Procedural"],
        answer: ["Object-Oriented", "Functional", "Imperative", "Procedural"],
        type: "checkbox",
        name: "question32"
    },
    {
        question: "Select the cloud computing platforms:",
        options: ["AWS", "Azure", "Google Cloud", "IBM Cloud", "Heroku"],
        answer: ["AWS", "Azure", "Google Cloud", "Heroku"],
        type: "checkbox",
        name: "question33"
    },
    {
        question: "Choose the colors of the rainbow:",
        options: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
        answer: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
        type: "multiple-dropdown",
        name: "question34"
    },
    {
        question: "Select the continents:",
        options: ["Africa", "Asia", "Europe", "North America", "South America", "Australia", "Antarctica"],
        answer: ["Africa", "Asia", "Europe", "North America", "South America", "Australia", "Antarctica"],
        type: "multiple-dropdown",
        name: "question35"
    },
    {
        question: "Choose the planets in our solar system:",
        options: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        type: "multiple-dropdown",
        name: "question36"
    },
    {
        question: "Select programming languages with 'Script' in their name:",
        options: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
        answer: ["JavaScript", "TypeScript"],
        type: "multiple-dropdown",
        name: "question37"
    },
    {
        question: "Choose the largest planet in our solar system:",
        options: ["Mercury", "Venus", "Earth", "Jupiter", "Saturn"],
        answer: ["Jupiter"],
        type: "dropdown",
        name: "question38"
    },
    {
        question: "Select the primary colors:",
        options: ["Red", "Blue", "Yellow", "Green"],
        answer: ["Red"],
        type: "dropdown",
        name: "question39"
    },
    {
        question: "Choose the main programming language for web development:",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: ["JavaScript"],
        type: "dropdown",
        name: "question40"
    },
    {
        question: "Select the capital of Japan:",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: ["Tokyo"],
        type: "dropdown",
        name: "question41"
    },
    {
        question: "capital of Japan:",
        options: ["Tokyo"],
        answer: "Tokyo",
        type: "text",
        name: "question42"
    },
    {
        question: "capital of Japan:",
        options: ["Tokyo"],
        answer: "Tokyo",
        type: "text",
        name: "question42"
    },
    {
        question: "capital of Japan:",
        options: ["Tokyo"],
        answer: "Tokyo",
        type: "text",
        name: "question42"
    },
    {
        question: "capital of Japan:",
        options: ["Tokyo"],
        answer: "Tokyo",
        type: "text",
        name: "question42"
    },
    {
        question: "capital of Japan:",
        options: ["Tokyo"],
        answer: "Tokyo",
        type: "text",
        name: "question42"
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
        h4El.textContent = `${++count}.  ${question.question}`;
        div.appendChild(h4El);

        const options = question.options;

        let iterated = false;
        let inputIterated = false;
        options.map((option, index) => {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("inner-div");

            if (question.type === "checkbox" || question.type === "radio") {
                const inputEl = document.createElement("input");
                inputEl.type = question.type === "checkbox" ? "checkbox" : "radio";
                inputEl.name = question.type === "checkbox" ? `${question.name}-${index}` : question.name;
                // if (question.type === "radio")
                // inputEl.required = "required";

                const labelEl = document.createElement("label");
                inputEl.value = option;
                labelEl.textContent = option;
                innerDiv.appendChild(inputEl);
                innerDiv.appendChild(labelEl);
            } else if (question.type === "dropdown" || question.type === "multiple-dropdown") {
                if (!iterated) {

                    iterated = true;
                    const selectEl = document.createElement("select");
                    selectEl.name = question.name;

                    if (question.type === "multiple-dropdown") {
                        selectEl.multiple = true;
                        selectEl.classList.add("multiple-dropdown");
                    } else {
                        selectEl.classList.add("dropdown");
                    }
                    question.options.forEach((opt) => {
                        const optionEl = document.createElement("option");
                        optionEl.value = opt;
                        optionEl.textContent = opt;
                        selectEl.appendChild(optionEl);
                    });
                    innerDiv.appendChild(selectEl);
                    div.appendChild(innerDiv);
                } else {
                    innerDiv.remove();
                }

            } else if (question.type === "text") {
                if (!inputIterated) {
                    inputIterated = true;
                    const inputEl = document.createElement("input");
                    inputEl.classList.add("input");
                    inputEl.type = question.type;
                    inputEl.name = question.name;
                    inputEl.required = true;
                    inputEl.placeholder = "your answers here";
                    innerDiv.appendChild(inputEl);
                }
            }
            if (!(question.type === "dropdown" || question.type === "multiple-dropdown"))
                div.appendChild(innerDiv);
            quizBody.appendChild(div);
        });

    };
}


let mark = 0;
function dispalyAnswers() {
    for (let i = 0; i < indexOfQuestionsSelected.length; i++) {
        let index = 0;
        const questionIndex = indexOfQuestionsSelected[i];
        const question = quizQuestions[questionIndex];

        if (question.type === "radio") {
            const selectedOption = document.querySelector(`input[name='${question.name}']:checked`);

            if (selectedOption) {
                const ansDiv = selectedOption.closest('.inner-div');
                const labelEl = ansDiv.querySelector('label');


                if (labelEl.textContent === question.answer) {
                    mark++;
                }
            }
        } else if (question.type === "checkbox") {
            const selectedOptions = [];
            const checkboxes = [];
            for (let index = 0; index < question.options.length; index++) {
                const el = (document.querySelector(`input[name="${question.name}-${index}"]`));
                if (el.checked)
                    checkboxes.push(el);
            }
            let inc = 0;
            checkboxes.forEach(() => {
                selectedOptions.push(checkboxes[inc].value)
                inc++;
            });


            const correctOptions = question.answer;
            const isAllCorrect = selectedOptions.length === correctOptions.length &&
                selectedOptions.every((option) => correctOptions.includes(option));

            if (isAllCorrect) {
                mark++;
            }
        }else if(question.type === "text"){
            const userInput = document.querySelector(`input[name="${question.name}"]`).value.trim();
            const correctAnswer = question.answer.toLowerCase().trim(); 

            if (userInput === correctAnswer) {
                mark++;
            }
        }else if(question.type === "dropdown" || question.type === "multiple-dropdown"){
            const selectedOptions = Array.from(document.querySelectorAll(`select[name="${question.name}"] option:checked`))
                .map(option => option.value);
            console.log(selectedOptions);
            const correctOptions = question.answer;
            console.log(correctOptions);
            const isAllCorrect = selectedOptions.length === correctOptions.length &&
                selectedOptions.every((option) => correctOptions.includes(option));

            if (isAllCorrect) 
                mark++;
        }
    }
}
const buttonEl = document.createElement("input");
buttonEl.type = "submit";
buttonEl.value = "submit";

let displayCount = 0;
quizBody.addEventListener("submit", (e) => {
    e.preventDefault();
    dispalyAnswers();
    displayCount++;
    if (displayCount === 1)
        quizMarks();

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


