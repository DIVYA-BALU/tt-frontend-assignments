// https://mcqquestions.net/practice/ms-excel-mcq
const questions = [
    {
        question: "Each cell in a Microsoft Office Excel document is referred to by its cell address, which is the ____________ ?",
        options: ["cell's column label", "cell's column label and worksheet tab name", "cell's row label", "cell's row and column labels"],
        answer: "cell's row and column labels"
    },
    {
        question: "Which area in an excel window allows entering values and formulas ?",
        options: ["Title bar", "Menu bar", "Formula bar", "Standard toolbar"],
        answer: "Formula bar"
    },
    {
        question: "Excel files have a default extension of ?",
        options: ["Xls", "Xlw", " Wkl", "123"],
        answer: "Xls"
    },
    {
        question: "When you insert an Excel file into a Word document, the data are ?",
        options: ["Hyperlinked", "Placed in a word table", "Linked", "Embedded"],
        answer: "Placed in a word table"
    },
    {
        question: "An excel workbook is a collection of ?",
        options: ["Workbooks", "Worksheets", "Charts", "Worksheets and charts"],
        answer: "Worksheets"
    },
    {
        question: "You can create hyperlinks from the Excel workbook to ?",
        options: ["A webpage on company internet", "A web page on the internet", "Other Office 97 application documents", "All"],
        answer: "All"
    },
    {
        question: "Two common wildcard characters that Excel recognizes are ?",
        options: ["* and ?", "< and >", "^ and /", "+ and -"],
        answer: "* and ?"
    },
    {
        question: "When you link data maintained in an excel workbook to a word document ?",
        options: ["The word document can not be edit", "The word document contains a reference to the original source application", "The word document must contain a hyperlink", "The word document contains a copy of the actual data"],
        answer: "The word document contains a reference to the original source application"
    },
    {
        question: "To create a formula in Excel, you can use ?",
        options: ["Values but not cell references", "Cell references but not values", "Values or cell references although not both at the same time", "Value and cell references"],
        answer: "Value and cell references"
    },
    {
        question: "The intersection of a row and column is called ?",
        options: ["data", "a field", "a cell", "an equation"],
        answer: "a cell"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Jupiter", "Mars", "Venus", "Saturn"],
        answer: "Mars",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Michelangelo",
        ],
        answer: "Leonardo da Vinci",
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: "Nile",
    },
    {
        question: "In which year did World War I begin?",
        options: ["1914", "1918", "1939", "1945"],
        answer: "1914",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "William Shakespeare",
            "Jane Austen",
            "Charles Dickens",
            "Mark Twain",
        ],
        answer: "William Shakespeare",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pt"],
        answer: "Au",
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: [
            "Isaac Newton",
            "Albert Einstein",
            "Stephen Hawking",
            "Galileo Galilei",
        ],
        answer: "Albert Einstein",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
    },
    {
        question: "Who is known as the 'Father of the Computer'?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage",
    },
    {
        question: "Which country is famous for producing maple syrup?",
        options: ["United States", "France", "Canada", "Australia"],
        answer: "Canada",
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mars", "Mercury", "Venus", "Earth"],
        answer: "Mercury",
    },
    {
        question: "Who painted the famous artwork 'Starry Night'?",
        options: [
            "Pablo Picasso",
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Claude Monet",
        ],
        answer: "Vincent van Gogh",
    },
    {
        question: "Which country is the largest by land area?",
        options: ["Russia", "Canada", "China", "United States"],
        answer: "Russia",
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        answer: "Skin",
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount McKinley"],
        answer: "Mount Everest",
    },       
];

function linebreaker() {
    const linebreak = document.createElement("br");
    formElement.appendChild(linebreak);
}

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

const divElement = document.querySelector(".container");

const formElement = document.createElement("form");
formElement.className = "quiz";
divElement.appendChild(formElement);

const limit = 10;
let randomIndices = randomIndex(questions.length,limit);
let questionToDisplay = [];
let answersForQuestions = [];

randomIndices.forEach((value)=>{
    questionToDisplay.push(questions[value]);
    answersForQuestions.push(questions[value].answer)
})

for(let i = 0; i<questionToDisplay.length;i++){
    let qna = questionToDisplay[i];
    let j=i*qna.options.length;
    let questionElement = document.createElement("p");
    questionElement.textContent = `${(i + 1)}. ${qna.question}`;
    formElement.appendChild(questionElement);

    let optionsDiv = document.createElement("div");
    optionsDiv.className = `options-div${(i + 1)}`;
    qna.options.forEach((option)=>{
        let optionsRadio = document.createElement("input");
        optionsRadio.type = "radio";
        optionsRadio.value = option;
        optionsRadio.name = `options-for-${(i + 1)}`;
        optionsRadio.id = j;
        optionsRadio.required = true;
        optionsDiv.appendChild(optionsRadio);

        let labelElement = document.createElement("label");
        labelElement.textContent = option;
        labelElement.setAttribute("for",j);
        optionsDiv.appendChild(labelElement);
        j += 1;

        const linebreak = document.createElement("br");
        optionsDiv.appendChild(linebreak);
    })

    let clear = document.createElement("a");
    clear.textContent = "Clear";
    clear.className = `clear${(i + 1)}`;
    clear.href = "";
    clear.addEventListener("click",(e)=>{
        e.preventDefault();
        optionsDiv.childNodes.forEach((node)=>{
            if(node.checked){
                node.checked = false;
            }
        })
    })
    optionsDiv.appendChild(clear);
    
    formElement.appendChild(optionsDiv);
    linebreaker();
}

const submit = document.createElement("button");
submit.textContent = "Submit";
submit.type = "submit";
formElement.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userSelection = [];
    for(let j = 0; j < questionToDisplay.length; j++){
        let selectedOption = document.getElementsByName(`options-for-${(j + 1)}`);
        selectedOption.forEach((selected)=>{
            if(selected.checked){
                userSelection.push(selected.value);
                selected.checked = false;
            }
        })
    }
    console.log(answersForQuestions);
    console.log(userSelection);
    let score = 0;
    for(let k = 0; k < answersForQuestions.length;k++){
        if(answersForQuestions[k] === userSelection[k]){
            score += 1;
        }
    }
    alert(`Your Score :  ${score}`);
    
    const reload = document.createElement("button");
    reload.textContent = "Reload";
    reload.type = "submit";
    reload.addEventListener("click",()=>{
        window.location.reload();
    })
    formElement.appendChild(reload);
})
formElement.appendChild(submit);

