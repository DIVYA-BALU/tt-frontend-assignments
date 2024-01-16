const bodyEle = document.querySelector(".body-tag");
const divEle = document.createElement("div");
divEle.className = "outer-div";
const formEle = document.createElement("form");
formEle.className = "quiz-form";
const submitEle = document.createElement("button");

submitEle.type = "submit"
submitEle.textContent = "Submit";


function randomNumber(inputsLength) {
    return Math.floor(Math.random() * 10);
}

const inputs = [
    {
        question_no: 1,
        type: "radio",
        label_content: "Who is known as the 'Father of the Nation' in India?",
        options: [
            {
                value: 1,
                isAnswer: "false",
                content: "Jawaharlal Nehru"
            },
            {
                value: 2,
                isAnswer: "false",
                content: "Modi"
            },
            {
                value: 3,
                isAnswer: "false",
                content: "Subhas Chandra Bose"
            },
            {
                value: 4,
                isAnswer: "true",
                content: "Mahatma Gandhi"
            },
        ]
    },
    {
        question_no: 2,
        type: "radio",
        label_content: "What is the capital city of France?",
        options: [
            {
                value: 0,
                isAnswer: "false",
                content: "Select options"
            },
            {
                value: 1,
                isAnswer: "false",
                content: "Berlin"
            },
            {
                value: 2,
                isAnswer: "false",
                content: "Madrid"
            },
            {
                value: 3,
                isAnswer: "true",
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
                isAnswer: "true",
                content: "1945"
            },
            {
                value: 2,
                isAnswer: "false",
                content: "1939"
            },
            {
                value: 3,
                isAnswer: "true",
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
                isAnswer: "false",
                content: "F. Scott Fitzgerald"
            },
            {
                value: 2,
                isAnswer: "true",
                content: "Ernest Hemingway"
            },
            {
                value: 3,
                isAnswer: "true",
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
                isAnswer: "false",
                content: "Elephant"
            },
            {
                value: 2,
                isAnswer: "true",
                content: "Blue Whale"
            },
            {
                value: 3,
                isAnswer: "false",
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
                isAnswer: "true",
                content: "Mars"
            },
            {
                value: 2,
                isAnswer: "true",
                content: "Venus"
            },
            {
                value: 3,
                isAnswer: "false",
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
                isAnswer: "true",
                content: "Vincent van Gogh"
            },
            {
                value: 2,
                isAnswer: "false",
                content: "Pablo Picasso"
            },
            {
                value: 3,
                isAnswer: "false",
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
                isAnswer: "true",
                content: "Yen"
            },
            {
                value: 2,
                isAnswer: "false",
                content: "Won"
            },
            {
                value: 3,
                isAnswer: "false",
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
                isAnswer: "false",
                content: "Isaac Newton"
            },
            {
                value: 2,
                isAnswer: "true",
                content: "Albert Einstein"
            },
            {
                value: 3,
                isAnswer: "false",
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
                isAnswer: "false",
                content: "Rose"
            },
            {
                value: 2,
                isAnswer: "true",
                content: "Lotus"
            },
            {
                value: 3,
                isAnswer: "true",
                content: "Tulip"
            }
        ]
    },

    // {
    //     question_no: 11,
    //     type: "text",
    //     label_content: "What is the national flower of India?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Rose"
    //         },
    //         {
    //             value: 2,
    //             content: "Lotus"
    //         },
    //         {
    //             value: 3,
    //             content: "Tulip"
    //         }
    //     ],
    //     answer: {
    //         value: 2,
    //         content: "Lotus"
    //     }
    // },

    // {
    //     question_no: 11,
    //     type: "checkbox",
    //     label_content: "Who wrote 'The Catcher in the Rye'?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "J.D. Salinger"
    //         },
    //         {
    //             value: 2,
    //             content: "George Orwell"
    //         },
    //         {
    //             value: 3,
    //             content: "Mark Twain"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "J.D. Salinger"
    //     }
    // },
    // {
    //     question_no: 12,
    //     type: "checkbox",
    //     label_content: "In which year did the first manned moon landing occur?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "1969"
    //         },
    //         {
    //             value: 2,
    //             content: "1972"
    //         },
    //         {
    //             value: 3,
    //             content: "1957"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "1969"
    //     }
    // },
    // {
    //     question_no: 13,
    //     type: "radio",
    //     label_content: "Who is the author of 'Pride and Prejudice'?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Jane Austen"
    //         },
    //         {
    //             value: 2,
    //             content: "Emily Bronte"
    //         },
    //         {
    //             value: 3,
    //             content: "Charlotte Bronte"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "Jane Austen"
    //     }
    // },
    // {
    //     question_no: 14,
    //     type: "checkbox",
    //     label_content: "What is the largest ocean on Earth?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Pacific Ocean"
    //         },
    //         {
    //             value: 2,
    //             content: "Atlantic Ocean"
    //         },
    //         {
    //             value: 3,
    //             content: "Indian Ocean"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "Pacific Ocean"
    //     }
    // },
    // {
    //     question_no: 15,
    //     type: "radio",
    //     label_content: "What is the currency of China?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Yuan"
    //         },
    //         {
    //             value: 2,
    //             content: "Yen"
    //         },
    //         {
    //             value: 3,
    //             content: "Rupee"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "Yuan"
    //     }
    // },
    // {
    //     question_no: 16,
    //     type: "radio",
    //     label_content: "Who is known as the 'Iron Lady'?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Margaret Thatcher"
    //         },
    //         {
    //             value: 2,
    //             content: "Angela Merkel"
    //         },
    //         {
    //             value: 3,
    //             content: "Hillary Clinton"
    //         }
    //     ],
    //     answer: {
    //         value: 3,
    //         content: "Hillary Clinton"
    //     }
    // },
    // {
    //     question_no: 17,
    //     type: "checkbox",
    //     label_content: "What is the smallest prime number?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "2"
    //         },
    //         {
    //             value: 2,
    //             content: "3"
    //         },
    //         {
    //             value: 3,
    //             content: "1"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "2"
    //     }
    // },
    // {
    //     question_no: 18,
    //     type: "checkbox",
    //     label_content: "Who discovered penicillin?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Alexander Fleming"
    //         },
    //         {
    //             value: 2,
    //             content: "Marie Curie"
    //         },
    //         {
    //             value: 3,
    //             content: "Louis Pasteur"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "Alexander Fleming"
    //     }
    // },
    // {
    //     question_no: 19,
    //     type: "radio",
    //     label_content: "What is the capital city of Brazil?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Rio de Janeiro"
    //         },
    //         {
    //             value: 2,
    //             content: "Brasília"
    //         },
    //         {
    //             value: 3,
    //             content: "Sao Paulo"
    //         }
    //     ],
    //     answer: {
    //         value: 2,
    //         content: "Brasília"
    //     }
    // },
    // {
    //     question_no: 20,
    //     type: "radio",
    //     label_content: "Who wrote 'The Adventures of Sherlock Holmes'?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Arthur Conan Doyle"
    //         },
    //         {
    //             value: 2,
    //             content: "Agatha Christie"
    //         },
    //         {
    //             value: 3,
    //             content: "Daphne du Maurier"
    //         }
    //     ],
    //     answer: {
    //         value: 1,
    //         content: "Arthur Conan Doyle"
    //     }
    // },
    // {
    //     question_no: 21,
    //     type: "checkbox",
    //     label_content: "Which planet is known as the 'Blue Planet'?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Mars"
    //         },
    //         {
    //             value: 2,
    //             content: "Earth"
    //         },
    //         {
    //             value: 3,
    //             content: "Venus"
    //         }
    //     ],
    //     answer: {
    //         value: 2,
    //         content: "Earth"
    //     }
    // },
    // {
    //     question_no: 22,
    //     type: "checkbox",
    //     label_content: "In which year did the Titanic sink?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "1905"
    //         },
    //         {
    //             value: 2,
    //             content: "1912"
    //         },
    //         {
    //             value: 3,
    //             content: "1915"
    //         }
    //     ],
    //     answer: {
    //         value: 2,
    //         content: "1912"
    //     }
    // },
    // {
    //     question_no: 23,
    //     type: "checkbox",
    //     label_content: "Who painted the Mona Lisa?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Vincent van Gogh"
    //         },
    //         {
    //             value: 2,
    //             content: "Pablo Picasso"
    //         },
    //         {
    //             value: 3,
    //             content: "Leonardo da Vinci"
    //         }
    //     ],
    //     answer: {
    //         value: 3,
    //         content: "Leonardo da Vinci"
    //     }
    // },
    // {
    //     question_no: 24,
    //     type: "radio",
    //     label_content: "Who invented the telephone?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Thomas Edison"
    //         },
    //         {
    //             value: 2,
    //             content: "Alexander Graham Bell"
    //         },
    //         {
    //             value: 3,
    //             content: "Nikola Tesla"
    //         }
    //     ],
    //     answer: {
    //         value: 2,
    //         content: "Alexander Graham Bell"
    //     }
    // },
    // {
    //     question_no: 25,
    //     type: "checkbox",
    //     label_content: "What is the tallest mountain in the world?",
    //     options: [
    //         {
    //             value: 1,
    //             content: "Mount Kilimanjaro"
    //         },
    //         {
    //             value: 2,
    //             content: "Mount Everest"
    //         },
    //         {
    //             value: 3,
    //             content: "Mount Fuji"
    //         }
    //     ],
    //     answer: {
    //         value: 2,
    //         content: "Mount Everest"
    //     }
    // }
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
    const input = inputs[traverse];
    questionsDivEle.textContent = `${questionNumber}) ${input.label_content}`;

    const optionsDivEle = document.createElement("div");
    optionsDivEle.className = "options-div";
    innerDivEle.appendChild(questionsDivEle);
    const answerDivEle = document.createElement("div");
    answerDivEle.className = "answer-div hidden";
    const brEle = document.createElement("br");
    innerDivEle.appendChild(brEle);
    if (input.type === "radio" || input.type === "checkbox") {

        let index = 0;
        let answer = [];
        while (index < input.options.length) {
            const innerOptionDivEle = document.createElement("div");
            innerOptionDivEle.setAttribute("question-no", `${questionNumber}`);
            innerOptionDivEle.setAttribute("value-no", `${input.options[index].value}`);
            const inputEle = document.createElement("input");

            if (input.type === "radio") {
                inputEle.type = "radio";
            }
            else {
                inputEle.type = "checkbox";
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
        input.options.forEach(option => {
            if (option.isAnswer === 'true') {
                answer.push(option.content);
            }
        });
        // console.log(answer);
        answerDivEle.textContent = `Correct answer : ${answer}`;
    }
    else if (input.type === "select") {
        const selectOptionEle = document.createElement("select");
        selectOptionEle.setAttribute("question-no", `${questionNumber}`);

        let index = 0;
        while (index < input.options.length) {
            const optionsEle = document.createElement("option");
            optionsEle.textContent = `${input.options[index].content}`;
            optionsEle.setAttribute("name", `${input.question_no}`);
            optionsEle.value = `${input.options[index].value}`;
            selectOptionEle.appendChild(optionsEle);
            index++;
        }
        optionsDivEle.appendChild(selectOptionEle);
    }
    else {
        const inputEle = document.createElement("input");
        inputEle.type = "text";
        optionsDivEle.appendChild(inputEle);
    }
    innerDivEle.appendChild(optionsDivEle);
    questionNumber++;
    innerDivEle.appendChild(answerDivEle);
    formEle.appendChild(innerDivEle);
}
formEle.appendChild(submitEle);
divEle.appendChild(formEle);
bodyEle.appendChild(divEle);


const score = document.createElement("div");
score.className = "score-div";


formEle.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const totalInputs = document.querySelectorAll("input");

    totalInputs.forEach(element => {
        if (element.parentElement.classList.contains("hidden-wrong")) {
            element.parentElement.classList.remove("hidden-wrong");
        }
        else if (element.parentElement.classList.contains("hidden-correct")) {
            element.parentElement.classList.remove("hidden-correct");
        }
    })

    let list = document.querySelectorAll(".answer-div");

    list.forEach(element => {

        if (!element.classList.contains("hidden")) {
            element.classList.add("hidden");
        }

    });

    let questionNumber = 1;
    let correctAnswersCount = 0;

    while (questionNumber <= 10) {
        let list1 = document.querySelectorAll(`[question-no="${questionNumber}"]`);

        let answer = [];
        list1.querySelector("")
        inputs[Number(list1[0].querySelector("input:checked").getAttribute("name"))-1].options.forEach(option => {
            if (option.isAnswer === 'true') {
                answer.push(option.value);
            }
        });
        for (let i = 0; i < list1.length; i++) {
            // console.log(list1[i]);
            if(list1[i].querySelector("input:checked")){
                const checkedValue=Number(list1[i].querySelector("input:checked").getAttribute("value"));
                if(answer.includes(checkedValue)){
                    list1[i].classList.add("hidden-correct");
                    correctAnswersCount++;
                }
                else{
                    list1[i].classList.add("hidden-wrong");
                }
            }
            // if(answer.includes(checkedValue)){
            //     list1[i].parentElement.classList.add("hidden-correct");
            //     correctAnswersCount++;
            // }
            // else{   
            //     list1[i].parentElement.classList.add("hidden");
            // }
        }
        questionNumber++;
    }



    score.textContent = `Total Score ${correctAnswersCount} / ${totalQuestions}`;
    formEle.appendChild(score);
    divEle.appendChild(formEle);
    bodyEle.appendChild(divEle);
});

