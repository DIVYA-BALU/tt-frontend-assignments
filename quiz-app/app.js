const questions = [
    {
        question: "Which of the following is an example of a sustainable practice?",
        type: 'dropdown',
        choices: [
            {
                option: "Implementing renewable energy sources in manufacturing processes",
                is_answer: true
            },
            {
                option: "Increasing single-use plastic production",
                is_answer: false
            },
            {
                option: "Expanding deforestation for agricultural purposes",
                is_answer: false
            },
            {
                option: "Maximizing fossil fuel consumption in transportation",
                is_answer: false
            }
        ]
    },
    {
        question: "Which energy practice is sustainable?",
        type: 'dropdown',
        choices: [
            {
                option: "Solar power",
                is_answer: true
            },
            {
                option: "Plastic production",
                is_answer: false
            },
            {
                option: "Deforestation",
                is_answer: false
            },
            {
                option: "Fuel consumption",
                is_answer: false
            }
        ]
    },
    {
        question: "What reduces waste?",
        type: 'dropdown',
        choices: [
            {
                option: "Recycling",
                is_answer: true
            },
            {
                option: "Paper",
                is_answer: false
            },
            {
                option: "Mining",
                is_answer: false
            },
            {
                option: "Digging",
                is_answer: false
            }
        ]
    },
    {
        question: "Which aids in water conservation?",
        type: 'dropdown',
        choices: [
            {
                option: "Drip irrigation",
                is_answer: true
            },
            {
                option: "Concrete production",
                is_answer: false
            },
            {
                option: "Wasteful usage",
                is_answer: false
            },
            {
                option: "Pipeline leaks",
                is_answer: false
            }
        ]
    },
    {
        question: "What promotes biodiversity?",
        type: 'dropdown',
        choices: [
            {
                option: "Reforestation",
                is_answer: true
            },
            {
                option: "Urbanization",
                is_answer: false
            },
            {
                option: "Monoculture",
                is_answer: false
            },
            {
                option: "Pesticides",
                is_answer: false
            }
        ]
    },
    {
        question: "Which limits air pollution?",
        type: 'dropdown',
        choices: [
            {
                option: "Public transit",
                is_answer: true
            },
            {
                option: "Traffic congestion",
                is_answer: false
            },
            {
                option: "Industrial emissions",
                is_answer: false
            },
            {
                option: "Fuel combustion",
                is_answer: false
            }
        ]
    },
    {
        question: "What conserves natural resources?",
        type: 'radio',
        choices: [
            {
                option: "Efficient appliances",
                is_answer: true
            },
            {
                option: "Landfill dumping",
                is_answer: false
            },
            {
                option: "Overconsumption",
                is_answer: false
            },
            {
                option: "Excessive packaging",
                is_answer: false
            }
        ]
    },
    {
        question: "Which supports sustainable agriculture?",
        type: 'radio',
        choices: [
            {
                option: "Crop rotation",
                is_answer: true
            },
            {
                option: "Soil degradation",
                is_answer: false
            },
            {
                option: "Chemical fertilizers",
                is_answer: false
            },
            {
                option: "Monsoon farming",
                is_answer: false
            }
        ]
    },
    {
        question: "What encourages energy efficiency?",
        type: 'radio',
        choices: [
            {
                option: "LED lighting",
                is_answer: true
            },
            {
                option: "Incandescent bulbs",
                is_answer: false
            },
            {
                option: "Power wastage",
                is_answer: false
            },
            {
                option: "Energy-intensive devices",
                is_answer: false
            }
        ]
    },
    {
        question: "Which minimizes waste?",
        type: 'radio',
        choices: [
            {
                option: "Composting",
                is_answer: true
            },
            {
                option: "Landfill expansion",
                is_answer: false
            },
            {
                option: "Dumping refuse",
                is_answer: false
            },
            {
                option: "Burning trash",
                is_answer: false
            }
        ]
    },
    {
        question: "What reduces carbon footprint?",
        type: 'radio',
        choices: [
            {
                option: "Public transport",
                is_answer: true
            },
            {
                option: "Individual car usage",
                is_answer: false
            },
            {
                option: "Road construction",
                is_answer: false
            },
            {
                option: "Traffic jams",
                is_answer: false
            }
        ]
    },
    {
        question: "Which practices contribute to waste reduction?",
        type: 'checkbox',
        choices: [
            {
                option: "Recycling",
                is_answer: true
            },
            {
                option: "Composting",
                is_answer: true
            },
            {
                option: "Landfill dumping",
                is_answer: false
            },
            {
                option: "Incinerating trash",
                is_answer: false
            }
        ]
    },
    {
        question: "What helps in energy conservation?",
        type: 'checkbox',
        choices: [
            {
                option: "Using LED bulbs",
                is_answer: true
            },
            {
                option: "Leaving lights on",
                is_answer: false
            },
            {
                option: "Turning off electronics",
                is_answer: true
            },
            {
                option: "Running appliances 24/7",
                is_answer: false
            }
        ]
    },
    {
        question: "Which actions support sustainable transportation?",
        type: 'checkbox',
        choices: [
            {
                option: "Carpooling",
                is_answer: true
            },
            {
                option: "Driving alone daily",
                is_answer: false
            },
            {
                option: "Using public transit",
                is_answer: true
            },
            {
                option: "Buying multiple cars",
                is_answer: false
            }
        ]
    },
    {
        question: "What contributes to water conservation?",
        type: 'checkbox',
        choices: [
            {
                option: "Fixing leaky faucets",
                is_answer: true
            },
            {
                option: "Leaving taps running",
                is_answer: false
            },
            {
                option: "Taking long showers",
                is_answer: false
            },
            {
                option: "Watering lawns excessively",
                is_answer: false
            }
        ]
    },
    {
        question: "Which practices help reduce air pollution?",
        type: 'checkbox',
        choices: [
            {
                option: "Using public transport",
                is_answer: true
            },
            {
                option: "Burning fossil fuels",
                is_answer: false
            },
            {
                option: "Limiting vehicle emissions",
                is_answer: true
            },
            {
                option: "Industrial emissions",
                is_answer: false
            }
        ]
    },
    {
        question: "What contributes to sustainable agriculture?",
        type: 'checkbox',
        choices: [
            {
                option: "Crop rotation",
                is_answer: true
            },
            {
                option: "Monoculture",
                is_answer: false
            },
            {
                option: "Excessive pesticide use",
                is_answer: false
            },
            {
                option: "Soil degradation",
                is_answer: false
            }
        ]
    },
    {
        question: "Which actions support biodiversity?",
        type: 'checkbox',
        choices: [
            {
                option: "Protecting natural habitats",
                is_answer: true
            },
            {
                option: "Deforestation",
                is_answer: false
            },
            {
                option: "Encouraging monoculture",
                is_answer: false
            },
            {
                option: "Introducing invasive species",
                is_answer: false
            }
        ]
    },
    {
        question: "What helps in reducing carbon emissions?",
        type: 'checkbox',
        choices: [
            {
                option: "Using renewable energy",
                is_answer: true
            },
            {
                option: "Increasing fossil fuel usage",
                is_answer: false
            },
            {
                option: "Promoting carpooling",
                is_answer: true
            },
            {
                option: "Neglecting energy-efficient practices",
                is_answer: false
            }
        ]
    },
    {
        question: "What is the capital of France?",
        type: 'text',
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        type: 'text',
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        type: 'text',
        answer: "Blue whale"
    },
    {
        question: "How many continents are there?",
        type: 'text',
        answer: "7"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        type: 'text',
        answer: "100"
    },
    {
        question: "What is the largest ocean on Earth?",
        type: 'text',
        answer: "Pacific Ocean"
    }
]

