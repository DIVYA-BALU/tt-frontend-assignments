const questions = [
    {
        question: "Each cell in a Microsoft Office Excel document is referred to by its cell address, which is the ____________ ?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "cell's column label",
                is_answer: false
            },
            {
                value: 2,
                option: "cell's column label and worksheet tab name",
                is_answer: false
            },
            {
                value: 3,
                option: "cell's row label",
                is_answer: false
            },
            {
                value: 4,
                option: "cell's row and column labels",
                is_answer: true
            },
        ],
    },

    {
        question: "Which area in an excel window allows entering values and formulas?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Title bar",
                is_answer: false
            },
            {
                value: 2,
                option: "Menu bar",
                is_answer: false
            },
            {
                value: 3,
                option: "Formula bar",
                is_answer: true
            },
            {
                value: 4,
                option: "Standard toolbar",
                is_answer: false
            }
        ]
    },
    {
        question: "Excel files have a default extension of?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Xls",
                is_answer: true
            },
            {
                value: 2,
                option: "Xlw",
                is_answer: false
            },
            {
                value: 3,
                option: "Wkl",
                is_answer: false
            },
            {
                value: 4,
                option: "123",
                is_answer: false
            }
        ]
    },
    {
        question: "When you insert an Excel file into a Word document, the data are?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Hyperlinked",
                is_answer: false
            },
            {
                value: 2,
                option: "Placed in a word table",
                is_answer: true
            },
            {
                value: 3,
                option: "Linked",
                is_answer: false
            },
            {
                value: 4,
                option: "Embedded",
                is_answer: false
            }
        ]
    },
    {
        question: "An excel workbook is a collection of?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Workbooks",
                is_answer: false
            },
            {
                value: 2,
                option: "Worksheets",
                is_answer: true
            },
            {
                value: 3,
                option: "Charts",
                is_answer: false
            },
            {
                value: 4,
                option: "Worksheets and charts",
                is_answer: false
            }
        ]
    },
    {
        question: "You can create hyperlinks from the Excel workbook to?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "A webpage on company internet",
                is_answer: false
            },
            {
                value: 2,
                option: "A web page on the internet",
                is_answer: false
            },
            {
                value: 3,
                option: "Other Office 97 application documents",
                is_answer: false
            },
            {
                value: 4,
                option: "All",
                is_answer: true
            }
        ]
    },
    {
        question: "Two common wildcard characters that Excel recognizes are?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "* and ?",
                is_answer: true
            },
            {
                value: 2,
                option: "< and >",
                is_answer: false
            },
            {
                value: 3,
                option: "^ and /",
                is_answer: false
            },
            {
                value: 4,
                option: "+ and -",
                is_answer: false
            }
        ]
    },
    {
        question: "When you link data maintained in an excel workbook to a word document?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "The word document can not be edited",
                is_answer: false
            },
            {
                value: 2,
                option: "The word document contains a reference to the original source application",
                is_answer: true
            },
            {
                value: 3,
                option: "The word document must contain a hyperlink",
                is_answer: false
            },
            {
                value: 4,
                option: "The word document contains a copy of the actual data",
                is_answer: false
            }
        ]
    },
    {
        question: "To create a formula in Excel, you can use?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Values but not cell references",
                is_answer: false
            },
            {
                value: 2,
                option: "Cell references but not values",
                is_answer: false
            },
            {
                value: 3,
                option: "Values or cell references although not both at the same time",
                is_answer: false
            },
            {
                value: 4,
                option: "Value and cell references",
                is_answer: true
            }
        ]
    },
    {
        question: "The intersection of a row and column is called?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "data",
                is_answer: false
            },
            {
                value: 2,
                option: "a field",
                is_answer: false
            },
            {
                value: 3,
                option: "a cell",
                is_answer: true
            },
            {
                value: 4,
                option: "an equation",
                is_answer: false
            }
        ]
    },
    {
        question: "What is the capital of France?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "London",
                is_answer: false
            },
            {
                value: 2,
                option: "Paris",
                is_answer: true
            },
            {
                value: 3,
                option: "Berlin",
                is_answer: false
            },
            {
                value: 4,
                option: "Madrid",
                is_answer: false
            }
        ]
    },
    {
        question: "Explain the process of photosynthesis.",
        options_type: "text",
        answer: ""
    },
    {
        question: "Describe the impact of climate change on biodiversity.",
        options_type: "text",
        answer: ""
    },
    {
        question: "Which is the largest planet in our solar system?",
        options_type: "dropdown",
        multiple: false,
        options: [
            {
                value: 1,
                option: "Jupiter",
                is_answer: true
            },
            {
                value: 2,
                option: "Mars",
                is_answer: false
            },
            {
                value: 3,
                option: "Earth",
                is_answer: false
            },
            {
                value: 4,
                option: "Venus",
                is_answer: false
            }
        ]
    },
    {
        question: "Select the primary colors.",
        options_type: "dropdown",
        multiple: true,
        options: [
            {
                value: 1,
                option: "Red",
                is_answer: true
            },
            {
                value: 2,
                option: "Blue",
                is_answer: true
            },
            {
                value: 3,
                option: "Green",
                is_answer: true
            },
            {
                value: 4,
                option: "Yellow",
                is_answer: false
            }
        ]
    },
    {
        question: "Which programming language is often used for data analysis?",
        options_type: "dropdown",
        multiple: false,
        options: [
            {
                value: 1,
                option: "JavaScript",
                is_answer: false
            },
            {
                value: 2,
                option: "Python",
                is_answer: true
            },
            {
                value: 3,
                option: "Java",
                is_answer: false
            },
            {
                value: 4,
                option: "C++",
                is_answer: false
            }
        ]
    },
    {
        question: "Select the continents of the Southern Hemisphere.",
        options_type: "dropdown",
        multiple: true,
        options: [
            {
                value: 1,
                option: "Africa",
                is_answer: false
            },
            {
                value: 2,
                option: "Australia",
                is_answer: true
            },
            {
                value: 3,
                option: "Asia",
                is_answer: false
            },
            {
                value: 4,
                option: "South America",
                is_answer: true
            }
        ]
    }
    ,
    {
        question: "Who developed the theory of general relativity?",
        options_type: "dropdown",
        multiple: false,
        options: [
            {
                value: 1,
                option: "Isaac Newton",
                is_answer: false
            },
            {
                value: 2,
                option: "Albert Einstein",
                is_answer: true
            },
            {
                value: 3,
                option: "Galileo Galilei",
                is_answer: false
            },
            {
                value: 4,
                option: "Stephen Hawking",
                is_answer: false
            }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "African Elephant",
                is_answer: false
            },
            {
                value: 2,
                option: "Blue Whale",
                is_answer: true
            },
            {
                value: 3,
                option: "Giraffe",
                is_answer: false
            },
            {
                value: 4,
                option: "Hippopotamus",
                is_answer: false
            }
        ]
    },
    {
        question: "Who is known as the 'Father of the Computer'?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Charles Babbage",
                is_answer: true
            },
            {
                value: 2,
                option: "Alan Turing",
                is_answer: false
            },
            {
                value: 3,
                option: "Bill Gates",
                is_answer: false
            },
            {
                value: 4,
                option: "Steve Jobs",
                is_answer: false
            }
        ]
    },
    {
        question: "Which country is famous for producing maple syrup?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "United States",
                is_answer: false
            },
            {
                value: 2,
                option: "France",
                is_answer: false
            },
            {
                value: 3,
                option: "Canada",
                is_answer: true
            },
            {
                value: 4,
                option: "Australia",
                is_answer: false
            }
        ]
    },
    {
        question: "What is the capital of Japan?",
        options_type: "checkbox",
        options: [
            {
                value: 1,
                option: "Tokyo",
                is_answer: true
            },
            {
                value: 2,
                option: "Seoul",
                is_answer: false
            },
            {
                value: 3,
                option: "Beijing",
                is_answer: false
            },
            {
                value: 4,
                option: "Bangkok",
                is_answer: false
            }
        ]
    },
    {
        question: "Which of the following are primary colors?",
        options_type: "checkbox",
        options: [
            {
                value: 1,
                option: "Red",
                is_answer: true
            },
            {
                value: 2,
                option: "Green",
                is_answer: true
            },
            {
                value: 3,
                option: "Blue",
                is_answer: true
            },
            {
                value: 4,
                option: "Yellow",
                is_answer: true
            }
        ]
    },
    {
        question: "Which programming languages are used for web development?",
        options_type: "checkbox",
        options: [
            {
                value: 1,
                option: "Java",
                is_answer: false
            },
            {
                value: 2,
                option: "Python",
                is_answer: false
            },
            {
                value: 3,
                option: "HTML",
                is_answer: true
            },
            {
                value: 4,
                option: "JavaScript",
                is_answer: true
            }
        ]
    },
    {
        question: "Which planets are part of the inner solar system?",
        options_type: "checkbox",
        options: [
            {
                value: 1,
                option: "Mars",
                is_answer: true
            },
            {
                value: 2,
                option: "Jupiter",
                is_answer: false
            },
            {
                value: 3,
                option: "Earth",
                is_answer: true
            },
            {
                value: 4,
                option: "Saturn",
                is_answer: false
            }
        ]
    },
    {
        question: "Which of the following are common programming paradigms?",
        options_type: "checkbox",
        options: [
            {
                value: 1,
                option: "Imperative",
                is_answer: true
            },
            {
                value: 2,
                option: "Functional",
                is_answer: true
            },
            {
                value: 3,
                option: "Procedural",
                is_answer: true
            },
            {
                value: 4,
                option: "Random",
                is_answer: false
            }
        ]
    }
];

