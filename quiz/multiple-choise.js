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

function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function createRadioButtonOrCheckBox(type, name, value, id) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.name = name;
  inputEl.value = value;
  inputEl.id = id;
  if (type === "radio") {
    inputEl.setAttribute("required", "");
  }
  return inputEl;
}

function createLabel(name, label) {
  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", name);
  labelEl.innerText = label;
  return labelEl;
}

function disableRadioButton(inputEl) {
  const radioButtons = document.getElementsByName(inputEl.name);
  for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].disabled = true;
    console.log(radioButtons[index]);
  }
}

function enableRadioButton(inputEl) {
  const radioButtons = document.getElementsByName(inputEl.name);
  for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].disabled = false;
    radioButtons[index].checked = false;
  }
}

function createParagraph(className, content) {
  const pEl = document.createElement("p");
  pEl.className = className;
  pEl.innerText = content;
  return pEl;
}

function createImage(src, altText) {
  const imgEl = document.createElement("img");
  imgEl.src = src;
  imgEl.alt = altText;
  return imgEl;
}

function createTextFeild(placeholder, name) {
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.name = name;
  inputEl.placeholder = placeholder;
  return inputEl;
}

function createButton(type, text){
  const buttonEl = document.createElement("button");
  buttonEl.type = type;
  buttonEl.innerText = text;
  return buttonEl
}

function createInformationElement() {
  const divInfo = document.createElement("div");
  divInfo.className = "info";

  const welcomeEl = createParagraph(
    "welcome",
    "Welcome To The General Knowledge Quiz"
  );
  const informationEl = createParagraph(
    "quiz-information",
    "In this quiz there is 10 general knowledge question. You have to answer each question without completing every question you can not submit the test"
  );
  const imgEl = createImage("welcome.gif", "Image not loaded");

  divInfo.appendChild(welcomeEl);
  divInfo.appendChild(informationEl);
  divInfo.appendChild(imgEl);

  return divInfo;
}

function timerDiv(time, id){
  const timeEl = document.createElement("div");
  timeEl.id = id;
  timeEl.className = "hide";
  const contextEl = document.createElement("h4");
  contextEl.innerText = `time left to change answer ${time} sec`;
  const buttonEl = document.createElement("div");
  buttonEl.innerText = "Edit"
  buttonEl.className = "edit-button";
  timeEl.appendChild(contextEl);
  timeEl.appendChild(buttonEl);
  return timeEl;
}


