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

const content = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct_option: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    correct_option: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correct_option: "Leonardo da Vinci",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correct_option: "Nile",
  },
  {
    question: "In which year did World War I begin?",
    options: ["1914", "1918", "1939", "1945"],
    correct_option: "1914",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    correct_option: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pt"],
    correct_option: "Au",
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    correct_option: "Albert Einstein",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct_option: "Blue Whale",
  },
  {
    question: "Who is known as the 'Father of the Computer'?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    correct_option: "Charles Babbage",
  },
  {
    question: "Which country is famous for producing maple syrup?",
    options: ["United States", "France", "Canada", "Australia"],
    correct_option: "Canada",
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mars", "Mercury", "Venus", "Earth"],
    correct_option: "Mercury",
  },
  {
    question: "Who painted the famous artwork 'Starry Night'?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correct_option: "Vincent van Gogh",
  },
  {
    question: "Which country is the largest by land area?",
    options: ["Russia", "Canada", "China", "United States"],
    correct_option: "Russia",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    correct_option: "Skin",
  },
  {
    question: "Which is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount McKinley"],
    correct_option: "Mount Everest",
  },
  {
    question: "Who wrote the novel '1984'?",
    options: [
      "Aldous Huxley",
      "George Orwell",
      "J.R.R. Tolkien",
      "Ray Bradbury",
    ],
    correct_option: "George Orwell",
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Methane"],
    correct_option: "Nitrogen",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Shanghai", "Tokyo", "Beijing"],
    correct_option: "Tokyo",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Louis Pasteur",
      "Robert Koch",
    ],
    correct_option: "Alexander Fleming",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correct_option: "Pacific Ocean",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mars", "Earth", "Venus", "Mercury"],
    correct_option: "Mercury",
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: [
      "John Steinbeck",
      "Harper Lee",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    correct_option: "Harper Lee",
  },
  {
    question: "Which is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Kalahari Desert",
    ],
    correct_option: "Sahara Desert",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Nikola Tesla",
      "Thomas Edison",
      "Alexander Graham Bell",
      "James Watt",
    ],
    correct_option: "Alexander Graham Bell",
  },
  {
    question: "What is the chemical symbol for silver?",
    options: ["Si", "Ag", "Au", "Sr"],
    correct_option: "Ag",
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
informationEl.innerText = "In this quiz there is 10 general knowledge question. You have to answer each question without completing every question you can not submit the test";

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

for (let i = 1; i <= 10; i++) {
  let generatedNum = generateRandomNumber(content.length);

  while (generatedNumbers.includes(generatedNum)) {
    generatedNum = generateRandomNumber(content.length);
  }

  generatedNumbers.push(generatedNum);
  const quizBlock = document.createElement("div");
  const questionEl = document.createElement("p");
  questionEl.innerText = "Q" + i.toString() + ") " + content[generatedNum].question;
  quizBlock.appendChild(questionEl);

  const optionBlock = document.createElement("div");
  optionBlock.className = "option-block";
  const items = content[generatedNum].options;

  items.map((item, index) => {
    const randomName = randomString(30);
    const inputEl = document.createElement("input");
    const optionBox = document.createElement("div");
    optionBox.className = "option-box";
    optionBox.setAttribute("data-unique-id", randomName);
    inputEl.type = "radio";
    inputEl.name = "Q" + i.toString();
    inputEl.value = item;
    inputEl.id = randomName;
    inputEl.setAttribute("required", "");
    optionBox.appendChild(inputEl);
    const labelEl = document.createElement("label");
    labelEl.setAttribute("for", randomName);
    labelEl.innerText = item;
    optionBox.appendChild(labelEl);
    const breakEl = document.createElement("br");
    if (index === 1) {
      console.log(item, index);
      optionBox.appendChild(breakEl);
    }

    optionBox.addEventListener("click",() => {
      inputEl.checked = true;
      optionBox.style.backgroundColor = "blue"
    });
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

  formData.forEach(function (value, key) {
    let answer = content[generatedNumbers[index]].correct_option;
    index++;
    console.log(answer);
    let divEl = document.getElementById(key);
    divEl.className = "answer-block-show";
    divEl.innerText = "Correct Answer : " + answer;
    const element = divEl.parentElement;
    console.log(element);
    if (answer === value) {
      noOfCorrectAnswer++;
      element.className = "quiz-block-correct";
    } else {
      element.className = "quiz-block-incorrect";
    }
  });

  headEl.innerText = "Well Done, Here You Can Check Your Answer";
  divInfo.innerHTML = "";
  const textEl = document.createElement("p");
  textEl.className = "grettings";
  textEl.innerText = "Congrulation";
  divInfo.appendChild(textEl);
  const resultEl = document.createElement("p");
  resultEl.className = "result";
  resultEl.innerText = "Your score is " + noOfCorrectAnswer + "/ 10";
  const gifEl = document.createElement("img");
  gifEl.src = "celb.gif";
  divInfo.appendChild(resultEl);
  divInfo.appendChild(gifEl);
  window.scroll(0,0);
});
