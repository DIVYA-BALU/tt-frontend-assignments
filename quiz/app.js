//Generate random strings
function randomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    let resultRandomString = '';

    for (let i = 0; i < lenString; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        resultRandomString += characters.substring(randomNumber, randomNumber + 1);
    }

    return resultRandomString;
}


const questionSet = [
    {
        question: `Which of the following is not a CSS selector which is used to "find" the HTML elements we want to style?`,
        options: ["Complex Selectors", "Combinator Selectors", "Pseudo-elements Selectors", "Simple Selectors"],
        correct_answer: "Complex Selectors"
    },
    {
        question: "The elements between the and tags of an HTML table are ______ by default.",
        options: ["Justified", "Left aligned", "Centrally aligned", "Right aligned"],
        correct_answer: "Left aligned"
    },
    {
        question: ".NET Framework was designed and developed by _______.",
        options: ["Microsoft", "IBM", "Oracle", "Google"],
        correct_answer: "Microsoft"
    },
    {
        question: "The basic elements of a form are called :",
        options: ["Objects", "Table", "Record", "Controls"],
        correct_answer: "Controls"
    },
    {
        question: "The stylesheet file will not be loaded by the browser if you omit ______",
        options: ["REL", "STYLE", "BODY", "HTML"],
        correct_answer: "REL"
    },
    {
        question: "Which of the following multimedia text-based features generalize the concepts of footnotes and cross-references for accessing text documents?",
        options: ["Text importing and exporting", "Text style", "Hypertext", "text search"],
        correct_answer: "Hypertext"
    },
    {
        question: "What is the latest version of CSS available?",
        options: ["CSS2", "CSS3", "CSS3.1", "CSS4"],
        correct_answer: "CSS3"
    },
    {
        question: "What does the abbreviation HTML stand for?",
        options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Markdown Language", "None of the above"],
        correct_answer: "HyperText Markup Language"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        options: ["Head, Title, HTML, body", "HTML, Body, Title, Head", "HTML, Head, Title, Body", "HTML, Title, Head, Body"],
        correct_answer: "HTML, Head, Title, Body"
    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        options: ["<pre>", "<a>", "<b>", "<br>"],
        correct_answer: "<b>"
    },
    {
        question: " Which of the following tag is used for inserting the largest heading in HTML?",
        options: ["<h3>", "<h1>", "<h5>", "<h6>"],
        correct_answer: "<h1>"
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<i>"],
        correct_answer: "<ul>"
    },
    {
        question: "Which of the following tag is used to define options in a drop-down selection list?",
        options: ["<select>", "<list>", "<dropdown>", "<option>"],
        correct_answer: "<option>"
    },
    {
        question: "HTML tags are enclosed in-",
        options: ["# and #", "{ and }", "! and ?", "< and >"],
        correct_answer: "< and >"
    },
    {
        question: "Which of the following tag is used to add rows in the table?",
        options: ["<td> and </td>", "<th> and </th>", "<tr> and </tr>", "<row> and </row>"],
        correct_answer: "<tr> and </tr>"
    },
    {
        question: "The <hr> tag in HTML is used for -",
        options: ["new line", "vertical ruler", "new paragraph", "horizontal ruler"],
        correct_answer: "horizontal ruler"
    },
    {
        question: "Which of the following attribute is used to provide a unique name to an element?",
        options: ["class", "id", "type", "None of the above"],
        correct_answer: "id"
    },
    {
        question: "What are the types of unordered or bulleted list in HTML?",
        options: ["disc, square, triangle", "polygon, triangle, circle", "disc, circle, square", "All of the above"],
        correct_answer: "disc, circle, square"
    },
    {
        question: "CSS stands for -",
        options: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets", "None of the above"],
        correct_answer: "Cascading style sheets"
    },
    {
        question: "Which of the following is the correct syntax for referring the external style sheet?",
        options: ["<style src = example.css>", '<style src = "example.css" >', "<stylesheet> example.css </stylesheet>", '<link rel="stylesheet" type="text/css" href="example.css">'],
        correct_answer: '<link rel="stylesheet" type="text/css" href="example.css">'
    },
    {
        question: "The property in CSS used to change the text color of an element is -",
        options: ["bgcolor", "color", "background-color", "All of the above"],
        correct_answer: "color"
    },
    {
        question: "Which type of JavaScript language is ___",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        correct_answer: "Object-Based"
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        correct_answer: "immediate if"
    },
    {
        question: "In JavaScript, what is a block of statement?",
        options: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
        correct_answer: "block that combines a number of statements into a single compound statement"
    },
    {
        question: 'The "function" and " var" are known as:',
        options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        correct_answer: "Declaration statements"
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        options: ["Global variable", "The local element", "The two of the above", "None of the above"],
        correct_answer: "The local element"
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
        correct_answer: "Function/Method"
    },
    {
        question: "Which of the following type of a variable is volatile?",
        options: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        correct_answer: "Mutable variable"
    },
    {
        question: "Which of the following option is used as hexadecimal literal beginning?",
        options: ["00", "0x", "0X", "Both 0x and 0X"],
        correct_answer: "Both 0x and 0X"
    },
    {
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        options: ["Prints an exception error", "Prints an overflow error", 'Displays "Infinity"', "Prints the value as such"],
        correct_answer: 'Displays "Infinity"'
    }
]

