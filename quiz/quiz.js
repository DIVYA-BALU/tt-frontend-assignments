function genrateNumber(num) {
    return Math.floor(Math.random() * num);
}

function randomString(lenString) {
    lenString = lenString === undefined ? 7 : lenString;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let res = "";
    for (var i = 0; i < lenString; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        res += characters.substring(rnum, rnum + 1);
    }
    return res;
}

const bodyEl = document.getElementById('body');
const divEl = document.createElement('div');
const formEl = document.createElement('form');
const buttonEl = document.createElement('button');
buttonEl.type = 'submit';
buttonEl.innerText = 'Submit';
buttonEl.setAttribute('class', 'button')
divEl.setAttribute('class', 'divEL');
const inputs = [
    {
        "question": 'Who is known as the "Father of the Nation" in India?',
        "options": [
            { "value": 1, "label": "Mahatma Gandhi" },
            { "value": 2, "label": "Jawaharlal Nehru" },
            { "value": 3, "label": "Subhas Chandra Bose" },
            { "value": 4, "label": "Sardar Patel" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the capital city of France?',
        "options": [
            { "value": 1, "label": "Berlin" },
            { "value": 2, "label": "Madrid" },
            { "value": 3, "label": "Paris" },
            { "value": 4, "label": "Rome" }
        ],
        "correctans": '3'
    },
    {
        "question": 'In which year did World War II end?',
        "options": [
            { "value": 1, "label": "1945" },
            { "value": 2, "label": "1939" },
            { "value": 3, "label": "1942" },
            { "value": 4, "label": "1950" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Who wrote "The Great Gatsby"?',
        "options": [
            { "value": 1, "label": "F. Scott Fitzgerald" },
            { "value": 2, "label": "Ernest Hemingway" },
            { "value": 3, "label": "Jane Austen" },
            { "value": 4, "label": "Charles Dickens" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the largest mammal in the world?',
        "options": [
            { "value": 1, "label": "Elephant" },
            { "value": 2, "label": "Blue Whale" },
            { "value": 3, "label": "Giraffe" },
            { "value": 4, "label": "Hippopotamus" }
        ],
        "correctans": '2'
    },
    {
        "question": 'Which planet is known as the "Red Planet"?',
        "options": [
            { "value": 1, "label": "Mars" },
            { "value": 2, "label": "Venus" },
            { "value": 3, "label": "Jupiter" },
            { "value": 4, "label": "Mercury" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Who painted the famous artwork "Starry Night"?',
        "options": [
            { "value": 1, "label": "Vincent van Gogh" },
            { "value": 2, "label": "Pablo Picasso" },
            { "value": 3, "label": "Leonardo da Vinci" },
            { "value": 4, "label": "Michelangelo" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the currency of Japan?',
        "options": [
            { "value": 1, "label": "Yen" },
            { "value": 2, "label": "Won" },
            { "value": 3, "label": "Dollar" },
            { "value": 4, "label": "Euro" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Which scientist formulated the theory of relativity?',
        "options": [
            { "value": 1, "label": "Isaac Newton" },
            { "value": 2, "label": "Albert Einstein" },
            { "value": 3, "label": "Stephen Hawking" },
            { "value": 4, "label": "Galileo Galilei" }
        ],
        "correctans": '2'
    },
    {
        "question": 'What is the national flower of India?',
        "options": [
            { "value": 1, "label": "Rose" },
            { "value": 2, "label": "Lotus" },
            { "value": 3, "label": "Tulip" },
            { "value": 4, "label": "Sunflower" }
        ],
        "correctans": '2'
    },
    {
        "question": 'Who wrote "The Catcher in the Rye"?',
        "options": [
            { "value": 1, "label": "J.D. Salinger" },
            { "value": 2, "label": "George Orwell" },
            { "value": 3, "label": "Mark Twain" },
            { "value": 4, "label": "Herman Melville" }
        ],
        "correctans": '1'
    },
    {
        "question": 'In which year did the first manned moon landing occur?',
        "options": [
            { "value": 1, "label": "1969" },
            { "value": 2, "label": "1972" },
            { "value": 3, "label": "1957" },
            { "value": 4, "label": "1985" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Who is the author of "Pride and Prejudice"?',
        "options": [
            { "value": 1, "label": "Jane Austen" },
            { "value": 2, "label": "Emily Brontë" },
            { "value": 3, "label": "Charlotte Brontë" },
            { "value": 4, "label": "Charles Dickens" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the largest ocean on Earth?',
        "options": [
            { "value": 1, "label": "Pacific Ocean" },
            { "value": 2, "label": "Atlantic Ocean" },
            { "value": 3, "label": "Indian Ocean" },
            { "value": 4, "label": "Arctic Ocean" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Who is the author of "The Catcher in the Rye"?',
        "options": [
            { "value": 1, "label": "J.D. Salinger" },
            { "value": 2, "label": "F. Scott Fitzgerald" },
            { "value": 3, "label": "Ernest Hemingway" },
            { "value": 4, "label": "Mark Twain" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the currency of China?',
        "options": [
            { "value": 1, "label": "Yuan" },
            { "value": 2, "label": "Yen" },
            { "value": 3, "label": "Rupee" },
            { "value": 4, "label": "Dollar" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Who is known as the "Iron Lady"?',
        "options": [
            { "value": 1, "label": "Margaret Thatcher" },
            { "value": 2, "label": "Angela Merkel" },
            { "value": 3, "label": "Hillary Clinton" },
            { "value": 4, "label": "Indira Gandhi" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the smallest prime number?',
        "options": [
            { "value": 1, "label": "2" },
            { "value": 2, "label": "3" },
            { "value": 3, "label": "1" },
            { "value": 4, "label": "5" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Who discovered penicillin?',
        "options": [
            { "value": 1, "label": "Alexander Fleming" },
            { "value": 2, "label": "Marie Curie" },
            { "value": 3, "label": "Louis Pasteur" },
            { "value": 4, "label": "Joseph Lister" }
        ],
        "correctans": '1'
    },
    {
        "question": 'What is the capital city of Brazil?',
        "options": [
            { "value": 1, "label": "Rio de Janeiro" },
            { "value": 2, "label": "Brasília" },
            { "value": 3, "label": "Sao Paulo" },
            { "value": 4, "label": "Buenos Aires" }
        ],
        "correctans": '2'
    },
    {
        "question": 'Who wrote "The Adventures of Sherlock Holmes"?',
        "options": [
            { "value": 1, "label": "Arthur Conan Doyle" },
            { "value": 2, "label": "Agatha Christie" },
            { "value": 3, "label": "Daphne du Maurier" },
            { "value": 4, "label": "J.K. Rowling" }
        ],
        "correctans": '1'
    },
    {
        "question": 'Which planet is known as the "Blue Planet"?',
        "options": [
            { "value": 1, "label": "Earth" },
            { "value": 2, "label": "Mars" },
            { "value": 3, "label": "Venus" },
            { "value": 4, "label": "Neptune" }
        ],
        "correctans": '1'
    },
    {
        "question": 'In which year did the Titanic sink?',
        "options": [
            { "value": 1, "label": "1912" },
            { "value": 2, "label": "1905" },
            { "value": 3, "label": "1920" },
            { "value": 4, "label": "1915" }
        ],
        "correctans": '1'
    }
]

const numbers = [];
const questCount = 10;
for (let i = 0; i < questCount; i++) {
    let value = genrateNumber(inputs.length);
    while (numbers.includes(value)) {
        value = genrateNumber(inputs.length);
    }
    numbers.push(value);
}
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    const p = document.createElement('p');
    const currEl = inputs[numbers[i]];
    const no = i + 1;
    p.innerText = `Q${no}:${currEl.question}`;
    formEl.appendChild(p);
    for (let j = 0; j < currEl.options.length; j++) {
        const optionBox = document.createElement('div');
        optionBox.setAttribute('class', 'option-box');
        const inputEl = document.createElement('input');
        let string = randomString(30);
        inputEl.type = 'radio';
        inputEl.id = string;
        inputEl.name = `Q${no}`;
        inputEl.value = currEl.options[j].value;

        inputEl.setAttribute('required', '');

        const labelEl = document.createElement('label');
        const flabelEl = document.createElement('label');
        labelEl.setAttribute('for', string);
        flabelEl.setAttribute('for', string);
        flabelEl.innerText = currEl.options[j].value + '.';
        labelEl.innerText = currEl.options[j].label;
        const breakEl = document.createElement('br');
        optionBox.addEventListener('click', () => {
            inputEl.checked = true;
        })
        optionBox.setAttribute('ans', currEl.correctans);
        optionBox.setAttribute('id', `Q${no}${currEl.options[j].value}`);
        optionBox.appendChild(inputEl);
        optionBox.appendChild(flabelEl);
        optionBox.appendChild(labelEl);
        optionBox.appendChild(breakEl);
        formEl.appendChild(optionBox)
    }
}

let CorrectAnswerCount = 0;
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(formEl);
    formData.forEach(function (value, key) {
        const optionEl = document.getElementById(key + value);
        const correctAnswer = optionEl.getAttribute("ans");
        if (correctAnswer === value) {
            CorrectAnswerCount++;
            optionEl.className = "show-block-correct";
        }
        else {
            optionEl.className = "show-block-wrong";
            const correctEl = document.getElementById(key + correctAnswer);
            correctEl.className = "show-block-correct";
        }
    });
    console.log("corCount:" + CorrectAnswerCount);
    result.innerHTML = "Total no of Wrong Answers: " + (10 - CorrectAnswerCount) + "<br>" + " Total no of Correct Answers: " + CorrectAnswerCount + " <br>Total Score: " + Math.round((CorrectAnswerCount / 10) * 100) + "%";
    result.className = "result";
})
const breakEl = document.createElement('br');
const result = document.createElement('div');
const divEl2 = document.createElement('div');

divEl2.setAttribute('class', 'form2');
divEl2.innerHTML = "Welcome to Genral Knowledge Quiz<br><br>Instructions:<br> Total 10 question will be given.<br> User must attempt all 10 questions. <br> Score will be displayed below.";
result.setAttribute('class', 'hidden-block');
formEl.appendChild(breakEl);
formEl.appendChild(buttonEl);
divEl2.appendChild(result);
divEl.appendChild(formEl);
divEl.appendChild(divEl2);
bodyEl.appendChild(divEl);
