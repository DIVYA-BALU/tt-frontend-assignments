const bodyEle = document.querySelector(".body-tag");

const divEle = document.createElement("div");
divEle.className = "outer-div";

const headingEle = document.createElement("div");
headingEle.className = "heading-div";
headingEle.textContent = "Tech Quiz";

const formEle = document.createElement("form");
formEle.className = "quiz-form";

const startQuizEle = document.createElement("button");
startQuizEle.textContent = "Start Quiz";



// generate random number for questions

function randomNumber(inputsLength) {
    return Math.floor(Math.random() * inputsLength);
}



const inputs = [
    {
        question_no: 1,
        type: "radio",
        label_content: "Who is known as the 'Father of the Nation' in India?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Jawaharlal Nehru"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Modi"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Subhas Chandra Bose"
            },
            {
                value: 4,
                isAnswer: true,
                content: "Mahatma Gandhi"
            },
        ]
    },
    {
        question_no: 2,
        type: "select",
        isMultiple: true,
        label_content: "What is the capital city of France?",
        options: [
            {
                value: 0,
                isAnswer: false,
                content: "Select options"
            },
            {
                value: 1,
                isAnswer: true,
                content: "Berlin"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Madrid"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Paris"
            }
        ]
    },
    {
        question_no: 3,
        type: "checkbox",
        label_content: "In which year did World War II end?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "1945"
            },
            {
                value: 2,
                isAnswer: false,
                content: "1939"
            },
            {
                value: 3,
                isAnswer: true,
                content: "1942"
            }
        ]
    },
    {
        question_no: 4,
        type: "checkbox",
        label_content: "Who wrote 'The Great Gatsby'?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "F. Scott Fitzgerald"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Ernest Hemingway"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Jane Austen"
            }
        ]
    },
    {
        question_no: 5,
        type: "radio",
        label_content: "What is the largest mammal in the world?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Elephant"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Blue Whale"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Giraffe"
            }
        ]
    },
    {
        question_no: 6,
        type: "checkbox",
        label_content: "Which planet is known as the 'Red Planet'?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Mars"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Venus"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Jupiter"
            }
        ]
    },
    {
        question_no: 7,
        type: "radio",
        label_content: "Who painted the famous artwork 'Starry Night'?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Vincent van Gogh"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Pablo Picasso"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Leonardo da Vinci"
            }
        ]
    },
    {
        question_no: 8,
        type: "radio",
        label_content: "What is the currency of Japan?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Yen"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Won"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Dollar"
            }
        ]
    },
    {
        question_no: 9,
        type: "radio",
        label_content: "Which scientist formulated the theory of relativity?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Isaac Newton"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Albert Einstein"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Stephen Hawking"
            }
        ]
    },
    {
        question_no: 10,
        type: "radio",
        label_content: "What is the national flower of India?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Rose"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Lotus"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Tulip"
            }
        ]
    },

    {
        question_no: 11,
        type: "text",
        label_content: "What is the national flower of India?",
        answer: "hello"
    },

    {
        question_no: 12,
        type: "checkbox",
        label_content: "Who wrote 'The Catcher in the Rye'?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "J.D. Salinger",
            },
            {
                value: 2,
                isAnswer: false,
                content: "George Orwell"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Mark Twain"
            }
        ]
    },
    {
        question_no: 13,
        type: "radio",
        label_content: "Who is the author of 'Pride and Prejudice'?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Jane Austen"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Emily Bronte"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Charlotte Bronte"
            }
        ]
    },
    {
        question_no: 14,
        type: "checkbox",
        label_content: "What is the largest ocean on Earth?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Pacific Ocean"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Atlantic Ocean"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Indian Ocean"
            }
        ]
    },
    {
        question_no: 15,
        type: "radio",
        label_content: "What is the currency of China?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Yuan"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Yen"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Rupee"
            }
        ]
    },
    {
        question_no: 16,
        type: "select",
        isMultiple: false,
        label_content: "Who is known as the 'Iron Lady'?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Margaret Thatcher"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Angela Merkel"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Hillary Clinton"
            }
        ]
    },
    {
        question_no: 17,
        type: "checkbox",
        label_content: "What is the smallest prime number?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "2"
            },
            {
                value: 2,
                isAnswer: false,
                content: "3"
            },
            {
                value: 3,
                isAnswer: true,
                content: "1"
            }
        ]
    },
    {
        question_no: 18,
        type: "checkbox",
        label_content: "Who discovered penicillin?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Alexander Fleming"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Marie Curie"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Louis Pasteur"
            }
        ]
    },
    {
        question_no: 19,
        type: "radio",
        label_content: "What is the capital city of Brazil?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Rio de Janeiro"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Brasília"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Sao Paulo"
            }
        ]
    },
    {
        question_no: 20,
        type: "radio",
        label_content: "Who wrote 'The Adventures of Sherlock Holmes'?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Arthur Conan Doyle"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Agatha Christie"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Daphne du Maurier"
            }
        ]
    },
    {
        question_no: 21,
        type: "select",
        isMultiple : true,
        label_content: "Which planet is known as the 'Blue Planet'?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Mars"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Earth"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Venus"
            }
        ]
    },
    {
        question_no: 22,
        type: "checkbox",
        label_content: "In which year did the Titanic sink?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "1905"
            },
            {
                value: 2,
                isAnswer: true,
                content: "1912"
            },
            {
                value: 3,
                isAnswer: false,
                content: "1915"
            }
        ]
    },
    {
        question_no: 23,
        type: "radio",
        label_content: "Who painted the Mona Lisa?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Vincent van Gogh"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Pablo Picasso"
            },
            {
                value: 3,
                isAnswer: true,
                content: "Leonardo da Vinci"
            }
        ]
    },
    {
        question_no: 24,
        type: "radio",
        label_content: "Who invented the telephone?",
        options: [
            {
                value: 1,
                isAnswer: false,
                content: "Thomas Edison"
            },
            {
                value: 2,
                isAnswer: true,
                content: "Alexander Graham Bell"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Nikola Tesla"
            }
        ]
    },
    {
        question_no: 25,
        type: "radio",
        label_content: "What is the tallest mountain in the world?",
        options: [
            {
                value: 1,
                isAnswer: true,
                content: "Mount Kilimanjaro"
            },
            {
                value: 2,
                isAnswer: false,
                content: "Mount Everest"
            },
            {
                value: 3,
                isAnswer: false,
                content: "Mount Fuji"
            }
        ]
    }
]





