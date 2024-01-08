const javascriptQuizs = [
  {
    value: 1,
    question: "What is the correct way to include JavaScript in an HTML file?",
    options: [
      "a. <script src='script.js'></script>",
      "b. <javascript>script.js</javascript>",
      "c. <js>script.js</js>",
      "d. <include>script.js</include>",
    ],
    correctAnswer: "a",
  },
  {
    value: 2,
    question: "Which keyword is used to declare variables in JavaScript?",
    options: ["a. var", "b. let", "c. const", "d. all of the above"],
    correctAnswer: "d",
  },
  {
    value: 3,
    question: "What is the result of the expression '2' + 2 in JavaScript?",
    options: ["a. 22", "b. 4", "c. '22'", "d. '4'"],
    correctAnswer: "c",
  },
  {
    value: 4,
    question: "How do you write a comment in JavaScript?",
    options: [
      "a. <!--This is a comment-->",
      "b. //This is a comment",
      "c. /*This is a comment*/",
      "d. Both b and c",
    ],
    correctAnswer: "d",
  },
  {
    value: 5,
    question: "What does the '===' operator do in JavaScript?",
    options: [
      "a. Compares values for equality without type conversion",
      "b. Assigns a value to a variable",
      "c. Checks if a variable is defined",
      "d. None of the above",
    ],
    correctAnswer: "a",
  },
  {
    value: 6,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "a. It refers to the current function",
      "b. It refers to the global object",
      "c. It refers to the calling object",
      "d. It refers to the parent object",
    ],
    correctAnswer: "c",
  },
  {
    value: 7,
    question: "Which of the following is not a valid data type in JavaScript?",
    options: ["a. string", "b. boolean", "c. character", "d. number"],
    correctAnswer: "c",
  },
  {
    value: 8,
    question: "What does the 'NaN' stand for in JavaScript?",
    options: [
      "a. Not a Node",
      "b. Not a Null",
      "c. Not a Number",
      "d. None of the above",
    ],
    correctAnswer: "c",
  },
  {
    value: 9,
    question: "What is the purpose of the 'setTimeout' function in JavaScript?",
    options: [
      "a. Delays the execution of a function",
      "b. Sets a timer for an event",
      "c. Creates an asynchronous callback",
      "d. None of the above",
    ],
    correctAnswer: "a",
  },
  {
    value: 10,
    question: "What is the role of 'JSON' in JavaScript?",
    options: [
      "a. JavaScript Object Notation, used for data interchange",
      "b. JavaScript's built-in data type",
      "c. JavaScript Naming Object",
      "d. JavaScript Object Navigator",
    ],
    correctAnswer: "a",
  },
  {
    value: 11,
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    options: [
      "a. Declares a variable with block scope",
      "b. Declares a variable with global scope",
      "c. Declares a constant variable",
      "d. Declares a variable with function scope",
    ],
    correctAnswer: "a",
  },
  {
    value: 12,
    question:
      "Which function is used to convert a string to an integer in JavaScript?",
    options: [
      "a. parseInt()",
      "b. toInt()",
      "c. convertToInt()",
      "d. intConverter()",
    ],
    correctAnswer: "a",
  },
  {
    value: 13,
    question: "What is the purpose of the 'map' function in JavaScript?",
    options: [
      "a. Iterates over an array and applies a function to each element",
      "b. Adds an element to the end of an array",
      "c. Removes an element from an array",
      "d. Concatenates two arrays",
    ],
    correctAnswer: "a",
  },
  {
    value: 14,
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["a. 0", "b. 'false'", "c. undefined", "d. All of the above"],
    correctAnswer: "d",
  },
  {
    value: 15,
    question: "What does the 'strict mode' in JavaScript do?",
    options: [
      "a. Enforces a more restrictive set of rules",
      "b. Enables asynchronous programming",
      "c. Allows implicit type conversion",
      "d. None of the above",
    ],
    correctAnswer: "a",
  },
  {
    value: 16,
    question: "JavaScript is a statically typed language.",
    options: ["a. True", "b. False"],
    correctAnswer: "b",
  },
  {
    value: 17,
    question:
      "The 'null' value in JavaScript represents an empty or non-existent object reference.",
    options: ["a. True", "b. False"],
    correctAnswer: "a",
  },
  {
    value: 18,
    question:
      "JavaScript functions can be assigned to variables and passed as arguments to other functions.",
    options: ["a. True", "b. False"],
    correctAnswer: "a",
  },
  {
    value: 19,
    question:
      "The 'typeof' operator in JavaScript returns a string indicating the type of the operand.",
    options: ["a. True", "b. False"],
    correctAnswer: "a",
  },
  {
    value: 20,
    question:
      "In JavaScript, the '===' operator performs type coercion when comparing values.",
    options: ["a. True", "b. False"],
    correctAnswer: "b",
  },
];

const answerObjects = new Object();

const quizContainer = document.querySelector("#quiz-container");

const noOfQuestions = javascriptQuizs.length;

let noOfGeneratedQuiz = 0;

let score = 0;

generateQuiz();

function generateQuiz() {
  const quizForm = document.querySelector("#quiz-form");
  const formElement = document.createElement("form");
  formElement.id = "quiz-form";
  shuffleArray(javascriptQuizs);
  const generatedQuiz = javascriptQuizs.slice(0, 3);

  for (let iterator = 0; iterator < generatedQuiz.length; iterator++) {
    const item = generatedQuiz[iterator];

    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    const questionEl = document.createElement("h3");
    questionEl.textContent = item.question;
    questionDiv.appendChild(questionEl);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";
    const optioncharacter = "abcd";

    for (let j = 0; j < item.options.length; j++) {
      const inputEl = document.createElement("input");
      const labelEl = document.createElement("label");
      const brEl = document.createElement("br");
      const uniqueid = randomGenerator();
      const nameAttribute = `question${item.value}`;
      answerObjects[nameAttribute] = item.correctAnswer;

      inputEl.type = "radio";
      inputEl.name = nameAttribute;
      inputEl.id = uniqueid;
      inputEl.value = optioncharacter.charAt(j);
      labelEl.setAttribute("for", uniqueid);
      labelEl.textContent = item.options[j];

      optionsDiv.appendChild(inputEl);
      optionsDiv.appendChild(labelEl);
      optionsDiv.appendChild(brEl);
    }

    formElement.appendChild(questionDiv);
    formElement.appendChild(optionsDiv);
  }
  quizContainer.replaceChild(formElement, quizForm);
  noOfGeneratedQuiz += generatedQuiz.length;
  javascriptQuizs.splice(0, generatedQuiz.length);
}

function nextQuestion() {
  calculateScore();
  if (noOfGeneratedQuiz < noOfQuestions) {
    generateQuiz();
  } else {
    displayScore();
  }
}

function calculateScore() {
  const formElement = document.querySelector("#quiz-form");
  const formData = new FormData(formElement);

  formData.forEach((value, key) => {
    if (answerObjects[key] === value) {
      score++;
    }
  });
}

function displayScore() {
  alert(`Your score is ${score} out of ${noOfQuestions}`);
}

function randomGenerator() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  const requiredLength = 7;

  for (let i = 0; i < requiredLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function shuffleArray(array) {

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

}