// Array to keep track of opened questions and user score
const openedQuestions = [];
let score = 0;
const answerLabelsRandomName = [];

// Function to generate a random string
function generateRandomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

    let resultRandomString = '';

    for (let i = 0; i < lenString; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        resultRandomString += characters.substring(randomNumber, randomNumber + 1);
    }

    return resultRandomString;
}

// Reference to the body element
const div1 = document.querySelector('body');
div1.className = "form-div";

// Function to render quiz questions
function questionsPage() {
    // Create a form element for the quiz
    const quizForm = document.createElement('form');
    quizForm.className = "quiz-form";
    quizForm.method = 'post';
    quizForm.action = 'javascript:void(0)';

    // Heading for the quiz
    const heading = document.createElement('h1');
    heading.textContent = "Today's Quiz";

    // Append elements to the body
    div1.appendChild(quizForm);
    quizForm.appendChild(heading);

    // Set the number of questions to display
    let n = 10;
    let i = 0;

    // Loop to generate and display questions
    while (i < n) {
        let random = Math.floor(Math.random() * questions.length);

        if (openedQuestions.includes(random))
            continue;

        openedQuestions.push(random);
        const questionDiv = document.createElement('div');
        questionDiv.className = "question-container";

        const qlabel = document.createElement('label');
        qlabel.className = "qlabel";
        qlabel.textContent = `${i + 1}. ${questions[random].question}`;

        questionDiv.appendChild(qlabel);

        const choiceDiv = document.createElement('div');

        // Check the type of question and generate corresponding input elements
        if (questions[random].type === 'text') {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `q${random + 1}`;
            input.className = 'text-box';
            questionDiv.appendChild(input);
        } else if (questions[random].type === 'dropdown') {
            const input = document.createElement('select');
            input.id = `q${random + 1}`;
            input.className = 'dropdown-box';

            questions[random].choices.forEach(choice => {
                const option = document.createElement('option');
                option.textContent = choice.option;
                input.appendChild(option);
            });

            const option = document.createElement('option');
            option.textContent = 'Select';
            option.disabled = true;
            option.selected = true;
            option.className = 'disabled-select';

            input.appendChild(option);
            questionDiv.appendChild(input);
        } else {
            questions[random].choices.forEach(choice => {
                const input = document.createElement('input');
                const randomName = generateRandomString(10);

                if (questions[random].type === 'radio')
                    input.type = 'radio';
                else if (questions[random].type === 'checkbox')
                    input.type = 'checkbox';

                input.value = choice.option;
                input.id = randomName;
                input.className = 'quiz-choice';
                input.name = `q${random + 1}`;

                if (input.type === 'radio')
                    input.required = true;

                const choiceLabel = document.createElement('label');
                choiceLabel.className = 'choice-label';
                choiceLabel.textContent = choice.option;
                choiceLabel.setAttribute('for', randomName);

                if (choice.is_answer)
                    answerLabelsRandomName.push(randomName);

                choiceDiv.appendChild(input);
                choiceDiv.appendChild(choiceLabel);
                choiceDiv.appendChild(document.createElement('br'));
            });
        }

        questionDiv.appendChild(choiceDiv);
        quizForm.appendChild(questionDiv);
        div1.appendChild(quizForm);

        i++;
    }

    // Create and append the submit button
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    quizForm.appendChild(submitButton);
    quizForm.addEventListener('submit', doValidation);
}

