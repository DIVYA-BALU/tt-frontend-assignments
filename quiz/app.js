
const questSize = 6;
function genrateNumber(num) {
    return Math.floor(Math.random() * num);
}
function disableButton(inputEl) {
    const parent = inputEl.parentElement.parentElement.childNodes;
    parent.forEach(element => {
        element.querySelector('input').disabled = true;
    })
}
function disableSelect(inputEl) {
    const parent = inputEl.parentElement.childNodes;
    parent.forEach(element => {
        element.disabled = true;
    })
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
const title = document.createElement('div');
title.innerText = "Tech quiz";
title.setAttribute('class', 'title');
const button = document.querySelector('.start-button');
const bodyEl = document.getElementById('body');

button.addEventListener('click', () => {
    start();
    button.setAttribute('class', 'hidden-block');
})

function start() {
    bodyEl.appendChild(title);
    const divEl = document.createElement('div');
    const formEl = document.createElement('form');
    const buttonEl = document.createElement('button');
    buttonEl.type = 'submit';
    buttonEl.innerText = 'Submit';
    buttonEl.setAttribute('class', 'button')
    divEl.setAttribute('class', 'divEL');

    let totaltime = setTimeout(() => {
        clearInterval(time);
        formSubmit();
        timer.innerText = `Times Up!`;
    }, questSize * 5000);

    let sec = questSize * 5;
    let secs = `${sec}s`;

    let time = setInterval(() => {
        sec--;

        if (sec < 10) {
            secs = `0${sec}`;
        }
        else {
            secs = `${sec}`;
        }

        timer.innerText = `Time Left :${secs}s`;
    }, 1000);

    const inputs = [
        // {
        //     "type": "radio",
        //     "question": 'Who is known as the "Father of the Nation" in India?',
        //     "options": [
        //         { "value": 1, "label": "Mahatma Gandhi" },
        //         { "value": 2, "label": "Jawaharlal Nehru" },
        //         { "value": 3, "label": "Subhas Chandra Bose" },
        //         { "value": 4, "label": "Sardar Patel" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the capital city of France?',
        //     "options": [
        //         { "value": 1, "label": "Berlin" },
        //         { "value": 2, "label": "Madrid" },
        //         { "value": 3, "label": "Paris" },
        //         { "value": 4, "label": "Rome" }
        //     ],
        //     "correctans": '3'
        // },
        // {
        //     "type": "radio",
        //     "question": 'In which year did World War II end?',
        //     "options": [
        //         { "value": 1, "label": "1945" },
        //         { "value": 2, "label": "1939" },
        //         { "value": 3, "label": "1942" },
        //         { "value": 4, "label": "1950" }
        //     ],
        //     "correctans": '1'
        // },
        {
            "type": "radio",
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
            "type": "radio",
            "question": 'What is the largest mammal in the world?',
            "options": [
                { "value": 1, "label": "Elephant" },
                { "value": 2, "label": "Blue Whale" },
                { "value": 3, "label": "Giraffe" },
                { "value": 4, "label": "Hippopotamus" }
            ],
            "correctans": '2'
        },
        // {
        //     "type": "radio",
        //     "question": 'Which planet is known as the "Red Planet"?',
        //     "options": [
        //         { "value": 1, "label": "Mars" },
        //         { "value": 2, "label": "Venus" },
        //         { "value": 3, "label": "Jupiter" },
        //         { "value": 4, "label": "Mercury" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who painted the famous artwork "Starry Night"?',
        //     "options": [
        //         { "value": 1, "label": "Vincent van Gogh" },
        //         { "value": 2, "label": "Pablo Picasso" },
        //         { "value": 3, "label": "Leonardo da Vinci" },
        //         { "value": 4, "label": "Michelangelo" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the currency of Japan?',
        //     "options": [
        //         { "value": 1, "label": "Yen" },
        //         { "value": 2, "label": "Won" },
        //         { "value": 3, "label": "Dollar" },
        //         { "value": 4, "label": "Euro" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Which scientist formulated the theory of relativity?',
        //     "options": [
        //         { "value": 1, "label": "Isaac Newton" },
        //         { "value": 2, "label": "Albert Einstein" },
        //         { "value": 3, "label": "Stephen Hawking" },
        //         { "value": 4, "label": "Galileo Galilei" }
        //     ],
        //     "correctans": '2'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the national flower of India?',
        //     "options": [
        //         { "value": 1, "label": "Rose" },
        //         { "value": 2, "label": "Lotus" },
        //         { "value": 3, "label": "Tulip" },
        //         { "value": 4, "label": "Sunflower" }
        //     ],
        //     "correctans": '2'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who wrote "The Catcher in the Rye"?',
        //     "options": [
        //         { "value": 1, "label": "J.D. Salinger" },
        //         { "value": 2, "label": "George Orwell" },
        //         { "value": 3, "label": "Mark Twain" },
        //         { "value": 4, "label": "Herman Melville" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'In which year did the first manned moon landing occur?',
        //     "options": [
        //         { "value": 1, "label": "1969" },
        //         { "value": 2, "label": "1972" },
        //         { "value": 3, "label": "1957" },
        //         { "value": 4, "label": "1985" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who is the author of "Pride and Prejudice"?',
        //     "options": [
        //         { "value": 1, "label": "Jane Austen" },
        //         { "value": 2, "label": "Emily Brontë" },
        //         { "value": 3, "label": "Charlotte Brontë" },
        //         { "value": 4, "label": "Charles Dickens" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the largest ocean on Earth?',
        //     "options": [
        //         { "value": 1, "label": "Pacific Ocean" },
        //         { "value": 2, "label": "Atlantic Ocean" },
        //         { "value": 3, "label": "Indian Ocean" },
        //         { "value": 4, "label": "Arctic Ocean" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who is the author of "The Catcher in the Rye"?',
        //     "options": [
        //         { "value": 1, "label": "J.D. Salinger" },
        //         { "value": 2, "label": "F. Scott Fitzgerald" },
        //         { "value": 3, "label": "Ernest Hemingway" },
        //         { "value": 4, "label": "Mark Twain" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the currency of China?',
        //     "options": [
        //         { "value": 1, "label": "Yuan" },
        //         { "value": 2, "label": "Yen" },
        //         { "value": 3, "label": "Rupee" },
        //         { "value": 4, "label": "Dollar" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who is known as the "Iron Lady"?',
        //     "options": [
        //         { "value": 1, "label": "Margaret Thatcher" },
        //         { "value": 2, "label": "Angela Merkel" },
        //         { "value": 3, "label": "Hillary Clinton" },
        //         { "value": 4, "label": "Indira Gandhi" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the smallest prime number?',
        //     "options": [
        //         { "value": 1, "label": "2" },
        //         { "value": 2, "label": "3" },
        //         { "value": 3, "label": "1" },
        //         { "value": 4, "label": "5" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who discovered penicillin?',
        //     "options": [
        //         { "value": 1, "label": "Alexander Fleming" },
        //         { "value": 2, "label": "Marie Curie" },
        //         { "value": 3, "label": "Louis Pasteur" },
        //         { "value": 4, "label": "Joseph Lister" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "input",
        //     "question": 'In which year India got independence?',
        //     "options": [{ "value": 1, "label": "Type here" }],
        //     "correctans": '1947'
        // },
        // {
        //     "type": "radio",
        //     "question": 'What is the capital city of Brazil?',
        //     "options": [
        //         { "value": 1, "label": "Rio de Janeiro" },
        //         { "value": 2, "label": "Brasília" },
        //         { "value": 3, "label": "Sao Paulo" },
        //         { "value": 4, "label": "Buenos Aires" }
        //     ],
        //     "correctans": '2'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Who wrote "The Adventures of Sherlock Holmes"?',
        //     "options": [
        //         { "value": 1, "label": "Arthur Conan Doyle" },
        //         { "value": 2, "label": "Agatha Christie" },
        //         { "value": 3, "label": "Daphne du Maurier" },
        //         { "value": 4, "label": "J.K. Rowling" }
        //     ],
        //     "correctans": '1'
        // },
        // {
        //     "type": "radio",
        //     "question": 'Which planet is known as the "Blue Planet"?',
        //     "options": [
        //         { "value": 1, "label": "Earth" },
        //         { "value": 2, "label": "Mars" },
        //         { "value": 3, "label": "Venus" },
        //         { "value": 4, "label": "Neptune" }
        //     ],
        //     "correctans": '1'
        // },
        {
            "type": "radio",
            "question": 'In which year did the Titanic sink?',
            "options": [
                { "value": 1, "label": "1912" },
                { "value": 2, "label": "1905" },
                { "value": 3, "label": "1920" },
                { "value": 4, "label": "1915" }
            ],
            "correctans": '1'
        },
        {
            "type": "input",
            "question": 'Which tag is used to break line in html?',
            "options": [{ "value": 1, "label": "Type here" }],
            "correctans": 'br'
        },
        {
            "type": "input",
            "question": 'Which year India got Independence?',
            "options": [{ "value": 1, "label": "Type here" }],
            "correctans": '1947'
        },
        {
            "question": "Which country has 2nd largest population?",
            "type": "select",
            "multiple": false,
            "options": [
                {
                    value: "0",
                    label: "Select Country"
                },
                {
                    value: 1,
                    label: "India"
                },
                {
                    value: 2,
                    label: "USA"
                },
                {
                    value: 3,
                    label: "China"
                },
                {
                    value: 4,
                    label: "Pakistan"
                }
            ],
            "correctans": ['1']
        },
        {
            "question": "Select nearest countries to india ?",
            "type": "select",
            "multiple": true,
            "options": [
                {
                    value: 1,
                    label: "Africa"
                },
                {
                    value: 2,
                    label: "USA"
                },
                {
                    value: 3,
                    label: "China"
                },
                {
                    value: 4,
                    label: "Pakistan"
                }
            ],
            "correctans": ['3', '4']
        },
        {
            "question": "Select similar methods among given?",
            "type": "checkbox",
            "options": [
                {
                    value: 1,
                    label: "substring()"
                },
                {
                    value: 2,
                    label: "substr()"
                },
                {
                    value: 3,
                    label: "slice()"
                },
                {
                    value: 4,
                    label: "concat()"
                }
            ],
            "correctans": ['1', '2', '3']
        }
    ]

    const numbers = [];
    for (let i = 0; i < questSize; i++) {

        let value = genrateNumber(inputs.length);
        while (numbers.includes(value)) {
            value = genrateNumber(inputs.length);
        }
        numbers.push(value);
    }

    for (let i = 0; i < questSize; i++) {

        const p = document.createElement('p');
        const currEl = inputs[numbers[i]];
        const no = i + 1;
        p.innerText = `Q${no}:${currEl.question}`;
        p.setAttribute('class', `Q${no}`);
        p.setAttribute('type', currEl.type);

        const timeBox = document.createElement('div');
        timeBox.setAttribute('id', `timerQ${no}`);
        timeBox.setAttribute('class', 'timeBox');
        p.append(timeBox);
        formEl.appendChild(p);

        const optionHolder = document.createElement('div');
        optionHolder.setAttribute('id', `Q${no}holder`);

        const selector = document.createElement('select');
        if (currEl.multiple === true)
            selector.multiple = "multiple";
        let flag = 0;
        for (let j = 0; j < currEl.options.length; j++) {

            const optionBox = document.createElement('div');
            let string = randomString(30);

            // inputEl.setAttribute('required', '');

            if (currEl.type === 'radio' || currEl.type === 'checkbox') {

                const inputEl = document.createElement('input');
                inputEl.id = string;
                inputEl.name = `Q${no}`;
                inputEl.type = currEl.type;
                inputEl.value = currEl.options[j].value;
                optionBox.setAttribute('class', 'option-box');
                const labelEl = document.createElement('label');
                labelEl.setAttribute('for', string);
                labelEl.innerText = currEl.options[j].label;
                optionBox.setAttribute('id', `Q${no}${currEl.options[j].value}`);
                optionBox.appendChild(inputEl);
                optionBox.appendChild(labelEl);
                const breakEl = document.createElement('br');
                optionBox.appendChild(breakEl);
                optionHolder.appendChild(optionBox);
                optionBox.addEventListener('click', () => {
                    if (!inputEl.disabled) {
                        inputEl.checked = true;
                        if (flag === 0) {
                            flag = 1;
                            let sec = 5;
                            let remTime = setInterval(() => {
                                const time = document.querySelector(`#timerQ${no}`);
                                if (time != null)
                                    time.innerText = `Time left: ${sec}`;
                                sec--;
                                if (sec < 0) {
                                    inputEl.disabled = true;
                                    if (time != null)
                                        time.innerText = `Times Up!`;
                                    disableButton(inputEl);
                                    clearInterval(remTime);
                                }
                            }, 1000);
                        }
                    }

                })
            }

            else if (currEl.type === 'input') {
                const inputEl = document.createElement('input');
                inputEl.id = string;
                inputEl.name = `Q${no}`;
                inputEl.type = 'text';
                inputEl.className = 'option-box';
                inputEl.placeholder = "type here";
                optionBox.appendChild(inputEl);
                optionBox.setAttribute('id', `Q${no}`);
                const breakEl = document.createElement('br');
                optionBox.appendChild(breakEl);
                optionHolder.appendChild(optionBox);
            }
            else if (currEl.type === 'select') {
                const optionEl = document.createElement("option");
                optionEl.value = currEl.options[j].value;
                optionEl.setAttribute("name", `Q${no}`);
                optionEl.setAttribute('class', 'option-box');
                optionEl.textContent = currEl.options[j].label;
                optionEl.setAttribute('id', `Q${no}${currEl.options[j].value}`);
                selector.appendChild(optionEl);
                selector.addEventListener('change', () => {
                    console.log("clicked");
                    if (!optionEl.disabled) {
                        optionEl.checked = true;
                        if (flag === 0) {
                            flag = 1;
                            let sec = 5;
                            const time = document.querySelector(`#timerQ${no}`);
                            let remTime = setInterval(() => {
                                if (time != null)
                                    time.innerText = `Time left: ${sec}`;
                                sec--;
                                if (sec < 0) {
                                    optionEl.disabled = true;
                                    if (time != null)
                                        time.innerText = `Times Up!`;
                                    disableSelect(optionEl);
                                    clearInterval(remTime);
                                }
                            }, 1000);
                        }
                    }

                })
            }

        }

        if (currEl.type === 'select') {
            selector.setAttribute('class', `selector`);
            optionHolder.appendChild(selector);
        }

        if (currEl.type === 'radio' || currEl.type === 'checkbox')
            optionHolder.setAttribute('class', 'option-holder');
        formEl.appendChild(optionHolder);
    }

    const breakEl = document.createElement('br');
    const result = document.createElement('div');
    const divEl2 = document.createElement('div');
    const timer = document.createElement('div');
    timer.innerText = `Time Left :${secs}`;
    divEl2.setAttribute('class', 'form2');
    timer.setAttribute('class', 'timer');
    divEl2.innerHTML = `Welcome to Genral Knowledge Quiz<br>Instructions:<br> Total ${questSize} question will be given.<br> User must attempt all ${questSize} questions. <br> Score will be displayed below.`;
    result.setAttribute('class', 'hidden-block');
    formEl.appendChild(breakEl);
    formEl.appendChild(buttonEl);
    divEl2.appendChild(result);
    divEl2.appendChild(timer);
    divEl.appendChild(formEl);
    divEl.appendChild(divEl2);
    bodyEl.appendChild(divEl);

    let correctAnscount;
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        formSubmit();
    })

    function formSubmit(params) {
        clearInterval(time);
        clearInterval(totaltime);
        correctAnscount = 0;
        for (let i = 1; i <= questSize; i++) {
            const curr = inputs[numbers[i - 1]];
            const questType = curr.type;

            if (questType === "radio") {
                const selectedElement = document.querySelector(`input[name="Q${i}"]:checked`);
                if (selectedElement != null) {
                    if (curr.correctans === selectedElement.value)
                        correctAnscount++;
                    else
                        selectedElement.parentNode.className = "show-block-wrong";
                }
            }
            else if (questType === "checkbox" || questType === "select") {

                const selectedElement = (questType === "checkbox") ? document.querySelectorAll(`input[name="Q${i}"]:checked`) : document.querySelectorAll(`[name="Q${i}"]:checked`);
                if (selectedElement.length !== 0) {
                    let ans = 0;
                    for (j of selectedElement) {
                        if (curr.correctans.includes(j.value))
                            ans++;
                        else
                            questType === "checkbox" ? j.parentNode.className = "show-block-wrong" : j.className = "show-block-wrong";
                    }
                    if (ans === selectedElement.length)
                        correctAnscount++;
                }
            }
            else if (questType === "input") {
                const selectedElement = document.querySelector(`input[name="Q${i}"]`);
                if (selectedElement !== null) {
                    if (curr.correctans === selectedElement.value) {
                        selectedElement.className = "show-block-correct"
                        correctAnscount++;
                    }
                    else
                        selectedElement.className = "show-block-wrong";
                }
            }

            //show correct option
            const timeBox = document.querySelector(`#timerQ${i}`);
            timeBox.remove();
            const ans = curr.correctans;
            const type = curr.type;
            if (type !== 'input') {
                for (let j = 0; j < ans.length; j++) {
                    const ele = document.querySelector(`[id=Q${i}${ans[j]}]`);
                    ele.className = 'show-block-correct';
                    if (type != "radio" && type != "checkbox")
                        disableSelect(ele);
                    else {
                        const parent = ele.parentElement.childNodes;
                        parent.forEach(element => {
                            element.disabled = true;
                        });

                    }

                }

            }

        }

        // console.log("corCount:" + correctAnscount);
        result.innerHTML = "Total no of Wrong Answers: " + (questSize - correctAnscount) + "<br>" + " Total no of Correct Answers: " + correctAnscount + " <br>Total Score: " + Math.round((correctAnscount / questSize) * 100) + "%";
        result.className = "result";
    }
}




