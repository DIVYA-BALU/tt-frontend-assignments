const bodyEle = document.querySelector(".body-tag");
const divEle = document.createElement("div");
divEle.className = "outer-div";
const formEle = document.createElement("form");
formEle.className = "quiz-form";
const submitEle = document.createElement("button");

submitEle.type = "submit"
submitEle.textContent = "Submit";


function randomNumber(inputsLength) {
    return Math.floor(Math.random() * inputsLength);
}

const inputs = [
    {
        question_no: 1,
        label_content: "Who is known as the 'Father of the Nation' in India?",
        options: [
            {
                value: 1,
                content: "Jawaharlal Nehru"
            },
            {
                value: 2,
                content: "Modi"
            },
            {
                value: 3,
                content: "Subhas Chandra Bose"
            },
            {
                value: 4,
                content: "Mahatma Gandhi"
            },
        ],
        answer: {
            value: 4,
            content: "Mahatma Gandhi"
        }
    },
    {
        question_no: 2,
        label_content: "What is the capital city of France?",
        options: [
            {
                value: 1,
                content: "Berlin"
            },
            {
                value: 2,
                content: "Madrid"
            },
            {
                value: 3,
                content: "Paris"
            }
        ],
        answer: {
            value: 3,
            content: "Paris"
        }
    },
    {
        question_no: 3,
        label_content: "In which year did World War II end?",
        options: [
            {
                value: 1,
                content: "1945"
            },
            {
                value: 2,
                content: "1939"
            },
            {
                value: 3,
                content: "1942"
            }
        ],
        answer: {
            value: 1,
            content: "1945"
        }
    },
    {
        question_no: 4,
        label_content: "Who wrote 'The Great Gatsby'?",
        options: [
            {
                value: 1,
                content: "F. Scott Fitzgerald"
            },
            {
                value: 2,
                content: "Ernest Hemingway"
            },
            {
                value: 3,
                content: "Jane Austen"
            }
        ],
        answer: {
            value: 1,
            content: "F. Scott Fitzgerald"
        }
    },
    {
        question_no: 5,
        label_content: "What is the largest mammal in the world?",
        options: [
            {
                value: 1,
                content: "Elephant"
            },
            {
                value: 2,
                content: "Blue Whale"
            },
            {
                value: 3,
                content: "Giraffe"
            }
        ],
        answer: {
            value: 2,
            content: "Blue Whale"
        }
    },
    {
        question_no: 6,
        label_content: "Which planet is known as the 'Red Planet'?",
        options: [
            {
                value: 1,
                content: "Mars"
            },
            {
                value: 2,
                content: "Venus"
            },
            {
                value: 3,
                content: "Jupiter"
            }
        ],
        answer: {
            value: 1,
            content: "Mars"
        }
    },
    {
        question_no: 7,
        label_content: "Who painted the famous artwork 'Starry Night'?",
        options: [
            {
                value: 1,
                content: "Vincent van Gogh"
            },
            {
                value: 2,
                content: "Pablo Picasso"
            },
            {
                value: 3,
                content: "Leonardo da Vinci"
            }
        ],
        answer: {
            value: 1,
            content: "Vincent van Gogh"
        }
    },
    {
        question_no: 8,
        label_content: "What is the currency of Japan?",
        options: [
            {
                value: 1,
                content: "Yen"
            },
            {
                value: 2,
                content: "Won"
            },
            {
                value: 3,
                content: "Dollar"
            }
        ],
        answer: {
            value: 1,
            content: "Yen"
        }
    },
    {
        question_no: 9,
        label_content: "Which scientist formulated the theory of relativity?",
        options: [
            {
                value: 1,
                content: "Isaac Newton"
            },
            {
                value: 2,
                content: "Albert Einstein"
            },
            {
                value: 3,
                content: "Stephen Hawking"
            }
        ],
        answer: {
            value: 2,
            content: "Albert Einstein"
        }
    },
    {
        question_no: 10,
        label_content: "What is the national flower of India?",
        options: [
            {
                value: 1,
                content: "Rose"
            },
            {
                value: 2,
                content: "Lotus"
            },
            {
                value: 3,
                content: "Tulip"
            }
        ],
        answer: {
            value: 2,
            content: "Lotus"
        }
    },
    {
        question_no: 11,
        label_content: "Who wrote 'The Catcher in the Rye'?",
        options: [
            {
                value: 1,
                content: "J.D. Salinger"
            },
            {
                value: 2,
                content: "George Orwell"
            },
            {
                value: 3,
                content: "Mark Twain"
            }
        ],
        answer: {
            value: 1,
            content: "J.D. Salinger"
        }
    },
    {
        question_no: 12,
        label_content: "In which year did the first manned moon landing occur?",
        options: [
            {
                value: 1,
                content: "1969"
            },
            {
                value: 2,
                content: "1972"
            },
            {
                value: 3,
                content: "1957"
            }
        ],
        answer: {
            value: 1,
            content: "1969"
        }
    },
    {
        question_no: 13,
        label_content: "Who is the author of 'Pride and Prejudice'?",
        options: [
            {
                value: 1,
                content: "Jane Austen"
            },
            {
                value: 2,
                content: "Emily Bronte"
            },
            {
                value: 3,
                content: "Charlotte Bronte"
            }
        ],
        answer: {
            value: 1,
            content: "Jane Austen"
        }
    },
    {
        question_no: 14,
        label_content: "What is the largest ocean on Earth?",
        options: [
            {
                value: 1,
                content: "Pacific Ocean"
            },
            {
                value: 2,
                content: "Atlantic Ocean"
            },
            {
                value: 3,
                content: "Indian Ocean"
            }
        ],
        answer: {
            value: 1,
            content: "Pacific Ocean"
        }
    },
    {
        question_no: 15,
        label_content: "What is the currency of China?",
        options: [
            {
                value: 1,
                content: "Yuan"
            },
            {
                value: 2,
                content: "Yen"
            },
            {
                value: 3,
                content: "Rupee"
            }
        ],
        answer: {
            value: 1,
            content: "Yuan"
        }
    },
    {
        question_no: 16,
        label_content: "Who is known as the 'Iron Lady'?",
        options: [
            {
                value: 1,
                content: "Margaret Thatcher"
            },
            {
                value: 2,
                content: "Angela Merkel"
            },
            {
                value: 3,
                content: "Hillary Clinton"
            }
        ],
        answer: {
            value: 3,
            content: "Hillary Clinton"
        }
    },
    {
        question_no: 17,
        label_content: "What is the smallest prime number?",
        options: [
            {
                value: 1,
                content: "2"
            },
            {
                value: 2,
                content: "3"
            },
            {
                value: 3,
                content: "1"
            }
        ],
        answer: {
            value: 1,
            content: "2"
        }
    },
    {
        question_no: 18,
        label_content: "Who discovered penicillin?",
        options: [
            {
                value: 1,
                content: "Alexander Fleming"
            },
            {
                value: 2,
                content: "Marie Curie"
            },
            {
                value: 3,
                content: "Louis Pasteur"
            }
        ],
        answer: {
            value: 1,
            content: "Alexander Fleming"
        }
    },
    {
        question_no: 19,
        label_content: "What is the capital city of Brazil?",
        options: [
            {
                value: 1,
                content: "Rio de Janeiro"
            },
            {
                value: 2,
                content: "Brasília"
            },
            {
                value: 3,
                content: "Sao Paulo"
            }
        ],
        answer: {
            value: 2,
            content: "Brasília"
        }
    },
    {
        question_no: 20,
        label_content: "Who wrote 'The Adventures of Sherlock Holmes'?",
        options: [
            {
                value: 1,
                content: "Arthur Conan Doyle"
            },
            {
                value: 2,
                content: "Agatha Christie"
            },
            {
                value: 3,
                content: "Daphne du Maurier"
            }
        ],
        answer: {
            value: 1,
            content: "Arthur Conan Doyle"
        }
    },
    {
        question_no: 21,
        label_content: "Which planet is known as the 'Blue Planet'?",
        options: [
            {
                value: 1,
                content: "Mars"
            },
            {
                value: 2,
                content: "Earth"
            },
            {
                value: 3,
                content: "Venus"
            }
        ],
        answer: {
            value: 2,
            content: "Earth"
        }
    },
    {
        question_no: 22,
        label_content: "In which year did the Titanic sink?",
        options: [
            {
                value: 1,
                content: "1905"
            },
            {
                value: 2,
                content: "1912"
            },
            {
                value: 3,
                content: "1915"
            }
        ],
        answer: {
            value: 2,
            content: "1912"
        }
    },
    {
        question_no: 23,
        label_content: "Who painted the Mona Lisa?",
        options: [
            {
                value: 1,
                content: "Vincent van Gogh"
            },
            {
                value: 2,
                content: "Pablo Picasso"
            },
            {
                value: 3,
                content: "Leonardo da Vinci"
            }
        ],
        answer: {
            value: 3,
            content: "Leonardo da Vinci"
        }
    },
    {
        question_no: 24,
        label_content: "Who invented the telephone?",
        options: [
            {
                value: 1,
                content: "Thomas Edison"
            },
            {
                value: 2,
                content: "Alexander Graham Bell"
            },
            {
                value: 3,
                content: "Nikola Tesla"
            }
        ],
        answer: {
            value: 2,
            content: "Alexander Graham Bell"
        }
    },
    {
        question_no: 25,
        label_content: "What is the tallest mountain in the world?",
        options: [
            {
                value: 1,
                content: "Mount Kilimanjaro"
            },
            {
                value: 2,
                content: "Mount Everest"
            },
            {
                value: 3,
                content: "Mount Fuji"
            }
        ],
        answer: {
            value: 2,
            content: "Mount Everest"
        }
    }
]



