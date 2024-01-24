const body = document.body;

const mainBody = document.createElement("div");
mainBody.className = "main-div";
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

//style the main div as a box with shadow effect



mainBody.appendChild(startButton);
body.appendChild(mainBody);


