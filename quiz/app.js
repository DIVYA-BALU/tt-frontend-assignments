// https://mcqquestions.net/practice/ms-excel-mcq
const questions = [
    {
        question: "Each cell in a Microsoft Office Excel document is referred to by its cell address, which is the ____________ ?",
        options_type: "radio",
        options: [
            {
                value : 1,
                option: "cell's column label",
                is_answer: false
            },
            {
                value : 2,
                option: "cell's column label and worksheet tab name",
                is_answer: false
            },
            {
                value : 3,
                option: "cell's row label",
                is_answer: false
            },
            {
                value : 4,
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
        question: "Which planet is known as the 'Red Planet'?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Jupiter",
                is_answer: false
            },
            {
                value: 2,
                option: "Mars",
                is_answer: true
            },
            {
                value: 3,
                option: "Venus",
                is_answer: false
            },
            {
                value: 4,
                option: "Saturn",
                is_answer: false
            }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Vincent van Gogh",
                is_answer: false
            },
            {
                value: 2,
                option: "Leonardo da Vinci",
                is_answer: true
            },
            {
                value: 3,
                option: "Pablo Picasso",
                is_answer: false
            },
            {
                value: 4,
                option: "Michelangelo",
                is_answer: false
            }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Nile",
                is_answer: true
            },
            {
                value: 2,
                option: "Amazon",
                is_answer: false
            },
            {
                value: 3,
                option: "Yangtze",
                is_answer: false
            },
            {
                value: 4,
                option: "Mississippi",
                is_answer: false
            }
        ]
    },
    {
        question: "In which year did World War I begin?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "1914",
                is_answer: true
            },
            {
                value: 2,
                option: "1918",
                is_answer: false
            },
            {
                value: 3,
                option: "1939",
                is_answer: false
            },
            {
                value: 4,
                option: "1945",
                is_answer: false
            }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "William Shakespeare",
                is_answer: true
            },
            {
                value: 2,
                option: "Jane Austen",
                is_answer: false
            },
            {
                value: 3,
                option: "Charles Dickens",
                is_answer: false
            },
            {
                value: 4,
                option: "Mark Twain",
                is_answer: false
            }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Au",
                is_answer: true
            },
            {
                value: 2,
                option: "Ag",
                is_answer: false
            },
            {
                value: 3,
                option: "Fe",
                is_answer: false
            },
            {
                value: 4,
                option: "Pt",
                is_answer: false
            }
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options_type: "radio",
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
                option: "Stephen Hawking",
                is_answer: false
            },
            {
                value: 4,
                option: "Galileo Galilei",
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
        question: "What is the smallest planet in our solar system?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Mars",
                is_answer: false
            },
            {
                value: 2,
                option: "Mercury",
                is_answer: true
            },
            {
                value: 3,
                option: "Venus",
                is_answer: false
            },
            {
                value: 4,
                option: "Earth",
                is_answer: false
            }
        ]
    },
    {
        question: "Who painted the famous artwork 'Starry Night'?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Pablo Picasso",
                is_answer: false
            },
            {
                value: 2,
                option: "Vincent van Gogh",
                is_answer: true
            },
            {
                value: 3,
                option: "Leonardo da Vinci",
                is_answer: false
            },
            {
                value: 4,
                option: "Claude Monet",
                is_answer: false
            }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Russia",
                is_answer: true
            },
            {
                value: 2,
                option: "Canada",
                is_answer: false
            },
            {
                value: 3,
                option: "China",
                is_answer: false
            },
            {
                value: 4,
                option: "United States",
                is_answer: false
            }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Heart",
                is_answer: false
            },
            {
                value: 2,
                option: "Liver",
                is_answer: false
            },
            {
                value: 3,
                option: "Skin",
                is_answer: true
            },
            {
                value: 4,
                option: "Lungs",
                is_answer: false
            }
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        options_type: "radio",
        options: [
            {
                value: 1,
                option: "Mount Kilimanjaro",
                is_answer: false
            },
            {
                value: 2,
                option: "Mount Everest",
                is_answer: true
            },
            {
                value: 3,
                option: "K2",
                is_answer: false
            },
            {
                value: 4,
                option: "Mount McKinley",
                is_answer: false
            }
        ]
    }
];

function randomIndex(arrLength,limit) {
    let indexarr = [];
    
    for (var i = 0; indexarr.length < limit; i++) {
        let rnum = Math.floor(Math.random() * arrLength);
    
        if (indexarr.includes(rnum)){
            continue;
        }
    
        indexarr.push(rnum);
    }
    
    return indexarr;
}

