const formEl = document.getElementById("quiz_form");
const questionEl = document.getElementsByTagName("p");

function answer() {
    for (let index = 0; index < questionEl.length; index++) {
        const element = questionEl[index];
        const spanEl = document.createElement("span");
        element.appendChild(spanEl);
        if(answerEl[index]()){
            spanEl.setAttribute("class", "correct");
            spanEl.textContent = "Correct";
        }else{
            spanEl.setAttribute("class", "wrong");
            spanEl.textContent = "Wrong";
        }
    }
}

const answerEl = [
    function() {
        if (document.getElementById("quiz1-option1").checked) {
            return true;
        } else {
            return false;
        }
    },
    function() {
        if (document.getElementById("quiz2-option1").checked) {
            return true;
        } else {
            return false;
        }
    },
    function() {
        if (document.getElementById("quiz3-option1").checked) {
            return true;
        } else {
            return false;
        }
    }
];
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    answer();
});