const questions = [
    {
        question: "Which river is considered the holiest in Hinduism?",
        answers: [
            {text: "Yamuna", correct: false},
            {text: "Ganges", correct: true},
            {text: "Brahmaputra", correct: false},
            {text: "Godavari", correct: false}
        ]
    },
    {
        question: "The national flower of India is the",
        answers: [
            {text: "Lotus", correct: true},
            {text: "Rose", correct: false},
            {text: "Jasmin", correct: false},
            {text: "Lily", correct: false}
        ]
    },
    {
        question: "What is the largest state in India by area?",
        answers: [
            {text: "Tamil Nadu", correct: false},
            {text: "Kerela", correct: false},
            {text: "Rajasthan", correct: true},
            {text: "Delhi", correct: false}
        ]
    },
    {
        question: "The Indian national anthem \"Jana Gana Mana\" was written by:",
        answers: [
            {text: "Rabindranath Tagore", correct: true},
            {text: "Mahatma Gandhi", correct: false},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Subhas Chandra Bose", correct: false}
        ]
    },
    {
        question: "Which city is known as the \"Pink City\"?",
        answers: [
            {text: "Jodhapur", correct: false},
            {text: "Jaipur", correct: true},
            {text: "Udhaypur", correct: false},
            {text: "Bikaner", correct: false}
        ]
    }
]

const questionEl = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct)
            button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    
    else selectedBtn.classList.add("incorrect");

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") 
            button.classList.add("correct");

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionEl.innerHTML = `Your score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
}   

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length)
        showQuestions();
    
    else showScore();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) 
        handleNextButton();

    else startQuiz();
})

startQuiz();