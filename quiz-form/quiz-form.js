const questions = [
  {
    question: "Which of the following is an example of a sustainable practice?",
    choices: [
      { option: "Implementing renewable energy sources in manufacturing processes", "is_true": true },
      { option: "Increasing single-use plastic production", "is_true": false },
      { option: "Expanding deforestation for agricultural purposes", "is_true": false },
      { option: "Maximizing fossil fuel consumption in transportation", "is_true": false }
    ]
  },
  {
    question: "Which action contributes positively to environmental sustainability?",
    choices: [
      { option: "Promoting recycling initiatives within a community", "is_true": true },
      { option: "Dumping hazardous waste in water bodies", "is_true": false },
      { option: "Using non-renewable resources excessively", "is_true": false },
      { option: "Burning forests for land clearance", "is_true": false }
    ]
  },
  {
    question: "What aligns with sustainable resource management?",
    choices: [
      { option: "Careful monitoring and preservation of freshwater sources", "is_true": true },
      { option: "Dumping industrial waste in rivers", "is_true": false },
      { option: "Overfishing without limits", "is_true": false },
      { option: "Clear-cutting forests without reforestation plans", "is_true": false }
    ]
  },
  {
    question: "Which practice is conducive to sustainable agriculture?",
    choices: [
      { option: "Crop rotation and soil enrichment techniques", "is_true": true },
      { option: "Massive pesticide and herbicide use", "is_true": false },
      { option: "Monoculture farming with no crop diversity", "is_true": false },
      { option: "Using genetically modified organisms extensively", "is_true": false }
    ]
  },
  {
    question: "What supports sustainable waste management?",
    choices: [
      { option: "Implementing comprehensive recycling programs", "is_true": true },
      { option: "Incinerating all waste without sorting", "is_true": false },
      { option: "Dumping garbage in open spaces", "is_true": false },
      { option: "Landfilling hazardous materials without containment measures", "is_true": false }
    ]
  },
  {
    question: "Which approach promotes sustainable transportation?",
    choices: [
      { option: "Developing efficient public transport systems", "is_true": true },
      { option: "Relying solely on personal vehicles for commuting", "is_true": false },
      { option: "Constructing highways through natural habitats", "is_true": false },
      { option: "Using outdated, fuel-inefficient vehicles", "is_true": false }
    ]
  },
  {
    question: "What supports sustainable consumption?",
    choices: [
      { option: "Opting for products with minimal packaging", "is_true": true },
      { option: "Purchasing single-use plastic items in bulk", "is_true": false },
      { option: "Preferring products with excessive plastic packaging", "is_true": false },
      { option: "Buying disposable items without considering alternatives", "is_true": false }
    ]
  },
  {
    question: "Which action contributes to sustainable energy use?",
    choices: [
      { option: "Investing in solar panel installations", "is_true": true },
      { option: "Relying solely on fossil fuels", "is_true": false },
      { option: "Building more coal-powered plants", "is_true": false },
      { option: "Disregarding energy conservation practices", "is_true": false }
    ]
  },
  {
    question: "What supports sustainable urban development?",
    choices: [
      { option: "Creating green spaces and parks within cities", "is_true": true },
      { option: "Expanding urbanization without regard for ecosystems", "is_true": false },
      { option: "Constructing buildings without energy-efficient designs", "is_true": false },
      { option: "Promoting heavy industrialization within city limits", "is_true": false }
    ]
  },
  {
    question: "Which practice promotes sustainable forest management?",
    choices: [
      { option: "Implementing selective logging techniques with reforestation plans", "is_true": true },
      { option: "Clear-cutting forests without reforestation efforts", "is_true": false },
      { option: "Ignoring the impact of logging on biodiversity", "is_true": false },
      { option: "Expanding logging operations without regulations", "is_true": false }
    ]
  },
  {
    question: "What aligns with sustainable fishing practices?",
    choices: [
      { option: "Adhering to fishing quotas and seasonal bans", "is_true": true },
      { option: "Overfishing without limitations", "is_true": false },
      { option: "Using destructive fishing methods", "is_true": false },
      { option: "Ignoring the impact on endangered species", "is_true": false }
    ]
  },
  {
    question: "Which action supports sustainable water conservation?",
    choices: [
      { option: "Implementing water-saving measures in agriculture", "is_true": true },
      { option: "Wastefully using water resources without consideration", "is_true": false },
      { option: "Discharging untreated sewage into water bodies", "is_true": false },
      { option: "Diverting water from natural habitats excessively", "is_true": false }
    ]
  },
  {
    question: "What contributes to sustainable wildlife preservation?",
    choices: [
      { option: "Protecting natural habitats from encroachment", "is_true": true },
      { option: "Hunting endangered species for commercial purposes", "is_true": false },
      { option: "Allowing invasive species to dominate ecosystems", "is_true": false },
      { option: "Neglecting conservation efforts in wildlife reserves", "is_true": false }
    ]
  },
  {
    question: "Which practice supports sustainable construction?",
    choices: [
      { option: "Utilizing eco-friendly building materials", "is_true": true },
      { option: "Constructing buildings without energy efficiency considerations", "is_true": false },
      { option: "Ignoring the impact on local ecosystems", "is_true": false },
      { option: "Opting for high-resource consumption in construction", "is_true": false }
    ]
  },
  {
    question: "Which action supports sustainable tourism?",
    choices: [
      { option: "Promoting responsible travel and minimizing environmental impact", "is_true": true },
      { option: "Encouraging excessive waste generation in tourist areas", "is_true": false },
      { option: "Allowing unrestricted development in ecologically sensitive areas", "is_true": false },
      { option: "Neglecting cultural and environmental preservation in tourist destinations", "is_true": false }
    ]
  },
  {
    question: "What contributes to sustainable food production?",
    choices: [
      { option: "Implementing organic farming methods", "is_true": true },
      { option: "Relying solely on intensive chemical-based agriculture", "is_true": false },
      { option: "Using excessive amounts of pesticides and fertilizers", "is_true": false },
      { option: "Neglecting soil health and biodiversity in farming practices", "is_true": false }
    ]
  },
  {
    question: "Which practice aligns with sustainable ecosystem management?",
    choices: [
      { option: "Preserving biodiversity and protecting keystone species", "is_true": true },
      { option: "Ignoring the impact of invasive species on ecosystems", "is_true": false },
      { option: "Disrupting natural ecological balances", "is_true": false },
      { option: "Neglecting the conservation of endangered species", "is_true": false }
    ]
  },
  {
    question: "What supports sustainable supply chain management?",
    choices: [
      { option: "Implementing ethical sourcing practices", "is_true": true },
      { option: "Exploiting labor and resources in the supply chain", "is_true": false },
      { option: "Disregarding the environmental impact of production processes", "is_true": false },
      { option: "Neglecting transparency and accountability in the supply chain", "is_true": false }
    ]
  },
  {
    question: "What aligns with sustainable ocean conservation?",
    choices: [
      { option: "Establishing marine protected areas and preserving coral reefs", "is_true": true },
      { option: "Encouraging unregulated fishing in sensitive marine ecosystems", "is_true": false },
      { option: "Allowing excessive pollution in coastal areas", "is_true": false },
      { option: "Neglecting the impact of industrial runoff on marine life", "is_true": false }
    ]
  },
  {
    question: "Which practice supports sustainable energy-efficient housing?",
    choices: [
      { option: "Installing energy-saving appliances and insulation", "is_true": true },
      { option: "Building houses without regard for energy consumption", "is_true": false },
      { option: "Ignoring the impact of construction materials on energy usage", "is_true": false },
      { option: "Opting for energy-intensive heating and cooling systems", "is_true": false }
    ]
  },
  {
    question: "What contributes to sustainable community development?",
    choices: [
      { option: "Involving local residents in decision-making processes", "is_true": true },
      { option: "Imposing top-down development plans without community input", "is_true": false },
      { option: "Neglecting social and cultural aspects in development projects", "is_true": false },
      { option: "Allowing unchecked gentrification without affordable housing options", "is_true": false }
    ]
  },
  {
    question: "Which practice aligns with sustainable wildlife corridors?",
    choices: [
      { option: "Preserving and connecting habitats to facilitate species movement", "is_true": true },
      { option: "Fragmenting habitats through extensive construction projects", "is_true": false },
      { option: "Allowing urban sprawl to disrupt natural wildlife routes", "is_true": false },
      { option: "Neglecting the impact of human activities on wildlife migration paths", "is_true": false }
    ]
  },
  {
    question: "What supports sustainable environmental education?",
    choices: [
      { option: "Promoting hands-on learning about ecosystems and conservation", "is_true": true },
      { option: "Teaching without emphasizing the importance of environmental stewardship", "is_true": false },
      { option: "Neglecting to include environmental topics in educational curricula", "is_true": false },
      { option: "Allowing misinformation about environmental issues to spread unchecked", "is_true": false }
    ]
  },
  {
    question: "Which action supports sustainable carbon footprint reduction?",
    choices: [
      { option: "Implementing energy-saving practices in households and industries", "is_true": true },
      { option: "Encouraging excessive use of carbon-emitting transportation", "is_true": false },
      { option: "Ignoring the impact of carbon emissions on climate change", "is_true": false },
      { option: "Opting for energy sources with high carbon footprints", "is_true": false }
    ]
  }
]

