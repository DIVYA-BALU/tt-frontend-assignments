const questionBank = [
    {
        question: 'Which of the following languages is more suited to a structured program?',
        option: ['PL/1', 'FORTRAN', 'BASIC', 'PASCAL'],
        answer: 'PASCAL'
    },
    {
        question: 'A computer-assisted method for the recording and analyzing of existing or hypothetical systems is?',
        option: ['Data transmission', 'Data flow', 'Data capture', 'Data processing'],
        answer: 'Data flow'
    },
    {
        question: 'For which of the following disciplines is Nobel Prize awarded?',
        option: ['Physics and Chemistry', 'Physiology or Medicine', 'Literature, Peace and Economics', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'What difference does the 5th generation computer have from other generation computers?',
        option: ['Technological advancement', 'Scientific code', 'Object-Oriented Programming', 'All of the above'],
        answer: 'Technological advancement'
    },
    {
        question: 'Which of the following computer languages is used for artificial intelligence?',
        option: ['FORTRAN', 'PROLOG', 'COBOL', 'None of the above'],
        answer: 'PROLOG'
    },
    {
        question: 'The input and output devices are located away from the central computer facility in which particular type of processing?',
        option: ['Time sharing', 'Batch processing', 'Interactive mode', 'Real-time processing'],
        answer: 'Batch processing'
    },
    {
        question: 'Which swapping device is used to hold the images of pages in main memory?',
        option: ['Plex', 'Paging drum', 'Card punch', 'Optical mark reader'],
        answer: 'Paging drum'
    },
    {
        question: 'A section of code that may only be executed by one process at any one time is?',
        option: ['CPM', 'Critical resource', 'Critical region', 'Gray code'],
        answer: 'Critical region'
    },
    {
        question: 'A step-by-step procedure used to solve a problem is called?',
        option: ['Operating system', 'Algorithm', 'Application program', 'All of the above'],
        answer: 'Algorithm'
    },
    {
        question: 'As compared to diskettes, the hard disks are?',
        option: ['more expensive', 'more portable', 'less rigid', 'slowly accessed'],
        answer: 'more expensive'
    },
    {
        question: 'As compared to diskettes, the hard disks are?',
        option: ['more expensive', 'more portable', 'less rigid', 'slowly accessed'],
        answer: 'more expensive'
    }
];

let body = document.body;

let usedIndexes = []; // Array to keep track of used question indexes

// Creating title element
const title = document.createElement('h1');
title.id = 'title';
title.innerText = "Today's Quiz";
body.appendChild(title);

// Creating quiz container
const quizContainer = document.createElement('div');
quizContainer.id = 'quiz-container';
body.appendChild(quizContainer);

// Creating question container
const questionContainer = document.createElement('div');
questionContainer.className = 'questions';
quizContainer.appendChild(questionContainer);

// Creating question element
const questionElement = document.createElement('h2');
questionElement.id = 'question';
questionContainer.appendChild(questionElement);

// Creating options list
const optionsList = document.createElement('ol');
optionsList.type = 'A';

for (let i = 0; i < 4; i++) {
    let listItem = document.createElement('li');
    listItem.className = 'option';
    let span = document.createElement('span');
    span.id = 'option' + i;
    span.onclick = function () {
        calcScore(this);
    };
    listItem.appendChild(span);
    optionsList.appendChild(listItem);
}

questionContainer.appendChild(optionsList);

// Creating start element
const startElement = document.createElement('h4');
startElement.id = 'start';
questionContainer.appendChild(startElement);

// Creating buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons';
quizContainer.appendChild(buttonsContainer);

// Creating next button
const nextButton = document.createElement('button');
nextButton.type = 'button';
nextButton.className = 'next';
nextButton.innerText = 'Next';
buttonsContainer.appendChild(nextButton);

// Creating scoreboard section
const scoreboard = document.createElement('div');
scoreboard.id = 'scoreboard';
body.appendChild(scoreboard);

// Creating score title
const scoreTitle = document.createElement('h2');
scoreTitle.id = 'score-title';
scoreTitle.innerText = 'Your Score';
scoreboard.appendChild(scoreTitle);

// Creating score element
const scoreElement = document.createElement('h2');
scoreElement.id = 'score';
scoreboard.appendChild(scoreElement);

// Creating score button
const scoreButton = document.createElement('button');
scoreButton.type = 'button';
scoreButton.id = 'score-btn';
scoreButton.onclick = function () {
    backToQuiz();
};
scoreButton.innerText = 'Back to Quiz';
scoreboard.appendChild(scoreButton);

// Creating check answer button
const checkAnswerButton = document.createElement('button');
checkAnswerButton.type = 'button';
checkAnswerButton.id = 'check-answer';
checkAnswerButton.onclick = function () {
    checkAnswer();
};
checkAnswerButton.innerText = 'Check Answers';
scoreboard.appendChild(checkAnswerButton);

// Creating answers section
const answerBank = document.createElement('div');
answerBank.id = 'answerBank';
body.appendChild(answerBank);

// Creating answers title
const answersTitle = document.createElement('h2');
answersTitle.innerText = 'Answers :';
answerBank.appendChild(answersTitle);

// Creating answers list
const answersList = document.createElement('ol');
answersList.type = '1';
answersList.id = 'answers';
answerBank.appendChild(answersList);

// Creating score button (Back to Quiz)
const scoreButtonBack = document.createElement('button');
scoreButtonBack.type = 'button';
scoreButtonBack.id = 'score-btn';
scoreButtonBack.onclick = function () {
    backToQuiz();
};
scoreButtonBack.innerText = 'Back to Quiz';
answerBank.appendChild(scoreButtonBack);

// Reference to HTML elements
const question = document.getElementById('question');
const option0 = document.getElementById('option0');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const start = document.getElementById('start');
const next = document.querySelector('.next');
const points = document.getElementById('score');
const span = document.querySelectorAll('span');
let i = 0;
let score = 0;

const randomNum = 7;
// Function to display a random set of 5 questions
function displayRandomQuestionSet() {
    while (usedIndexes.length < randomNum) {
        let randomIndex = Math.floor(Math.random() * questionBank.length);
        if (!usedIndexes.includes(randomIndex))
            usedIndexes.push(randomIndex);
    }
}

nextButton.addEventListener('click', displayRandomQuestionSet);

// Function to display questions
function displayQuestion() {
    for (let a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    const questionValue = question
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[usedIndexes[i]].question;
    // If the question has only two options
    if (questionBank[usedIndexes[i]].option.length === 2) {
        // Displaying only two options
        option0.innerHTML = 'True';
        option1.innerHTML = 'False';
        option2.innerHTML = ''; // You can hide the other options if needed
        option3.innerHTML = '';
    } else {
        // Displaying all four options
        option0.innerHTML = questionBank[usedIndexes[i]].option[0];
        option1.innerHTML = questionBank[usedIndexes[i]].option[1];
        option2.innerHTML = questionBank[usedIndexes[i]].option[2];
        option3.innerHTML = questionBank[usedIndexes[i]].option[3];
    }

    start.innerHTML = 'Question' + ' ' + (i + 1) + ' ' + 'of' + ' ' + usedIndexes.length;
}

// Function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[usedIndexes[i]].answer && score < usedIndexes.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
        }
    setTimeout(nextQuestion, 300);
}

// Function to display next question
function nextQuestion() {
    console.log(888);
    if (i < usedIndexes.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + usedIndexes.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';
    }
}

// Click event for next button
next.addEventListener('click', nextQuestion);

// Back to Quiz button event
function backToQuiz() {
    location.reload();
}

// Function to check answers
function checkAnswer() {
    const answerBank = document.getElementById('answerBank');
    const answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (let a = 0; a < usedIndexes.length; a++) {
        let list = document.createElement('li');
        list.innerHTML = questionBank[usedIndexes[a]].answer;
        answers.appendChild(list);
    }
}

displayRandomQuestionSet();
// Initial display of the first question
displayQuestion();
