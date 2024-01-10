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

function createRadioButton(name, value, id){
  const inputEl = document.createElement("input");
  inputEl.type = "radio";
  inputEl.name = name;
  inputEl.value = value;
  inputEl.id = id;
  inputEl.setAttribute("required", "");
  return inputEl;
}

function createLabel(name, label){
  const labelEl = document.createElement("label");
  labelEl.setAttribute("for", name);
  labelEl.innerText = label;
  return labelEl;
}

function disableRadioButton(inputEl){
  const radioButtons = document.getElementsByName(inputEl.name);
  for (let index = 0; index < radioButtons.length; index++) {
    radioButtons[index].disabled = true;
    console.log(radioButtons[index]);
  }
}

const contents = [
  {
    question: "What is the capital of France?",
    options: [
      { value: 1, label: "London" },
      { value: 2, label: "Paris" },
      { value: 3, label: "Berlin" },
      { value: 4, label: "Madrid" },
    ],
    correct_option: 2,
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: [
      { value: 1, label: "Jupiter" },
      { value: 2, label: "Mars" },
      { value: 3, label: "Venus" },
      { value: 4, label: "Saturn" },
    ],
    correct_option: 2,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { value: 1, label: "Vincent van Gogh" },
      { value: 2, label: "Leonardo da Vinci" },
      { value: 3, label: "Pablo Picasso" },
      { value: 4, label: "Michelangelo" },
    ],
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
    correct_option: 1,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { value: 1, label: "William Shakespeare" },
      { value: 2, label: "Jane Austen" },
      { value: 3, label: "Charles Dickens" },
      { value: 4, label: "Mark Twain" },
    ],
    correct_option: 1,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: [
      { value: 1, label: "Au" },
      { value: 2, label: "Ag" },
      { value: 3, label: "Fe" },
      { value: 4, label: "Pt" },
    ],
    correct_option: 1,
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      { value: 1, label: "Isaac Newton" },
      { value: 2, label: "Albert Einstein" },
      { value: 3, label: "Stephen Hawking" },
      { value: 4, label: "Galileo Galilei" },
    ],
    correct_option: 2,
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      { value: 1, label: "African Elephant" },
      { value: 2, label: "Blue Whale" },
      { value: 3, label: "Giraffe" },
      { value: 4, label: "Hippopotamus" },
    ],
    correct_option: 2,
  },
  {
    question: "Who is known as the 'Father of the Computer'?",
    options: [
      { value: 1, label: "Charles Babbage" },
      { value: 2, label: "Alan Turing" },
      { value: 3, label: "Bill Gates" },
      { value: 4, label: "Steve Jobs" },
    ],
    correct_option: 1,
  },
  {
    question: "Which country is famous for producing maple syrup?",
    options: [
      { value: 1, label: "United States" },
      { value: 2, label: "France" },
      { value: 3, label: "Canada" },
      { value: 4, label: "Australia" },
    ],
    correct_option: 3,
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: [
      { value: 1, label: "Mars" },
      { value: 2, label: "Mercury" },
      { value: 3, label: "Venus" },
      { value: 4, label: "Earth" },
    ],
    correct_option: 2,
  },
  {
    question: "Who painted the famous artwork 'Starry Night'?",
    options: [
      { value: 1, label: "Pablo Picasso" },
      { value: 2, label: "Vincent van Gogh" },
      { value: 3, label: "Leonardo da Vinci" },
      { value: 4, label: "Claude Monet" },
    ],
    correct_option: 2,
  },
  {
    question: "Which country is the largest by land area?",
    options: [
      { value: 1, label: "Russia" },
      { value: 2, label: "Canada" },
      { value: 3, label: "China" },
      { value: 4, label: "United States" },
    ],
    correct_option: 1,
  },
  {
    question: "What is the largest organ in the human body?",
    options: [
      { value: 1, label: "Heart" },
      { value: 2, label: "Liver" },
      { value: 3, label: "Skin" },
      { value: 4, label: "Lungs" },
    ],
    correct_option: 3,
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: [
      { value: 1, label: "Mount Kilimanjaro" },
      { value: 2, label: "Mount Everest" },
      { value: 3, label: "K2" },
      { value: 4, label: "Mount McKinley" },
    ],
    correct_option: 2,
  },
  {
    question: "Who wrote the novel '1984'?",
    options: [
      { value: 1, label: "Aldous Huxley" },
      { value: 2, label: "George Orwell" },
      { value: 3, label: "J.R.R. Tolkien" },
      { value: 4, label: "Ray Bradbury" },
    ],
    correct_option: 2,
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
      { value: 1, label: "Carbon Dioxide" },
      { value: 2, label: "Nitrogen" },
      { value: 3, label: "Oxygen" },
      { value: 4, label: "Methane" },
    ],
    correct_option: 2,
  },
  {
    question: "What is the capital of Japan?",
    options: [
      { value: 1, label: "Seoul" },
      { value: 2, label: "Shanghai" },
      { value: 3, label: "Tokyo" },
      { value: 4, label: "Beijing" },
    ],
    correct_option: 3,
  },
  {
    question: "Who discovered penicillin?",
    options: [
      { value: 1, label: "Alexander Fleming" },
      { value: 2, label: "Marie Curie" },
      { value: 3, label: "Louis Pasteur" },
      { value: 4, label: "Robert Koch" },
    ],
    correct_option: 1,
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      { value: 1, label: "Indian Ocean" },
      { value: 2, label: "Atlantic Ocean" },
      { value: 3, label: "Arctic Ocean" },
      { value: 4, label: "Pacific Ocean" },
    ],
    correct_option: 4,
  },
  {
    question: "Which planet is closest to the Sun?",
    options: [
      { value: 1, label: "Mars" },
      { value: 2, label: "Earth" },
      { value: 3, label: "Venus" },
      { value: 4, label: "Mercury" },
    ],
    correct_option: 4,
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: [
      { value: 1, label: "John Steinbeck" },
      { value: 2, label: "Harper Lee" },
      { value: 3, label: "F. Scott Fitzgerald" },
      { value: 4, label: "Ernest Hemingway" },
    ],
    correct_option: 2,
  },
  {
    question: "Which is the largest desert in the world?",
    options: [
      { value: 1, label: "Sahara Desert" },
      { value: 2, label: "Arabian Desert" },
      { value: 3, label: "Gobi Desert" },
      { value: 4, label: "Kalahari Desert" },
    ],
    correct_option: 1,
  },
  {
    question: "Who invented the telephone?",
    options: [
      { value: 1, label: "Nikola Tesla" },
      { value: 2, label: "Thomas Edison" },
      { value: 3, label: "Alexander Graham Bell" },
      { value: 4, label: "James Watt" },
    ],
    correct_option: 3,
  },
  {
    question: "What is the chemical symbol for silver?",
    options: [
      { value: 1, label: "Si" },
      { value: 2, label: "Ag" },
      { value: 3, label: "Au" },
      { value: 4, label: "Sr" },
    ],
    correct_option: 2,
  },
];