const contents = [
  {
    question: "What is the capital of France?",
    type: "text",
    correct_option: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    type: "text",
    correct_option: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { value: 1, label: "Vincent van Gogh" },
      { value: 2, label: "Leonardo da Vinci" },
      { value: 3, label: "Pablo Picasso" },
      { value: 4, label: "Michelangelo" },
    ],
    type: "radio",
    correct_option: 2,
  },
  {
    question: "Which is the longest river in the world?",
    options: [
      { value: 1, label: "Nile" },
      { value: 2, label: "Amazon" },
      { value: 3, label: "Yangtze" },
      { value: 4, label: "Mississippi" },
    ],
    type: "radio",
    correct_option: 1,
  },
  {
    question: "In which year did World War I begin?",
    options: [
      { value: 1, label: "1914" },
      { value: 2, label: "1918" },
      { value: 3, label: "1939" },
      { value: 4, label: "1945" },
    ],
    type: "checkbox",
    correct_option: [1,2],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { value: 1, label: "William Shakespeare" },
      { value: 2, label: "Jane Austen" },
      { value: 3, label: "Charles Dickens" },
      { value: 4, label: "Mark Twain" },
    ],
    type: "checkbox",
    correct_option: [1],
  },
  // {
  //   question: "What is the chemical symbol for gold?",
  //   options: [
  //     { value: 1, label: "Au" },
  //     { value: 2, label: "Ag" },
  //     { value: 3, label: "Fe" },
  //     { value: 4, label: "Pt" },
  //   ],
  //   type: "radio",
  //   correct_option: 1,
  // },
  // {
  //   question: "Which famous scientist developed the theory of relativity?",
  //   options: [
  //     { value: 1, label: "Isaac Newton" },
  //     { value: 2, label: "Albert Einstein" },
  //     { value: 3, label: "Stephen Hawking" },
  //     { value: 4, label: "Galileo Galilei" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "What is the largest mammal in the world?",
  //   options: [
  //     { value: 1, label: "African Elephant" },
  //     { value: 2, label: "Blue Whale" },
  //     { value: 3, label: "Giraffe" },
  //     { value: 4, label: "Hippopotamus" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "Who is known as the 'Father of the Computer'?",
  //   options: [
  //     { value: 1, label: "Charles Babbage" },
  //     { value: 2, label: "Alan Turing" },
  //     { value: 3, label: "Bill Gates" },
  //     { value: 4, label: "Steve Jobs" },
  //   ],
  //   type: "radio",
  //   correct_option: 1,
  // },
  // {
  //   question: "Which country is famous for producing maple syrup?",
  //   options: [
  //     { value: 1, label: "United States" },
  //     { value: 2, label: "France" },
  //     { value: 3, label: "Canada" },
  //     { value: 4, label: "Australia" },
  //   ],
  //   type: "radio",
  //   correct_option: 3,
  // },
  // {
  //   question: "What is the smallest planet in our solar system?",
  //   options: [
  //     { value: 1, label: "Mars" },
  //     { value: 2, label: "Mercury" },
  //     { value: 3, label: "Venus" },
  //     { value: 4, label: "Earth" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "Who painted the famous artwork 'Starry Night'?",
  //   options: [
  //     { value: 1, label: "Pablo Picasso" },
  //     { value: 2, label: "Vincent van Gogh" },
  //     { value: 3, label: "Leonardo da Vinci" },
  //     { value: 4, label: "Claude Monet" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "Which country is the largest by land area?",
  //   options: [
  //     { value: 1, label: "Russia" },
  //     { value: 2, label: "Canada" },
  //     { value: 3, label: "China" },
  //     { value: 4, label: "United States" },
  //   ],
  //   type: "radio",
  //   correct_option: 1,
  // },
  // {
  //   question: "What is the largest organ in the human body?",
  //   options: [
  //     { value: 1, label: "Heart" },
  //     { value: 2, label: "Liver" },
  //     { value: 3, label: "Skin" },
  //     { value: 4, label: "Lungs" },
  //   ],
  //   type: "radio",
  //   correct_option: 3,
  // },
  // {
  //   question: "Which is the tallest mountain in the world?",
  //   options: [
  //     { value: 1, label: "Mount Kilimanjaro" },
  //     { value: 2, label: "Mount Everest" },
  //     { value: 3, label: "K2" },
  //     { value: 4, label: "Mount McKinley" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "Who wrote the novel '1984'?",
  //   options: [
  //     { value: 1, label: "Aldous Huxley" },
  //     { value: 2, label: "George Orwell" },
  //     { value: 3, label: "J.R.R. Tolkien" },
  //     { value: 4, label: "Ray Bradbury" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "Which gas is most abundant in Earth's atmosphere?",
  //   options: [
  //     { value: 1, label: "Carbon Dioxide" },
  //     { value: 2, label: "Nitrogen" },
  //     { value: 3, label: "Oxygen" },
  //     { value: 4, label: "Methane" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "What is the capital of Japan?",
  //   options: [
  //     { value: 1, label: "Seoul" },
  //     { value: 2, label: "Shanghai" },
  //     { value: 3, label: "Tokyo" },
  //     { value: 4, label: "Beijing" },
  //   ],
  //   type: "radio",
  //   correct_option: 3,
  // },
  // {
  //   question: "Who discovered penicillin?",
  //   options: [
  //     { value: 1, label: "Alexander Fleming" },
  //     { value: 2, label: "Marie Curie" },
  //     { value: 3, label: "Louis Pasteur" },
  //     { value: 4, label: "Robert Koch" },
  //   ],
  //   type: "radio",
  //   correct_option: 1,
  // },
  // {
  //   question: "What is the largest ocean in the world?",
  //   options: [
  //     { value: 1, label: "Indian Ocean" },
  //     { value: 2, label: "Atlantic Ocean" },
  //     { value: 3, label: "Arctic Ocean" },
  //     { value: 4, label: "Pacific Ocean" },
  //   ],
  //   type: "radio",
  //   correct_option: 4,
  // },
  // {
  //   question: "Which planet is closest to the Sun?",
  //   options: [
  //     { value: 1, label: "Mars" },
  //     { value: 2, label: "Earth" },
  //     { value: 3, label: "Venus" },
  //     { value: 4, label: "Mercury" },
  //   ],
  //   type: "radio",
  //   correct_option: 4,
  // },
  // {
  //   question: "Who is the author of 'To Kill a Mockingbird'?",
  //   options: [
  //     { value: 1, label: "John Steinbeck" },
  //     { value: 2, label: "Harper Lee" },
  //     { value: 3, label: "F. Scott Fitzgerald" },
  //     { value: 4, label: "Ernest Hemingway" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
  // {
  //   question: "Which is the largest desert in the world?",
  //   options: [
  //     { value: 1, label: "Sahara Desert" },
  //     { value: 2, label: "Arabian Desert" },
  //     { value: 3, label: "Gobi Desert" },
  //     { value: 4, label: "Kalahari Desert" },
  //   ],
  //   type: "radio",
  //   correct_option: 1,
  // },
  // {
  //   question: "Who invented the telephone?",
  //   options: [
  //     { value: 1, label: "Nikola Tesla" },
  //     { value: 2, label: "Thomas Edison" },
  //     { value: 3, label: "Alexander Graham Bell" },
  //     { value: 4, label: "James Watt" },
  //   ],
  //   type: "radio",
  //   correct_option: 3,
  // },
  // {
  //   question: "What is the chemical symbol for silver?",
  //   options: [
  //     { value: 1, label: "Si" },
  //     { value: 2, label: "Ag" },
  //     { value: 3, label: "Au" },
  //     { value: 4, label: "Sr" },
  //   ],
  //   type: "radio",
  //   correct_option: 2,
  // },
];

