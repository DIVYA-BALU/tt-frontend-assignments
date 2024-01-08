const body = document.body;

const mainBody = document.createElement("div");
const h1El = document.createElement("h1")
h1El.textContent = "WELCOME TO QUIZ WORLD";
h1El.id = "h1-head";
mainBody.appendChild(h1El);

const startButton = document.createElement("input");
startButton.type = "button";
startButton.value = "Start Quiz";

startButton.addEventListener("click", function () {
    window.location = "quiz.html";
});

mainBody.appendChild(startButton);
body.appendChild(mainBody);