const totalQuestions = 10;
let idValue = 1;
let questionNumber = 1;
const map = new Map();
while (map.size < totalQuestions) {
    const traverse = randomNumber(inputs.length);
    if (map.has(traverse)) {
        continue;
    }
    map.set(traverse, 1);
    const innerDivEle = document.createElement("div");
    innerDivEle.className = "section-div";
    const questionsDivEle = document.createElement("div");
    questionsDivEle.className = "question-div";

    const optionsDivEle = document.createElement("div");
    optionsDivEle.className = "options-div";
    const input = inputs[traverse];
    const labelEle = document.createElement("label");
    labelEle.textContent = `${questionNumber}) ${input.label_content}`;
    questionsDivEle.appendChild(labelEle);
    innerDivEle.appendChild(questionsDivEle);
    const answerDivEle = document.createElement("div");
    answerDivEle.className = "answer-div hidden";

    const brEle = document.createElement("br");
    innerDivEle.appendChild(brEle);

    let index = 0;
    while (index < input.options.length) {
        let inputEle = document.createElement("input");
        inputEle.type = "radio";
        inputEle.id = `${idValue}`;
        inputEle.value = input.options[index].value;
        if (inputEle.type != "checkbox") {
            inputEle.setAttribute("name", input.question_no);
        }
        const labelEle = document.createElement("label");
        labelEle.textContent = input.options[index].content;
        labelEle.setAttribute("for", `${idValue}`);
        idValue++;

        optionsDivEle.appendChild(inputEle);
        optionsDivEle.appendChild(labelEle);

        index++;
    }
    innerDivEle.appendChild(optionsDivEle);
    questionNumber++;

    answerDivEle.setAttribute("name", input.question_no);
    answerDivEle.textContent = `Correct answer : ${input.answer.content}`;
    innerDivEle.appendChild(answerDivEle);
    formEle.appendChild(innerDivEle);
}
formEle.appendChild(submitEle);
divEle.appendChild(formEle);
bodyEle.appendChild(divEle);


const score = document.createElement("div");
score.className = "score-div";

formEle.addEventListener("submit", function (e) {
    let list = document.querySelectorAll(".answer-div")
    list.forEach(element => {
        console.log(element);
        if (!element.classList.contains("hidden")) {
            element.classList.add("hidden");
        }
    });
    let correctAnswersCount = 0;
    e.preventDefault();
    const formData = new FormData(formEle);
    formData.forEach(function (value, key) {
        value = Number(value);
        if (value === inputs[key - 1].answer.value) {

            correctAnswersCount++;
            key = String(key);
        }
        else {
            const link = document.querySelectorAll(`[name="${key}"]`);
            link[3].classList.remove("hidden");
        }
    })
    score.textContent = `Total Score ${correctAnswersCount} / ${totalQuestions}`;
    formEle.appendChild(score);
    divEle.appendChild(formEle);
    bodyEle.appendChild(divEle);
});
