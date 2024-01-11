const questions = [
    {
        question: "JavaScript is a ________-side programming language.",
        answer: "client",
        type: "text"
    },
    {
        question: "The ________ method of an Array object adds one or more elements to the end of an array and returns the new length of the array.",
        answer: "push",
        type: "text"
    },
    {
        question: "In JavaScript, the ________ statement is used to declare a variable.",
        answer: "var",
        type: "text"
    },
    {
        question: "The ________ operator in JavaScript returns true if the two operands are equal, otherwise, it returns false.",
        answer: "==",
        type: "text"
    },
    {
        question: "The ________ method is used to remove the last element from an array and returns that element.",
        answer: "pop",
        type: "text"
    },
    {
        question: "JavaScript uses a ________-based indexing system to access array elements.",
        answer: "zero",
        type: "text"
    },
    {
        question: "The ________ function is used to execute a block of code multiple times.",
        answer: "for",
        type: "text"
    },
    {
        question: "A ________ is a special variable that can hold multiple values at once.",
        answer: "array",
        type: "text"
    },
    {
        question: "The ________ method is used to convert a string to uppercase letters.",
        answer: "toUpperCase",
        type: "text"
    },
    {
        question: "The ________ statement is used to terminate a loop and transfer control to the statement immediately following the loop.",
        answer: "break",
        type: "text"
    },
    {
        "question": "Which of the following are valid HTML tags?",
        "type": "checkbox",
        "options": [
            {
                "label": "<div>",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "<header>",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "<span>",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "<article>",
                "value": 4,
                "is_correct": true
            },
        ],
    },
    {
        "question": "Select the properties used for styling in CSS:",
        "type": "checkbox",
        "options": [
            {
                "label": "color",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "margin",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "src",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "padding",
                "value": 4,
                "is_correct": true
            },
        ],
    },
    {
        "question": "In JavaScript, what is the purpose of the 'typeof' operator?",
        "type": "checkbox",
        "options": [
            {
                "label": "Checking the type of a variable",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "Defining a new variable",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Looping through an array",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Importing external libraries",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "Which CSS property is used to control the spacing between elements?",
        "type": "checkbox",
        "options": [
            {
                "label": "margin",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "padding",
                "value": 2,
                "is_correct": true
            },
            {
                "label": "border",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "height",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "What does HTML stand for?",
        "type": "checkbox",
        "options": [
            {
                "label": "Hyper Text Markup Language",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "Highly Typed Machine Learning",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Home Tool Markup Language",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Hyper Transfer Markup Language",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "Which event is triggered when a user clicks on an HTML element?",
        "type": "checkbox",
        "options": [
            {
                "label": "onclick",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "onmouseover",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "onchange",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "ondoubleclick",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "What does CSS stand for?",
        "type": "checkbox",
        "options": [
            {
                "label": "Cascading Style Sheets",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "Computer Style Sheets",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "Creative Style Sheets",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "Colorful Style Sheets",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "Which built-in method adds one or more elements to the end of an array and returns the new length?",
        "type": "checkbox",
        "options": [
            {
                "label": "push()",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "pop()",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "join()",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "splice()",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "In JavaScript, what is a closure?",
        "type": "checkbox",
        "options": [
            {
                "label": "A function that has access to variables in its lexical scope, even when it's executed outside that scope",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "An object that holds key-value pairs",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "A type of loop",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "A way to declare variables",
                "value": 4,
                "is_correct": false
            },
        ],
    },
    {
        "question": "Which HTML tag is used to create an ordered list?",
        "type": "checkbox",
        "options": [
            {
                "label": "<ol>",
                "value": 1,
                "is_correct": true
            },
            {
                "label": "<ul>",
                "value": 2,
                "is_correct": false
            },
            {
                "label": "<li>",
                "value": 3,
                "is_correct": false
            },
            {
                "label": "<dl>",
                "value": 4,
                "is_correct": false
            },
        ],
    },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
        "type": "select",
        "options": [
            {
                "label": "Select correct answer",
                "value": "",
                "is_correct": ""
            },
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
];

const overallTimer = 10; // Overall timer in seconds (adjust as needed)
let overallTimerValue = overallTimer;
let overallTimerInterval;
let intervalId;

function startOverallTimer() {
    overallTimerInterval = setInterval(() => {
        if (overallTimerValue <= 0) {
            clearInterval(overallTimerInterval);
            quizFormEl.dispatchEvent(new Event('submit'));
        } else {
            overallTimerValue--;
        }
    }, 1000);
}

//next question waiting seconds
const timer = 5;

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
quizFormEl.method = 'post';
quizFormEl.action = 'javascript:void(0)';

const quizHeadingEl = document.createElement('h1');
quizHeadingEl.textContent = 'Quiz: Test Your Knowledge';
quizFormEl.appendChild(quizHeadingEl);

displayStartButton();
let currentQuestionIndex = 0;
let score = 0;


function displayQuestion() {
    const question = questions[randomIndices[currentQuestionIndex]];

    const questionDivEl = document.createElement("div");
    questionDivEl.className = "question-container";

    const questionLabelEl = document.createElement("label");
    questionLabelEl.textContent = `Q${currentQuestionIndex + 1}. ${question.question}`;
    questionDivEl.appendChild(questionLabelEl);

    if (question.type === 'text') {
        displayTextQuestion(questionDivEl);
    } else {
        displayOptionsQuestion(questionDivEl);
    }
    quizFormEl.appendChild(questionDivEl);
    quizFormEl.appendChild(document.createElement('br'));

    if (currentQuestionIndex === randomIndices.length - 1) {
        displaySubmitButton();
    } else {
        displayNextButton();
    }

    window.scroll(0, document.body.scrollHeight);
}
let timerValue = timer;
let timerInterval;

function displayNextButton() {
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'quiz-next';
    nextBtn.textContent = 'Next';
    nextBtn.disabled = 'true';

    const options = document.querySelectorAll(`input[name="Q${randomIndices[currentQuestionIndex] + 1}"]`);

    if (questions[randomIndices[currentQuestionIndex]].type === 'select') {

        const userSelect = document.querySelector('.quiz-select-input');
        userSelect.addEventListener('input', () => {
            nextBtn.disabled = userSelect.value.trim() === '';
        });

    } else if (questions[randomIndices[currentQuestionIndex]].type === 'text') {

        const textInput = document.querySelector('.quiz-text-input');
        textInput.addEventListener('input', () => {
            nextBtn.disabled = textInput.value.trim() === '';
        });

    } else {

        options.forEach(option => {
            option.addEventListener('change', () => {
                const selectedOptions = document.querySelectorAll(`input[name="Q${randomIndices[currentQuestionIndex] + 1}"]:checked`);
                nextBtn.disabled = selectedOptions.length === 0;
            });
        });
    }
    nextBtn.addEventListener('click', onNextButtonClick);

    quizFormEl.appendChild(nextBtn);
}

let intervalStarted = false;

function displaySubmitButton() {
    const submitBtn = createSubmitButton();

    setTimeout(() => {
        const currentQuestion = questions[randomIndices[currentQuestionIndex]];

        if (currentQuestion.type === 'text') {
            const textInput = document.querySelector('.quiz-text-input');
            addTextChangeListener(textInput, submitBtn);
        } else if (currentQuestion.type === 'select') {
            const selectInput = document.querySelector(`select[name="Q${randomIndices[currentQuestionIndex] + 1}"]`);
            addSelectChangeListener(selectInput, submitBtn);
        } else {
            const options = document.querySelectorAll(`input[name="Q${randomIndices[currentQuestionIndex] + 1}"]`);
            addOptionsChangeListener(options, submitBtn);
        }
    }, 0);

    quizFormEl.appendChild(submitBtn);
}

function addSelectChangeListener(selectInput, submitBtn) {
    selectInput.addEventListener('change', () => {
        submitBtn.disabled = selectInput.value === '';
        submitButtonWithTimer(submitBtn);
    });
}

function addTextChangeListener(textInput, submitBtn) {
    textInput.addEventListener('keyup', () => {
        submitBtn.disabled = textInput.length === 0;
        submitButtonWithTimer(submitBtn);
    });
}

function addOptionsChangeListener(options, submitBtn) {
    options.forEach(option => {
        option.addEventListener('change', () => {
            const selectedOptions = document.querySelectorAll(`input[name="Q${randomIndices[currentQuestionIndex] + 1}"]:checked`);
            submitBtn.disabled = selectedOptions.length === 0;
            submitButtonWithTimer(submitBtn);
        });
    });
}

quizFormEl.addEventListener('submit', calculateQuizScore);

function calculateQuizScore(e) {
    e.preventDefault();

    if (clearInterval) {
        clearInterval(intervalId);
    }

    const currentQuestion = questions[randomIndices[currentQuestionIndex]];

    if (currentQuestion.type === 'text') {
        handleTextQuestion();
    } else if (currentQuestion.type === 'select') {
        handleSelectQuestion();
    } else {
        handleOptionsQuestion();
    }

    displayScore();
}

function displayScore() {
    window.scroll(0, 0);
    scoreDivEl.className = "quiz-score";
    scoreDivEl.textContent = (`Your score: ${score}/${randomIndices.length}`);

    const outcomeDiv = document.createElement('div');
    outcomeDiv.className = 'quiz-outcome';

    const outcomeText = document.createElement('p');
    outcomeText.textContent = `You ${score >= (randomIndices.length / 2) ? 'passed' : 'failed'} the quiz.`;

    outcomeDiv.appendChild(outcomeText);
    scoreDivEl.appendChild(outcomeDiv);

    const button = document.querySelector('button');
    if (button) {
        quizFormEl.removeChild(button);
    }
    displayRestartButton();
}


let scoreForEachQuestion = 0;

function calculateScore(selectedOptions, currentQuestionIndex) {
    const currentQuestion = questions[randomIndices[currentQuestionIndex]];

    const correctOptions = currentQuestion.options
        .filter(option => option.is_correct)
        .map(option => option.value);

    for (let index = 0; index < selectedOptions.length; index++) {
        const selectedOption = selectedOptions[index];
        const selectedValue = parseInt(selectedOption.value);
        const selectedAnswerLabel = document.querySelector('label[for=' + selectedOption.id + ']');

        if (correctOptions.includes(selectedValue)) {
            selectedAnswerLabel.classList = 'correct-answer';
        } else {
            selectedAnswerLabel.classList = 'incorrect-answer';
        }
    }

    if (arraysEqual(correctOptions, Array.from(selectedOptions, option => parseInt(option.value)))) {
        score++;
    }
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function validateTextAnswer(userInput, question) {
    const correctAnswer = question.answer.toLowerCase();
    const userInputBox = document.querySelector('.quiz-text-input');
    userInputBox.disabled = true;
    if (userInput.toLowerCase() === correctAnswer) {
        score++;
        userInputBox.classList = 'correct-answer';
    } else {
        userInputBox.classList = 'incorrect-answer';
    }
}

function validateSelectAnswer(userSelectValue, question) {
    const correctAnswer = question.options.find(option => option.is_correct).value;
    userSelectValue.disabled = true;

    if (parseInt(userSelectValue.value) === correctAnswer) {
        score++;
        userSelectValue.classList = 'correct-answer';
    } else {
        userSelectValue.classList = 'incorrect-answer';
    }
}


function displayStartButton() {
    const startBtn = document.createElement("button");
    startBtn.type = "button";
    startBtn.className = "quiz-start";
    startBtn.textContent = "Start Quiz";
    startBtn.addEventListener("click", () => {
        quizFormEl.removeChild(startBtn);
        displayQuestion();
        startOverallTimer();
    });

    quizFormEl.appendChild(startBtn);
}

function displayRestartButton() {
    const restartButtonEl = document.createElement("button");
    restartButtonEl.type = "reset";
    restartButtonEl.className = 'quiz-restart';
    restartButtonEl.textContent = "Restart Quiz";
    restartButtonEl.addEventListener("click", restartQuiz);
    quizFormEl.appendChild(restartButtonEl);
}

function restartQuiz(e) {
    window.location.reload();
}

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

function submitButtonWithTimer(submitBtn) {
    setTimeout(() => {
        if (!intervalStarted) {
            intervalStarted = true;
            timerValue = timer;

            intervalId = setInterval(() => {

                if (timerValue <= 0) {
                    clearInterval(intervalId);
                    submitBtn.textContent = `Submit Quiz`;
                    quizFormEl.dispatchEvent(new Event('submit'));
                } else {
                    submitBtn.textContent = `Submit Quiz (${timerValue})`;
                }

                timerValue--;
            }, 1000);
        }
    }, 0);
}

function nextButtonWithTimer(id) {
    timerValue = timer;
    return function () {
        const nextButtonWithTimer = document.querySelector(id);
        if (nextButtonWithTimer) {
            nextButtonWithTimer.textContent = `Next (${timerValue}s)`;

            if (timerInterval) {
                clearInterval(timerInterval);
            }
            timerInterval = setInterval(() => {
                timerValue--;

                if (timerValue <= 0) {
                    nextButtonWithTimer.textContent = 'Next';
                    nextButtonWithTimer.click();
                } else {
                    nextButtonWithTimer.textContent = `Next (${timerValue}s)`;
                }
            }, 1000);
        }
    }
}

function displayTextQuestion(container) {
    const inputEl = document.createElement("input");
    inputEl.type = 'text';
    inputEl.className = 'quiz-text-input';

    inputEl.addEventListener('keyup', nextButtonWithTimer('.quiz-next'));
    container.appendChild(inputEl);
}

function displayOptionsQuestion(container) {
    const optionDivEl = document.createElement("div");
    const optionClassName = 'quiz-option';

    const question = questions[randomIndices[currentQuestionIndex]];

    if (question.type === 'select') {
        const selectEl = document.createElement("select");
        selectEl.className = 'quiz-select-input';
        selectEl.name = `Q${randomIndices[currentQuestionIndex] + 1}`;
        selectEl.addEventListener('change', nextButtonWithTimer('.quiz-next'));

        question.options.forEach(option => {
            const optionEl = document.createElement("option");
            optionEl.value = option.value;
            optionEl.textContent = option.label;
            selectEl.appendChild(optionEl);
        });

        optionDivEl.appendChild(selectEl);
    } else {
        question.options.forEach(option => {
            const inputEl = document.createElement("input");
            const randomName = randomString(10);
            inputEl.type = question.type;
            inputEl.value = option.value;
            inputEl.addEventListener('click', nextButtonWithTimer('.quiz-next'));
            inputEl.id = randomName;
            inputEl.className = optionClassName;
            inputEl.name = `Q${randomIndices[currentQuestionIndex] + 1}`;

            const optionLabel = document.createElement("label");
            optionLabel.textContent = option.label;
            optionLabel.setAttribute("for", randomName);

            optionDivEl.appendChild(inputEl);
            optionDivEl.appendChild(optionLabel);
            optionDivEl.appendChild(document.createElement('br'));
        });
    }

    container.appendChild(optionDivEl);
}

function onNextButtonClick() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    const nextBtn = document.querySelector('.quiz-next');
    nextBtn.remove();
    if (questions[randomIndices[currentQuestionIndex]].type === 'text') {
        handleTextQuestion();
    }
    else if (questions[randomIndices[currentQuestionIndex]].type === 'select') {
        handleSelectQuestion();
    }
    else {
        handleOptionsQuestion();
    }

    currentQuestionIndex++;

    if (currentQuestionIndex !== randomIndices.length) {
        displayQuestion();
    }
}

function handleTextQuestion() {
    const textInput = document.querySelector('.quiz-text-input');
    validateTextAnswer(textInput.value, questions[randomIndices[currentQuestionIndex]]);
}

function handleOptionsQuestion() {
    const radioOptions = document.querySelectorAll(`input[name="Q${randomIndices[currentQuestionIndex] + 1}"]`);
    radioOptions.forEach(option => {
        option.disabled = true;
    });
    const selectedOptions = document.querySelectorAll(`input[name="Q${randomIndices[currentQuestionIndex] + 1}"]:checked`);
    calculateScore(selectedOptions, currentQuestionIndex);
}
function handleSelectQuestion() {
    const selectInput = document.querySelector(`select[name="Q${randomIndices[currentQuestionIndex] + 1}"]`);
    validateSelectAnswer(selectInput, questions[randomIndices[currentQuestionIndex]]);
}

function createSubmitButton() {
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'quiz-submit';
    submitBtn.textContent = 'Submit Quiz';
    submitBtn.disabled = 'true';
    return submitBtn;
}

divEl.appendChild(quizFormEl);
document.body.appendChild(divEl);