// elements creation

const totalQuestions = 10;
let idValue = 1;
let questionNumber = 1;
const map = new Map();

let innerDivEle;
function quizCreation(traverse) {
    map.set(traverse, 1);
    const input = inputs[traverse];
    innerDivEle = document.createElement("div");
    innerDivEle.className = "section-div";
    innerDivEle.setAttribute("question-div",questionNumber);
    const questionsDivEle = document.createElement("div");
    questionsDivEle.className = "question-div";
    questionsDivEle.setAttribute("input-question-no", `${input.question_no}`);
    questionsDivEle.textContent = `${questionNumber}) ${input.label_content}`;
    innerDivEle.appendChild(questionsDivEle);
    const brEle = document.createElement("br");
    innerDivEle.appendChild(brEle);

    const optionsDivEle = document.createElement("div");
    optionsDivEle.className = "options-div";
    const answerDivEle = document.createElement("div");
    answerDivEle.className = "answer-div hidden";
    let answer = [];

    if (input.type === "radio" || input.type === "checkbox") {

        let index = 0;

        while (index < input.options.length) {
            const innerOptionDivEle = document.createElement("div");
            innerOptionDivEle.setAttribute("question-no", `${questionNumber}`);
            innerOptionDivEle.setAttribute("value-no", `${input.options[index].value}`);
            const inputEle = document.createElement("input");

            if (input.type === "radio") {
                inputEle.type = "radio";
            }
            else {
                inputEle.type = "checkbox"
            }

            inputEle.id = `${idValue}`;
            inputEle.value = input.options[index].value;
            inputEle.setAttribute("name", input.question_no);
            const labelEle = document.createElement("label");
            labelEle.textContent = input.options[index].content;
            labelEle.setAttribute("for", `${idValue}`);
            idValue++;

            innerOptionDivEle.appendChild(inputEle);
            innerOptionDivEle.appendChild(labelEle);
            optionsDivEle.appendChild(innerOptionDivEle);
            index++;

            answerDivEle.setAttribute("name", input.question_no);
        }

    }

    else if (input.type === "select") {
        optionsDivEle.classList.add("select-div-option");
        const selectOptionEle = document.createElement("select");
        selectOptionEle.setAttribute("question-no", `${questionNumber}`);

        if (input.isMultiple === true) {
            selectOptionEle.multiple = "multiple";
        }

        let index = 0;
        
        while (index < input.options.length) {
            const optionsEle = document.createElement("option");
            optionsEle.textContent = `${input.options[index].content}`;
            optionsEle.setAttribute("id",`${idValue}`);
            optionsEle.setAttribute("name", `${input.question_no}`);
            optionsEle.value = `${input.options[index].value}`;
            selectOptionEle.appendChild(optionsEle);
            index++;
            idValue++;
        }

        optionsDivEle.appendChild(selectOptionEle);
    }

    else {
        const inputEle = document.createElement("input");
        inputEle.setAttribute('question-no',`${questionNumber}`);
        inputEle.setAttribute("name",input.question_no);
        inputEle.setAttribute("id",`${idValue}`);
        inputEle.type = "text";
        optionsDivEle.appendChild(inputEle);
    }

    if(input.type === "text"){
        answer.push(input.answer);
    }
    else{
        input.options.forEach(option => {

            if (option.isAnswer === true) {
                answer.push(option.content);
            }

        });
    }
    answerDivEle.textContent = `Correct answer : ${answer}`;



    questionNumber++;
    innerDivEle.appendChild(questionsDivEle);
    innerDivEle.appendChild(optionsDivEle);
    innerDivEle.appendChild(answerDivEle);
    formEle.appendChild(innerDivEle);
    divEle.appendChild(headingEle);
    divEle.appendChild(formEle);
    bodyEle.appendChild(divEle);
}


formEle.appendChild(startQuizEle);
divEle.appendChild(headingEle);
divEle.appendChild(formEle);
bodyEle.appendChild(divEle);



let traverse;
startQuizEle.addEventListener('click',function(event){
    event.preventDefault();
    do{
        traverse = randomNumber(25);
    }
    while(map.has(traverse));
    
    if(map.size<10){
        map.set(traverse,1);
        if(questionNumber!=1){
            formEle.removeChild(innerDivEle);
        }   
        quizCreation(traverse);
    }
})