const openedQuestions = [];
let score = 0;
const answerLabelsRandomName = [];

function generateRandomString(lenString) {
  lenString = lenString === undefined ? 7 : lenString;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

  let resultRandomString = '';

  for (var i = 0; i < lenString; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    resultRandomString += characters.substring(randomNumber, randomNumber + 1);
  }

  return resultRandomString;
}

const div1 = document.querySelector('body');
div1.className = "form-div";

//starting point
const startButton = document.createElement('button');
startButton.className = 'quiz-start-button';
startButton.textContent = "Start Quiz";
startButton.addEventListener('click', questionsPage);

div1.appendChild(startButton);

function questionsPage() {
  startButton.remove();

  const quizForm = document.createElement('form');
  quizForm.className = "quiz-form";
  quizForm.method = 'post';
  quizForm.action = 'javascript:void(0)';

  const heading = document.createElement('h1');
  heading.textContent = 'Quiz';
  div1.appendChild(quizForm);
  quizForm.appendChild(heading);

  let n = 3;
  let i = 0;
  
  while (i < n) {
    let random = Math.floor(Math.random() * questions.length);

    if (openedQuestions.includes(random))
      continue;

    openedQuestions.push(random);
    const questionDiv = document.createElement('div');
    questionDiv.className = "question-container";

    const qlabel = document.createElement('label');
    qlabel.className = "qlabel";
    qlabel.textContent = questions[random].question;

    questionDiv.appendChild(qlabel);

    const choiceDiv = document.createElement('div');

    questions[random].choices.forEach(choice => {
      const input = document.createElement('input');
      const randomName = generateRandomString(10);

      input.type = 'radio';
      input.value = choice.option;
      input.id = randomName;
      input.className = 'quiz-choice';
      input.required = true;
      input.name = `q${random + 1}`;

      const choiceLabel = document.createElement('label');
      choiceLabel.className = 'choice-label'; 
      choiceLabel.textContent = choice.option;
      choiceLabel.setAttribute('for', randomName);

      if(choice.is_true)
      answerLabelsRandomName.push(randomName);
      console.log();

      choiceDiv.appendChild(input);
      choiceDiv.appendChild(choiceLabel);
      choiceDiv.appendChild(document.createElement('br'));
    })


    questionDiv.appendChild(choiceDiv);
    quizForm.appendChild(questionDiv);
    div1.appendChild(quizForm);

    i++;
  }

  const submitButton = document.createElement('button');
  submitButton.id = 'submit-button';
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  quizForm.appendChild(submitButton);
  quizForm.addEventListener('submit', doValidation);

}

