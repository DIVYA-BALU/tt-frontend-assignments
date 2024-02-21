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
        question: "The Indian national anthem \"Jana Gana Mana\" was written by __________",
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
    },
    {
        question: "The first President of India was __________",
        answers: [
            {text: "Dr. Rajendra Prasad", correct: true},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Sardar Vallabhbhai Patel", correct: false},
            {text: " Dr. B.R. Ambedkar", correct: false}
        ]
    }, 
    {
        question: "The Indian currency is called the __________",
        answers: [
            {text: "Taka", correct: false},
            {text: "Rupiah", correct: false},
            {text: "Peso", correct: false},
            {text: "Rupee", correct: true}
        ]
    }, 
    {
        question: "Who was the first woman Prime Minister of India?",
        answers: [
            {text: "Soniya Gandhi", correct: false},
            {text: "Mamata Banerjee", correct: false},
            {text: "Indira Gandhi", correct: true},
            {text: "Sushma Swaraj", correct: false}
        ]
    },
    {
        question: "The 'Taj Mahal' is located in which Indian city?",
        answers: [
            {text: "Delhi", correct: false},
            {text: "jaipur", correct: false},
            {text: "Agra", correct: true},
            {text: "Varanashi", correct: false}
        ]
    },
    {
        question: "The Indian film industry based in Mumbai is commonly known as __________",
        answers: [
            {text: "Mollywood", correct: false},
            {text: "Tollywood", correct: false},
            {text: "Bollywood", correct: true},
            {text: "Kollywood", correct: false}
        ]
    },
    {
        question: "The festival of lights celebrated in India is known as __________",
        answers: [
            {text: "Holi", correct: false},
            {text: "Diwali", correct: true},
            {text: "Pongal", correct: false},
            {text: "Christmas", correct: false}
        ]
    },
    {
        question: "Which mountain range separates India from the rest of Asia?",
        answers: [
            {text: "The Himalayas", correct: true},
            {text: " The Western Ghats", correct: false},
            {text: " The Eastern  Ghats", correct: false},
            {text: "The Aravalli Range", correct: false}
        ]
    },
    {
        question: "The Indian state known for its backwaters and houseboat tourism is _________",
        answers: [
            {text: "Tamil Nadu", correct: false},
            {text: "Kerela", correct: true},
            {text: "Rajasthan", correct: false},
            {text: "Delhi", correct: false}
        ]
    },
    {
        question: "Who was known as the \"Father of the Indian Constitution\"?",
        answers: [
            {text: "Dr. Rajendra Prasad", correct: false},
            {text: " Dr. B.R. Ambedkar", correct: true},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Sardar Vallabhbhai Patel", correct: false},
        ]
    },
    {
        question: "The famous 'Khajuraho' temples are located in which state of India?",
        answers: [
            {text: "Goa", correct: false},
            {text: "Madhya Pradesh", correct: true},
            {text: "Bihar", correct: false},
            {text: "Sikkim", correct: false}
        ]
    }
];

const questionEl = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timeCount = document.querySelector(".app .timer .time_secs");

let currentQuestionIndex = 0;
let score = 0;
let counter = 0;
let timeStart = 10;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
    clearInterval(counter);
    startTimer(timeStart);
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

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;

        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }

        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
            handleNextButton();
        }
    }
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

    clearInterval(counter);
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

    if (currentQuestionIndex < questions.length) {
        showQuestions();
        startTimer(timeStart);
    }
        
    else showScore();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
        clearInterval(counter);
        startTimer(timeStart);
    }

    else startQuiz();
})

startQuiz();