const generatedNumbers = [];
const divContent = document.getElementById("content");
const divInfo = createInformationElement();
divContent.appendChild(divInfo);

const divForm = document.createElement("div");
divForm.className = "form-design";
divContent.appendChild(divForm);

const formEl = document.createElement("form");
formEl.method = "post";
divForm.appendChild(formEl);

const headEl = document.createElement("h1");
headEl.innerText = "Here You Go, All The Best!";
formEl.appendChild(headEl);
const noOfQusetion = 2;

for (let i = 1; i <= noOfQusetion; i++) {
  let generatedNum = generateRandomNumber(contents.length);

  while (generatedNumbers.includes(generatedNum)) {
    generatedNum = generateRandomNumber(contents.length);
  }

  generatedNumbers.push(generatedNum);
  const quizBlock = document.createElement("div");
  const questionEl = document.createElement("p");
  questionEl.innerText = `Q${i}) ${contents[generatedNum].question}`;
  quizBlock.appendChild(questionEl);

  const editableTime = 10;
  const timeEl = timerDiv(editableTime, `T${i}`)
  quizBlock.appendChild(timeEl);

  const optionBlock = document.createElement("div");
  optionBlock.className = "option-block";

  if (contents[generatedNum].type === "radio" || contents[generatedNum].type === "checkbox") {
    const items = contents[generatedNum].options;

    items.map((item, index) => {
      let time = editableTime-1;
      const randomName = randomString(30);
      const optionBox = document.createElement("div");
      const insideOptionBox = document.createElement("div");
      insideOptionBox.className = "option-box-inside";
      optionBox.className = "option-box";
      optionBox.setAttribute("data-unique-id", randomName);

      const inputEl = createRadioButtonOrCheckBox(
        contents[generatedNum].type,
        `Q${i}`,
        item.value,
        randomName
      );

      const labelEl = createLabel(randomName, item.label);
      insideOptionBox.appendChild(inputEl);
      insideOptionBox.appendChild(labelEl);
      optionBox.appendChild(insideOptionBox);
      let myInterval;
      const contextEl = timerDiv(inputEl, timeEl, time);
      optionBox.addEventListener("click", () => {

        if (inputEl.disabled === false) 
        {
          inputEl.checked = true;
          disableRadioButton(inputEl);
          const buttonEl = timeEl.children[1];
          const contextEl = timeEl.children[0];
          
          myInterval = setInterval(() => {
            contextEl.innerText = `time left to change answer ${time} sec`;
            time--;

            if (time < 0) {
              clearInterval(myInterval);
              document.getElementById(`T${i}`).className = "hide";
              disableRadioButton(inputEl);
            }

          }, 1000);

          buttonEl.addEventListener("click",() => {
            enableRadioButton(inputEl)
            clearInterval(myInterval)
            timeEl.className = "hide";
            time = 10;
            contextEl.innerText = `time left to change answer ${time} sec`;
          })
          timeEl.className = "show-time";
        }
      });

      optionBlock.appendChild(optionBox);
    });
  } else {
    const inputEl = createTextFeild("Enter your answer", `Q${i}`);
    optionBlock.appendChild(inputEl);
  }

  quizBlock.appendChild(optionBlock);
  const answerBlock = document.createElement("div");
  answerBlock.className = "answer-block-hidden";
  answerBlock.id = "Q" + i.toString();
  quizBlock.appendChild(answerBlock);
  formEl.appendChild(quizBlock);
}

