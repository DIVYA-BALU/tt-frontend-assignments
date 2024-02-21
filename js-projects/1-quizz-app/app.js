const header = document.createElement('header');

const navbarDiv = document.createElement('div');
navbarDiv.classList.add('navbar');

const h1 = document.createElement('h1');
h1.textContent = 'QUIZ APP';
navbarDiv.appendChild(h1);

const h3 = document.createElement('h3');
h3.textContent = 'Time Left 150 secs';
navbarDiv.appendChild(h3);

header.appendChild(navbarDiv);

const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');

const quizInner = document.createElement('div');
quizInner.classList.add('quiz-inner');

const headingDiv = document.createElement('div');
headingDiv.classList.add('heading-div');

const h2 = document.createElement('h2');
h2.textContent = 'Quiz Instructions';
headingDiv.appendChild(h2);

quizInner.appendChild(headingDiv);

const p = document.createElement('p');
p.textContent = 'Welcome to the quiz! Please read the following instructions before starting:';

quizInner.appendChild(p);

const ul = document.createElement('ul');
function disp(content) {
    const li = document.createElement('li');
    li.textContent = content;
    ul.appendChild(li);
}

const content = ["Make sure you are in a quiet environment.", 
                    "Read each question carefully before answering.", 
                    "You cannot go back to previous questions once you proceed.", 
                    "Click the \"Submit\" button at the end to submit your answers."
                ];

for(let i=0; i<content.length; i++){
    disp(content[i]); 
}

quizInner.appendChild(ul);

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button-div');

const button = document.createElement('button');
button.textContent = 'Start Quiz';
button.addEventListener('click', startQuizButton);

buttonDiv.appendChild(button);

quizInner.appendChild(buttonDiv);

quizContainer.appendChild(quizInner);

document.body.appendChild(header);
document.body.appendChild(quizContainer);

function startQuizButton() {
    startQuiz();
}