function startQuiz(){

    function linebreaker() {
        const linebreak = document.createElement("br");
        formElement.appendChild(linebreak);
    }

    const formElement = document.createElement("form");
    formElement.className = "quiz";
    divElement.appendChild(formElement);

    const limit = 10;
    const randomIndices = randomIndex(questions.length,limit);
    const questionToDisplay = [];
    const answersForQuestions = [];
    const valueOfAnswer = []; 

    randomIndices.forEach((value)=>{
        questionToDisplay.push(questions[value]);
        answerOptions = questions[value].options;
        answerOptions.forEach((item) => {
            if(item.is_answer){
                answersForQuestions.push(item.option);
                valueOfAnswer.push(item.value.toString());
            }
        })
    })

    for(let i = 0,j=0; i<questionToDisplay.length;i++){
        let qna = questionToDisplay[i];
        let questionElement = document.createElement("p");
        questionElement.textContent = `${(i + 1)}. ${qna.question}`;
        formElement.appendChild(questionElement);

        let optionsDiv = document.createElement("div");
        optionsDiv.className = `options-div${(i + 1)}`;
        
        qna.options.forEach((option)=>{
            let optionsRadio = document.createElement("input");
            optionsRadio.type = "radio";
            optionsRadio.value = option.value;
            optionsRadio.name = `options-for-${(i + 1)}`;
            optionsRadio.id = j;
            optionsRadio.required = true;

            optionsRadio.addEventListener("click",() => {
                let timer = document.querySelector(".timer");
                const time = timer.textContent.split(" ");
                console.log(time[time.length - 1]);

                // five second rule 
                if(parseInt(time[time.length - 1]) % 10 <= 5){
                    return;
                }
                else{
                    optionsRadio.parentNode.childNodes.forEach((node) =>{
                        node.disabled = true;
                    });
                }
                
            })

            optionsDiv.appendChild(optionsRadio);

            let labelElement = document.createElement("label");
            labelElement.textContent = option.option;
            labelElement.setAttribute("for",j);
            optionsDiv.appendChild(labelElement);
            j += 1;

            const linebreak = document.createElement("br");
            optionsDiv.appendChild(linebreak);
        })

        // clear attribute
        // let clear = document.createElement("a");
        // clear.textContent = "Clear";
        // clear.className = `clear${(i + 1)}`;
        // clear.href = "";
        // clear.addEventListener("click",(e)=>{
        //     e.preventDefault();
        //     optionsDiv.childNodes.forEach((node)=>{
        //         if(node.checked){
        //             node.checked = false;
        //         }
        //     })
        // })
        // optionsDiv.appendChild(clear);
        
        formElement.appendChild(optionsDiv);
        linebreaker();
    }

    const submit = document.createElement("button");
    submit.className = "submit";
    submit.textContent = "Submit";
    submit.type = "submit";
    formElement.addEventListener("submit",(e)=>{
        e.preventDefault();
        let userSelection = [];
        
        for(let j = 0; j < questionToDisplay.length; j++){
            let flag = 0;
            let selectedOption = document.getElementsByName(`options-for-${(j + 1)}`);
        
            selectedOption.forEach((selected)=>{
                
                if(selected.checked){
                    flag = 1;
                    userSelection.push(selected.value);
                    selected.checked = false; // do we uncheck after submitted or not
                }
        
            })
            
            if(flag === 0){
                userSelection.push("");
            }
        
        }

        console.log(answersForQuestions);
        console.log(valueOfAnswer);
        console.log(userSelection);
        
        let score = 0;
        
        for(let k = 0; k < valueOfAnswer.length;k++){
        
            if(valueOfAnswer[k] === userSelection[k]){
                score += 1;
            }
        
        }
        
        alert(`Your Score :  ${score}`);
        
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.textContent = "Reload";
        reload.type = "reset";
        
        reload.addEventListener("click",()=>{
            window.location.reload();
        })
        // display q and a?

        formElement.appendChild(reload);
        clearInterval(interval);

        if(document.querySelector(".timer") !== null){
            document.querySelector(".timer").remove();
        }
        
        submit.remove();
    })
    formElement.appendChild(submit);

}

let seconds = 0;
const secondsPerQuestion = 10;
function timekeeper(){
    seconds++;
    if(seconds % secondsPerQuestion == 0){
        let currentQuestion = document.querySelector(`.options-div${seconds / 10}`);
        if (currentQuestion === null){
            // document.querySelector(".timer").textContent = "Time's Up!!!";
            alert("Time's Up!!!");
            clearInterval(interval);
            document.querySelector(".timer").remove();
            document.querySelector(".submit").click(); 
            return;
        }
        currentQuestion.childNodes.forEach((node) => {
            node.disabled = true;
        })
    }
    document.querySelector(".timer").textContent = `Time in Seconds: ${seconds}`;
}

const divElement = document.querySelector(".container");

const timer = document.createElement("div");
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
})
divElement.appendChild(start);