const buttonEl = document.createElement("button");
buttonEl.type = "submit";
buttonEl.innerText = "Submit";
formEl.appendChild(buttonEl);

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let noOfCorrectAnswer = 0;

  for (let i = 1; i <= noOfQusetion; i++) {
    const quizObject = contents[generatedNumbers[i - 1]];
    const divEl = document.getElementById(`Q${i}`);
    divEl.className = "answer-block-show";
    const answer = quizObject.correct_option.toString().toLowerCase();
    let userSelectedAnswer;
    let value;

    const timer = document.querySelector(`div[id="T${i}"]`);
    timer.remove();

    if (quizObject.type === "radio") {
      userSelectedAnswer = document.querySelector(`input[name="Q${i}"]:checked`);
      value = userSelectedAnswer.value.toLowerCase();
      divEl.innerText = `Correct Option : ${answer}`;
    } 
    else if (quizObject.type === "text") {
      userSelectedAnswer = document.querySelector(`input[name="Q${i}"]`);
      value = userSelectedAnswer.value.toLowerCase();
      divEl.innerText = `Correct Answer : ${answer}`;
    }
    else if (quizObject.type === "checkbox") {
      userSelectedAnswer = document.querySelectorAll(`input[name="Q${i}"]:checked`);
      divEl.innerText = `Correct Answer : ${answer}`;
      value = [];
      for(let j = 0; j < userSelectedAnswer.length; j++){
        value.push(parseInt(userSelectedAnswer[j].value))
      }
      value = value.toString().toLowerCase();
    }
    
    const element = divEl.parentElement;

    if (answer === value) {
      noOfCorrectAnswer++;
      element.className = 'quiz-block-correct';
    } else {
      element.className = 'quiz-block-incorrect';
    }

  }

  // let formData = new FormData(formEl);
  // let index = 0;

  // formData.forEach(function (value, key) {
  //   console.log(key, value);
  //   index++;
  // });

  headEl.innerText = "Well Done, Here You Can Check Your Answer";
  divInfo.innerHTML = "";

  const textEl = createParagraph("grettings", "Congrulation");
  const resultEl = createParagraph(
    "result",
    `Your score is ${noOfCorrectAnswer}/${noOfQusetion}`
  );
  const gifEl = createImage("celb.gif", "");

  divInfo.appendChild(textEl);
  divInfo.appendChild(resultEl);
  divInfo.appendChild(gifEl);
  window.scroll(0, 0);
});