function randomIndex(arrLength,questionLimit) {
    let indexarr = [];
    
    for (var i = 0; indexarr.length < questionLimit; i++) {
        let rnum = Math.floor(Math.random() * arrLength);
    
        if (indexarr.includes(rnum)){
            continue;
        }
    
        indexarr.push(rnum);
    }
    
    return indexarr;
}

function startQuiz() {


    function linebreaker() {
        const linebreak = document.createElement("br");
        formElement.appendChild(linebreak);
    }

    const formElement = document.createElement("form");
    formElement.className = "quiz";
    divElement.appendChild(formElement);

    const randomIndices = randomIndex(questions.length,limit);
    const questionToDisplay = [];
    const answersForQuestions = [];
    const valueOfAnswer = []; 

    randomIndices.forEach((value) => {
        questionToDisplay.push(questions[value]);
        let answerOptions = questions[value].options;
        
        if (answerOptions === undefined){
            answersForQuestions.push(questions[value].answer);
            valueOfAnswer.push(questions[value].answer);
        }

        if(questions[value].options_type === "checkbox" || questions[value].options_type === "dropdown"){
            let answers = [];
            let values = [];
            
            answerOptions.forEach((item) => {

                if(item.is_answer){
                    answers.push(item.option);
                    values.push(item.value.toString());
                }
    
            })
            answersForQuestions.push(answers);
            valueOfAnswer.push(values);
        }
        else if(questions[value].options_type === "radio"){
            
            answerOptions.forEach((item) => {

                if(item.is_answer){
                    answersForQuestions.push(item.option);
                    valueOfAnswer.push(item.value.toString());
                }
    
            })
        }


    })

    for(let i = 0,j=0; i<questionToDisplay.length;i++){
        let qna = questionToDisplay[i];
        let questionElement = document.createElement("p");
        questionElement.textContent = `${(i + 1)}. ${qna.question}`;
        formElement.appendChild(questionElement);

        let optionsDiv = document.createElement("div");
        optionsDiv.className = `options-div${(i + 1)}`;
        
        if (qna.options_type === "radio" || qna.options_type === "checkbox"){
            qna.options.forEach((option) => {
                let optionsElement = document.createElement("input");
                optionsElement.type = qna.options_type;
                optionsElement.value = option.value;
                optionsElement.name = `options-for-${(i + 1)}`;
                optionsElement.id = j;
                
                if (qna.options_type === "radio") {
                    optionsElement.required = true;
                }

                optionsDiv.appendChild(optionsElement);
    
                let labelElement = document.createElement("label");
                labelElement.textContent = option.option;
                labelElement.setAttribute("for",j);
                optionsDiv.appendChild(labelElement);
                j += 1;
    
                const linebreak = document.createElement("br");
                optionsDiv.appendChild(linebreak);
            })

        }
        else if (qna.options_type === "text"){
            let optionsElement = document.createElement("input");
            optionsElement.type = qna.options_type;
            optionsElement.name = `options-for-${(i + 1)}`;
            optionsElement.id = j;
            j += 1;
            optionsDiv.appendChild(optionsElement);
        }
        else if (qna.options_type === "dropdown"){
            let optionsSelect= document.createElement("select");
            optionsSelect.className = `options-for-${(i + 1)}`;
            optionsSelect.required = true;

            if(qna.multiple){
                optionsSelect.multiple = true;
            }
            
            let firstOption = document.createElement("option");
            firstOption.value = 0;
            firstOption.textContent = "Select from below options";
            firstOption.id = j;

            optionsSelect.appendChild(firstOption);


            j += 1;
            qna.options.forEach((option) => {
                let optionsElement = document.createElement("option");
                optionsElement.value = option.value;
                optionsElement.textContent = option.option;
                optionsElement.id = j;
                optionsSelect.appendChild(optionsElement);
                j+=1
            })

            optionsDiv.appendChild(optionsSelect);
        }

        formElement.appendChild(optionsDiv);
        linebreaker();
    }

    const submit = document.createElement("button");
    submit.className = "submit";
    submit.textContent = "Submit";
    submit.type = "submit";

    formElement.addEventListener("submit", (e) => {     
        e.preventDefault();
        let userSelection = [];
        let userSelectionText = [];
        
        for(let j = 0; j < questionToDisplay.length; j++){
            let flag = 0;
            let selectedOption = document.getElementsByName(`options-for-${(j + 1)}`);
            let boxSelections = [];
            let boxSelectionsText = []
            if(selectedOption.length === 0) {
                let upperDiv = document.querySelector(`.options-div${(j + 1)}`)
                
                upperDiv.childNodes.forEach((node) => {
                    flag = 1;
                    
                    Array.from(node.selectedOptions).map((option) => { 
                        boxSelections.push(option.index.toString());
                        boxSelectionsText.push(option.textContent);
                    })

                    // node.selectedIndex = 0; // do we uncheck after submitted or not
                })

            }
            else{
                
                selectedOption.forEach((selected)=>{

                    if (selected.type === "checkbox") {
                        
                        if(selected.checked){
                            flag = 1;
                            boxSelections.push(selected.value);
                            boxSelectionsText.push(document.querySelector("label[for='" + selected.id + "']").innerText);
                            // selected.checked = false; // do we uncheck after submitted or not
                        }

                    }
                    else if (selected.type === "radio"){
                        
                        if(selected.checked){
                            flag = 1;
                            userSelection.push(selected.value);
                            userSelectionText.push(document.querySelector("label[for='" + selected.id + "']").innerText);
                            // selected.checked = false; // do we uncheck after submitted or not
                        }

                    }
                    else if (selected.type === "text"){
                        
                        if(selected.value !== ""){
                            userSelection.push(selected.value);
                            userSelectionText.push(selected.innerText);
                            // selected.value = ""; // do we uncheck after submitted or not
                        }

                    }

                })

            }
            
            if(flag === 0){
                userSelection.push("");
                userSelectionText.push(boxSelectionsText);
            }

            if(boxSelections.length > 0){
                userSelection.push(boxSelections);
                userSelectionText.push(boxSelectionsText);
            }

        }

        console.log(answersForQuestions);
        console.log(valueOfAnswer);
        console.log(userSelection);
        
        let score = 0;
        
        for(let k = 0; k < valueOfAnswer.length;k++){
            
            if(Array.isArray(valueOfAnswer[k])){
                let answerEquals = valueOfAnswer[k].every((value,index) => { 
                    return value === userSelection[k][index];
                });

                if(answerEquals){
                    score += 1;
                }

            }
            else{

                if(valueOfAnswer[k] === userSelection[k]){
                    score += 1;
                }

            }
        
        }
        
        alert(`Your Score :  ${score}`);
        
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.textContent = "Reload";
        reload.type = "reset";
        
        reload.addEventListener("click",() => {
            window.location.reload();
        })

        // display q and a?
        const analytics = document.createElement("button");
        analytics.className = "analytics";
        analytics.textContent = "Analytics";
        analytics.type = "button";
        
        analytics.addEventListener("click", () => {

            function linebreakerDiv() {
                const linebreak = document.createElement("br");
                innerDivElement.appendChild(linebreak);
            }

            divElement.innerHTML = "";
            let innerDivElement = document.createElement("div");
            innerDivElement.className = "qna";

            let headingElement = document.querySelector("h1");
            headingElement.textContent += "-Analytics"
            
            for(let x = 0; x < questionToDisplay.length; x++){
                const questionElement = document.createElement("p");
                const answerElement = document.createElement("p");
                const usersAnswerElement = document.createElement("p");
                questionElement.textContent = `${x + 1}. ${questionToDisplay[x].question}`;
                answerElement.textContent = `Answer : ${answersForQuestions[x]}`;
                usersAnswerElement.textContent = `Your Answer : ${userSelectionText[x]}`
                innerDivElement.appendChild(questionElement);
                innerDivElement.appendChild(answerElement);
                innerDivElement.appendChild(usersAnswerElement);
                linebreakerDiv();
            }
            
            reload.className = "reload-analytics";
            innerDivElement.appendChild(reload);
            divElement.appendChild(innerDivElement)

        })

        formElement.appendChild(reload);
        formElement.appendChild(analytics);
        clearInterval(interval);

        if(document.querySelector(".timer") !== null){
            document.querySelector(".timer").remove();
        }
        
        submit.remove();
    })
    formElement.appendChild(submit);

}