const generatedNumbers = [];
const divContent = document.getElementById("content");
const divInfo = document.createElement("div");
divInfo.className = "info";

const welcomeEl = document.createElement("p");
welcomeEl.className = "welcome";
welcomeEl.innerText = "Welcome To The General Knowledge Quiz";

const informationEl = document.createElement("p");
informationEl.className = "quiz-information";
informationEl.innerText =
  "In this quiz there is 10 general knowledge question. You have to answer each question without completing every question you can not submit the test";

const imgEl = document.createElement("img");
imgEl.src = "welcome.gif";

divInfo.appendChild(welcomeEl);
divInfo.appendChild(informationEl);
divInfo.appendChild(imgEl);
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

  const timeEl = document.createElement("div");
  timeEl.className = "hide";
  timeEl.id = `T${i}`;
  quizBlock.appendChild(timeEl);

  const optionBlock = document.createElement("div");
  optionBlock.className = "option-block";
  const items = contents[generatedNum].options;

  items.map((item, index) => {
    
    const randomName = randomString(30);
    const optionBox = document.createElement("div");
    const insideOptionBox = document.createElement("div");
    insideOptionBox.className = "option-box-inside";
    optionBox.className = "option-box";
    optionBox.setAttribute("data-unique-id", randomName);
    const inputEl = createRadioButton(`Q${i}`, item.value, randomName);
    insideOptionBox.appendChild(inputEl);
    const labelEl = createLabel(randomName, item.label);
    insideOptionBox.appendChild(labelEl);
    const breakEl = document.createElement("br");

    optionBox.appendChild(insideOptionBox);
    
    // let myInterval;
    // let time = 10;
    // optionBox.addEventListener("click", () => {
    //   clearInterval(myInterval);
    //   if (inputEl.disabled === false) {
    //     inputEl.checked = true;
    //   }
    //   if(timeEl.className !== "show-time"){
    //   timeEl.className = "show-time";
    //   myInterval = setInterval(() => {
    //     timeEl.innerText = `time left to change answer ${time} sec`;
    //     time--;
    //     if (time < 0) {
    //       clearInterval(myInterval);
    //       document.getElementById(`T${i}`).remove();
    //       disableRadioButton(inputEl);
          
    //     }
    //   }, 1000);
    // }
    // });

    optionBlock.appendChild(optionBox);
  });

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
  let formData = new FormData(formEl);
  let index = 0;
  for (let i = 1; i <= noOfQusetion; i++) {
    const userSelectedAnswer = document.querySelector(
      `input[name="Q${i}"]:checked`
    );
    const answer = contents[generatedNumbers[i - 1]].correct_option.toString();
    console.log(answer);
    const value = userSelectedAnswer.value;
    let divEl = document.getElementById(`Q${i}`);
    divEl.className = "answer-block-show";
    divEl.innerText = `Correct Option : ${answer}`;
    const element = divEl.parentElement;
    if (answer === value) {
      noOfCorrectAnswer++;
      element.className = "quiz-block-correct";
    } else {
      element.className = "quiz-block-incorrect";
    }
  }
  formData.forEach(function (value, key) {
    console.log(key, value);

    index++;
  });

  headEl.innerText = "Well Done, Here You Can Check Your Answer";
  divInfo.innerHTML = "";
  const textEl = document.createElement("p");
  textEl.className = "grettings";
  textEl.innerText = "Congrulation";
  divInfo.appendChild(textEl);
  const resultEl = document.createElement("p");
  resultEl.className = "result";
  resultEl.innerText = `Your score is ${noOfCorrectAnswer}/${noOfQusetion}`;
  const gifEl = document.createElement("img");
  gifEl.src = "celb.gif";
  divInfo.appendChild(resultEl);
  divInfo.appendChild(gifEl);
  window.scroll(0, 0);
});