function doValidation(event) {
  event.preventDefault();

  for (let i = 0; i < openedQuestions.length; i++) {
    let answer = "";

    for (let n = 0; n < questions[openedQuestions[i]].choices.length; n++) {

      if (questions[openedQuestions[i]].choices[n].is_true) {
        answer = questions[openedQuestions[i]].choices[n].option;
        break;
      }

    }

    const userSelectedAnswer = document.querySelector(`input[name="q${openedQuestions[i] + 1}"]:checked`);

    if (userSelectedAnswer !== null && answer === userSelectedAnswer.value)
    {
      score++;
      // console.log(userSelectedAnswer);
      // const choiceLabel = document.querySelector(`label[for="${userSelectedAnswer.id}"]`);
      // if (choiceLabel !== null) {
      //   choiceLabel.classList.add('correct-answer');
      // }
    }
    else if(userSelectedAnswer !== null)
    {
      const choiceLabel = document.querySelector(`label[for="${userSelectedAnswer.id}"]`);
      if (choiceLabel !== null) {
        choiceLabel.classList.add('wrong-answer');
      }
    }
    
  }
  
  for(let m = 0; m < answerLabelsRandomName.length; m++)
  {
    const choiceLabel = document.querySelector(`label[for="${answerLabelsRandomName[m]}"]`);
    choiceLabel.classList.add('correct-answer');
  }

  const quizForm = document.querySelector('.quiz-form');

  const scoreCard = document.createElement('p');
  scoreCard.textContent = `You got ${score} / ${openedQuestions.length}`;

  quizForm.appendChild(scoreCard);

  const submitButton = document.querySelector('#submit-button');
  submitButton.remove();

  const reloadButton = document.createElement('button');
  reloadButton.type = 'reset';
  reloadButton.textContent = 'Restart';

  quizForm.appendChild(reloadButton);
  quizForm.addEventListener('reset', () => { window.location.reload() })
}