let seconds = 0;
const limit = 10;
const secondsPerQuestion = 10;
const timeLimitForChange = 5;
let divNumber = 1;
function timekeeper () {
    seconds++;
    let currentQuestion = document.querySelector(`.options-div${divNumber}`);
    
    if(seconds % secondsPerQuestion == 0){

        if (currentQuestion === null){
            alert("Time's Up!!!");
            clearInterval(interval);
            document.querySelector(".timer").remove();
            document.querySelector(".submit").click(); 
            return;
        }

        currentQuestion.childNodes.forEach((node) => {
            node.disabled = true;
        })

        divNumber += 1;
    }

    currentQuestion.childNodes.forEach((childNode) => {

        childNode.onclick = function(){
            // five second rule 
            if(seconds % 10 <= timeLimitForChange){
                return;
            }
            else{

                if (childNode.tagName.toLowerCase() === "select"){
                    
                    if (childNode.multiple){
                        return;
                    }

                    childNode.disabled = true;
                }

                let elementFromLabel = document.getElementById(childNode.getAttribute("for"));
                
                if (elementFromLabel !== undefined || elementFromLabel !== null){
                    childNode = elementFromLabel;
                }

                if (childNode.type === "checkbox" || childNode.type === "radio"){
                    childNode.checked = true;
                }

                childNode.parentNode.childNodes.forEach((node) =>{
                    node.disabled = true;
                });
            }

        }

    })

    document.querySelector(".timer").textContent = `Total time: ${secondsPerQuestion * limit} \n Time in Seconds: ${seconds}`;
}

const divElement = document.querySelector(".container");

const timer = document.createElement("p");
timer.className = "timer";
timer.hidden = true;
divElement.appendChild(timer);

const linebreak = document.createElement("br");
document.body.appendChild(linebreak);

let interval;
const start = document.createElement("button");
start.className = "start";
start.textContent = "Start";

start.addEventListener("click",() => {
    interval = setInterval(timekeeper,1000);
    timer.hidden = false;
    start.remove();
    startQuiz();
    timekeeper();
})

divElement.appendChild(start);