// Function to validate user answers
function doValidation(event) {
    event.preventDefault();

    // Highlight correct answer labels
    for (let m = 0; m < answerLabelsRandomName.length; m++) {
        const choiceLabel = document.querySelector(`label[for="${answerLabelsRandomName[m]}"]`);
        choiceLabel.classList.add('correct-answer');
    }

    // Check each question and update the score
    for (let i = 0; i < openedQuestions.length; i++) {
        // Check the type of question
        if (questions[openedQuestions[i]].type === 'text') {
            // Handle text input validation
            const input = document.querySelector(`#q${openedQuestions[i] + 1}`);
            if (input.value.toLowerCase() === questions[openedQuestions[i]].answer.toLowerCase()) {
                score++;
                input.classList.add('correct-answer');
            } else {
                input.classList.add('wrong-answer');
            }
        } else if (questions[openedQuestions[i]].type === 'dropdown') {
            // Handle dropdown validation
            const selectedOption = document.querySelector(`#q${openedQuestions[i] + 1}`).value;
            if (selectedOption !== 'Select' && questions[openedQuestions[i]].choices.find(choice => choice.option === selectedOption).is_answer) {
                score++;
            }
        } else {
            // Handle radio and checkbox validation
            const answer = questions[openedQuestions[i]].choices.filter(choice => choice.is_answer).map(choice => choice.option);
            const userSelectedAnswer = document.querySelectorAll(`input[name="q${openedQuestions[i] + 1}"]:checked`);

            if (userSelectedAnswer.length > 0) {
                const selectedValues = Array.from(userSelectedAnswer).map(checkbox => checkbox.value);
                const isCorrect = selectedValues.every(item => answer.includes(item));

                if (isCorrect) {
                    score++;
                } else {
                    // Highlight wrong answers for radio and checkbox questions
                    Array.from(userSelectedAnswer).forEach(checkbox => {
                        const labelId = checkbox.getAttribute('id');
                        const associatedLabel = document.querySelector(`label[for="${labelId}"]`);
                        if (!associatedLabel.classList.contains('correct-answer'))
                            associatedLabel.classList.add('wrong-answer');
                    });
                }
            }
        }
    }

    // Display the user's score
    const quizForm = document.querySelector('.quiz-form');
    const scoreCard = document.createElement('p');
    scoreCard.textContent = `You got ${score} / ${openedQuestions.length}`;
    quizForm.appendChild(scoreCard);

    // Remove the submit button
    const submitButton = document.querySelector('#submit-button');
    submitButton.remove();

    // Create a button to restart the quiz
    const reloadButton = document.createElement('button');
    reloadButton.type = 'reset';
    reloadButton.textContent = 'Restart';
    quizForm.appendChild(reloadButton);

    // Event listener to reload the page on quiz restart
    quizForm.addEventListener('reset', () => { window.location.reload() });
}


// Call the function to start the quiz
questionsPage();