const questions = [
    {
        "question": "The elements between the <td> and </td> tags of an HTML table are ______ by default.",
        "type": "radio",
        "options": [
            {
                "label": "Justified",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Left aligned",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "Centrally aligned",
                "value": 3, "is_correct": false
            },
            {
                "label": "Right aligned",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": ".NET Framework was designed and developed by _______.",
        "type": "radio",
        "options": [
            {
                "label": "Microsoft",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "IBM",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Oracle",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Google",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "The basic elements of a form are called :",
        "type": "radio",
        "options": [
            {
                "label": "Objects",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Table",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Record",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Controls",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "The stylesheet file will not be loaded by the browser if you omit ______",
        "type": "radio",
        "options": [
            {
                "label": "REL",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "STYLE",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "BODY",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "HTML",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following multimedia text-based features generalize the concepts of footnotes and cross-references for accessing text documents?",
        "type": "radio",
        "options": [
            {
                "label": "Text importing and exporting",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Text style",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Hypertext",
                "value": 3,
                "is_correct": true
            },
            {
                "label": "Text search",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "What is the latest version of CSS available?",
        "type": "radio",
        "options": [
            {
                "label": "CSS2",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "CSS3",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "CSS3.1",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "CSS4",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "What does the abbreviation HTML stand for?",
        "type": "radio",
        "options": [
            {
                "label": "HyperText Markup Language",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "HighText Markup Language",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "HyperText Markdown Language",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "None of the above",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "The correct sequence of HTML tags for starting a webpage is -",
        "type": "radio",
        "options": [
            {
                "label": "Head, Title, HTML, Body",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "HTML, Body, Title, Head",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "HTML, Head, Title, Body",
                "value": 3, "is_correct": true
            },
            {
                "label": "HTML, Title, Head, Body",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following element is responsible for making the text bold in HTML?",
        "type": "radio",
        "options": [
            {
                "label": "<pre>",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "<a>",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "<b>",
                "value": 3,
                "is_correct": true
            },
            {
                "label": "<br>",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following tag is used for inserting the largest heading in HTML?",
        "type": "radio",
        "options": [
            {
                "label": "<h3>",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "<h1>",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "<h5>",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "<h6>",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "How to create an unordered list (a list with the list items in bullets) in HTML?",
        "type": "radio",
        "options": [
            {
                "label": "<ul>",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "<ol>",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "<li>",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "<i>",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following tag is used to define options in a drop-down selection list?",
        "type": "radio",
        "options": [
            {
                "label": "<select>",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "<list>",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "<dropdown>",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "<option>",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "HTML tags are enclosed in-",
        "type": "radio",
        "options": [
            {
                "label": "# and #",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "{ and }",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "! and ?",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "< and >",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "Which of the following tag is used to add rows in the table?",
        "type": "radio",
        "options": [
            {
                "label": "<td> and </td>",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "<th> and </th>",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "<tr> and </tr>",
                "value": 3,
                "is_correct": true
            },
            {
                "label": "<row> and </row>",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "The <hr> tag in HTML is used for -",
        "type": "radio",
        "options": [
            {
                "label": "New line",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Vertical ruler",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "New paragraph",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Horizontal ruler",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "Which of the following attribute is used to provide a unique name to an element?",
        "type": "radio",
        "options": [
            {
                "label": "class",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "id",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "type",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "None of the above",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "What are the types of unordered or bulleted list in HTML?",
        "type": "radio",
        "options": [
            {
                "label": "Disc, square, triangle",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Polygon, triangle, circle",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Disc, circle, square",
                "value": 3,
                "is_correct": true
            },
            {
                "label": "All of the above",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "CSS stands for -",
        "type": "radio",
        "options": [
            {
                "label": "Cascade style sheets",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Color and style sheets",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Cascading style sheets",
                "value": 3,
                "is_correct": true
            },
            {
                "label": "None of the above",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following is the correct syntax for referring the external style sheet?",
        "type": "radio",
        "options": [
            {
                "label": "<style src = example.css>",
                "value": 1,
                "is_correct": false
            },
            {
                "label": '<style src = "example.css" >',
                "value": 2,
                "is_correct": false
            },
            {
                "label": "<stylesheet> example.css </stylesheet>",
                "value": 3,
                "is_correct": false
            },
            {
                "label": '<link rel="stylesheet" type="text/css" href="example.css">',
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "The property in CSS used to change the text color of an element is -",
        "type": "radio",
        "options": [
            {
                "label": "bgcolor",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "color",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "background-color",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "All of the above",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which type of JavaScript language is ___",
        "type": "radio",
        "options": [
            {
                "label": "Object-Oriented",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Object-Based",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "Assembly-language",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "High-level",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which one of the following also known as Conditional Expression:",
        "type": "radio",
        "options": [
            {
                "label": "Alternative to if-else",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Switch statement",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "If-then-else statement",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Immediate if",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "In JavaScript, what is a block of statement?",
        "type": "radio",
        "options": [
            {
                "label": "Conditional block",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Block that combines a number of statements into a single compound statement",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "Both conditional block and a single statement",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Block that contains a single statement",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": 'The "function" and " var" are known as:',
        "type": "radio",
        "options": [
            {
                "label": "Keywords",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Data types",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Declaration statements",
                "value": 3,
                "is_correct": true
            },
            {
                "label": "Prototypes",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following variables takes precedence over the others if the names are the same?",
        "type": "radio",
        "options": [
            {
                "label": "Global variable",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "The local element",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "The two of the above",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "None of the above",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which one of the following is the correct way for calling the JavaScript code?",
        "type": "radio",
        "options": [
            {
                "label": "Preprocessor",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Triggering Event",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "RMI",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Function/Method",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "Which of the following type of a variable is volatile?",
        "type": "radio",
        "options": [
            {
                "label": "Mutable variable",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "Dynamic variable",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Volatile variable",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Immutable variable",
                "value": 4,
                "is_correct": false
            }
        ]
    },
    {
        "question": "Which of the following option is used as hexadecimal literal beginning?",
        "type": "radio",
        "options": [
            {
                "label": "00",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "0x",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "0X",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Both 0x and 0X",
                "value": 4,
                "is_correct": true
            }
        ]
    },
    {
        "question": "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        "type": "radio",
        "options": [
            {
                "label": "Prints an exception error",
                "value": 1,
                "is_correct": false
            },
            {
                "label": "Prints an overflow error",
                "value": 2,
                "is_correct": false
            },
            {
                "label": 'Displays "Infinity"',
                "value": 3,
                "is_correct": true
            },
            {
                "label": 'Prints the value as such',
                "value": 4,
                "is_correct": false
            }
        ]
    }
]

//Generate random array ranges from 0 to question.length-1;
const randomIndices = [];

while (randomIndices.length < 10) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
    }
}

const divEl = document.createElement('div');
divEl.id = "form-div";
const scoreDivEl = document.createElement('div');
divEl.appendChild(scoreDivEl);

const quizFormEl = document.createElement('form');
quizFormEl.id = 'quizForm';
quizFormEl.method = 'post';
quizFormEl.action = 'javascript:void(0)';

const quizHeadingEl = document.createElement('h1');
quizHeadingEl.textContent = 'Quiz: Test Your Knowledge';
quizFormEl.appendChild(quizHeadingEl);

//start button
const startBtn = document.createElement("button");
startBtn.className = "quiz-start";
startBtn.textContent = "Start Quiz";
startBtn.addEventListener("click", displayQuestion);
quizFormEl.appendChild(startBtn);

// store the correct answers in the array
const correctAnswers = [];

function displayQuestion() {
    startBtn.remove();
    let questionSerialNo = randomIndices.length;
    randomIndices.forEach(random => {
        const question = questions[random];

        const questionDivEl = document.createElement("div");
        questionDivEl.className = "question-container";

        const questionLabelEl = document.createElement("label");
        questionLabelEl.textContent = `Q${randomIndices.length - questionSerialNo + 1}. ${question.question}`;
        questionDivEl.appendChild(questionLabelEl);

        const optionDivEl = document.createElement("div");

        question.options.forEach(option => {
            const inputEl = document.createElement("input");
            const randomName = randomString(10);
            inputEl.type = question.type;
            inputEl.value = option.value;
            inputEl.id = randomName;
            inputEl.className = "quiz-option";
            inputEl.required = true;
            inputEl.name = `Q${random + 1}`;

            const optionLabel = document.createElement("label");
            optionLabel.textContent = option.label;
            optionLabel.setAttribute("for", randomName);

            optionDivEl.appendChild(inputEl);
            optionDivEl.appendChild(optionLabel);
            optionDivEl.appendChild(document.createElement('br'));
        })
        questionDivEl.appendChild(optionDivEl);
        quizFormEl.appendChild(questionDivEl);
        quizFormEl.appendChild(document.createElement('br'));

        questionSerialNo--;

        //push the correct answer for each question in the array for validation
        correctAnswers.push(question.correct_answer);
    })

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'quiz-submit';
    submitBtn.textContent = 'Submit Quiz';
    quizFormEl.appendChild(submitBtn);
    quizFormEl.addEventListener('submit', calculateQuizScore);
}


function calculateQuizScore(e) {
    e.preventDefault();
    let score = 0;
    let correctAnswerIndex = 0;
    randomIndices.forEach(index => {
        const selectedAnswer = document.querySelector(`input[name="Q${index + 1}"]:checked`);
        if (selectedAnswer) {
            const selectedAnswerLabel = document.querySelector('label[for=' + selectedAnswer.id + ']');
            console.log(selectedAnswerLabel);
            const userAnswer = selectedAnswer.value;
            if (userAnswer === correctAnswers[correctAnswerIndex]) {
                selectedAnswerLabel.classList.add("correct-answer");
                score++;
            }
            else {
                selectedAnswerLabel.classList.add("incorrect-answer");
            }
        }
        correctAnswerIndex += 1;
    });
    scoreDivEl.className = "quiz-score";
    scoreDivEl.textContent = (`Your score: ${score}/${randomIndices.length}`);

    const submitBtn = document.querySelector(`button`)
    if (submitBtn) {
        quizFormEl.removeChild(submitBtn);
    }

    window.scrollTo(0, 0);
    const restartButtonEl = document.createElement("button");
    restartButtonEl.type = "reset";
    restartButtonEl.className = 'quiz-restart';
    restartButtonEl.textContent = "Restart Quiz";
    restartButtonEl.addEventListener("click", restartQuiz);
    quizFormEl.appendChild(restartButtonEl);
}

function restartQuiz(e) {

    scoreDivEl.textContent = '';

    //I need to remove the restart button after click
    const restartButton = document.querySelector('button');
    if (restartButton) {
        quizFormEl.removeChild(restartButton);
    }
    window.location.reload();
}
divEl.appendChild(quizFormEl);
document.body.appendChild(divEl);

