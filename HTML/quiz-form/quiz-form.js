const questions = [
  {
    "question": "Which of the following is an example of a sustainable practice?",
    "choices": [
      "Implementing renewable energy sources in manufacturing processes",
      "Increasing single-use plastic production",
      "Expanding deforestation for agricultural purposes",
      "Maximizing fossil fuel consumption in transportation"
    ],
    "solution": "Implementing renewable energy sources in manufacturing processes"
  },
  {
    "question": "Which action contributes positively to environmental sustainability?",
    "choices": [
      "Promoting recycling initiatives within a community",
      "Dumping hazardous waste in water bodies",
      "Using non-renewable resources excessively",
      "Burning forests for land clearance"
    ],
    "solution": "Promoting recycling initiatives within a community"
  },
  {
    "question": "What aligns with sustainable resource management?",
    "choices": [
      "Careful monitoring and preservation of freshwater sources",
      "Dumping industrial waste in rivers",
      "Overfishing without limits",
      "Clear-cutting forests without reforestation plans"
    ],
    "solution": "Careful monitoring and preservation of freshwater sources"
  },
  {
    "question": "Which practice is conducive to sustainable agriculture?",
    "choices": [
      "Crop rotation and soil enrichment techniques",
      "Massive pesticide and herbicide use",
      "Monoculture farming with no crop diversity",
      "Using genetically modified organisms extensively"
    ],
    "solution": "Crop rotation and soil enrichment techniques"
  },
  {
    "question": "What supports sustainable waste management?",
    "choices": [
      "Implementing comprehensive recycling programs",
      "Incinerating all waste without sorting",
      "Dumping garbage in open spaces",
      "Landfilling hazardous materials without containment measures"
    ],
    "solution": "Implementing comprehensive recycling programs"
  },
  {
    "question": "Which approach promotes sustainable transportation?",
    "choices": [
      "Developing efficient public transport systems",
      "Relying solely on personal vehicles for commuting",
      "Constructing highways through natural habitats",
      "Using outdated, fuel-inefficient vehicles"
    ],
    "solution": "Developing efficient public transport systems"
  },
  {
    "question": "What supports sustainable consumption?",
    "choices": [
      "Opting for products with minimal packaging",
      "Purchasing single-use plastic items in bulk",
      "Preferring products with excessive plastic packaging",
      "Buying disposable items without considering alternatives"
    ],
    "solution": "Opting for products with minimal packaging"
  },
  {
    "question": "Which action contributes to sustainable energy use?",
    "choices": [
      "Investing in solar panel installations",
      "Relying solely on fossil fuels",
      "Building more coal-powered plants",
      "Disregarding energy conservation practices"
    ],
    "solution": "Investing in solar panel installations"
  },
  {
    "question": "What supports sustainable urban development?",
    "choices": [
      "Creating green spaces and parks within cities",
      "Expanding urbanization without regard for ecosystems",
      "Constructing buildings without energy-efficient designs",
      "Promoting heavy industrialization within city limits"
    ],
    "solution": "Creating green spaces and parks within cities"
  },
  {
    "question": "Which practice promotes sustainable forest management?",
    "choices": [
      "Implementing selective logging techniques with reforestation plans",
      "Clear-cutting forests without reforestation efforts",
      "Ignoring the impact of logging on biodiversity",
      "Expanding logging operations without regulations"
    ],
    "solution": "Implementing selective logging techniques with reforestation plans"
  },
  {
    "question": "What aligns with sustainable fishing practices?",
    "choices": [
      "Adhering to fishing quotas and seasonal bans",
      "Overfishing without limitations",
      "Using destructive fishing methods",
      "Ignoring the impact on endangered species"
    ],
    "solution": "Adhering to fishing quotas and seasonal bans"
  },
  {
    "question": "Which action supports sustainable water conservation?",
    "choices": [
      "Implementing water-saving measures in agriculture",
      "Wastefully using water resources without consideration",
      "Discharging untreated sewage into water bodies",
      "Diverting water from natural habitats excessively"
    ],
    "solution": "Implementing water-saving measures in agriculture"
  },
  {
    "question": "What contributes to sustainable wildlife preservation?",
    "choices": [
      "Protecting natural habitats from encroachment",
      "Hunting endangered species for commercial purposes",
      "Allowing invasive species to dominate ecosystems",
      "Neglecting conservation efforts in wildlife reserves"
    ],
    "solution": "Protecting natural habitats from encroachment"
  },
  {
    "question": "Which practice supports sustainable construction?",
    "choices": [
      "Utilizing eco-friendly building materials",
      "Constructing buildings without energy efficiency considerations",
      "Ignoring the impact on local ecosystems",
      "Opting for high-resource consumption in construction"
    ],
    "solution": "Utilizing eco-friendly building materials"
  },
  {
    "question": "What aligns with sustainable land use?",
    "choices": [
      "Implementing land conservation and preservation strategies",
      "Expanding urban sprawl without planning",
      "Using land unsustainably for monoculture farming",
      "Ignoring the impact of development on ecosystems"
    ],
    "solution": "Implementing land conservation and preservation strategies"
  },
  {
    "question": "Which action supports sustainable tourism?",
    "choices": [
      "Promoting responsible travel and minimizing environmental impact",
      "Encouraging excessive waste generation in tourist areas",
      "Allowing unrestricted development in ecologically sensitive areas",
      "Neglecting cultural and environmental preservation in tourist destinations"
    ],
    "solution": "Promoting responsible travel and minimizing environmental impact"
  },
  {
    "question": "What contributes to sustainable food production?",
    "choices": [
      "Implementing organic farming methods",
      "Relying solely on intensive chemical-based agriculture",
      "Using excessive amounts of pesticides and fertilizers",
      "Neglecting soil health and biodiversity in farming practices"
    ],
    "solution": "Implementing organic farming methods"
  },
  {
    "question": "Which practice aligns with sustainable ecosystem management?",
    "choices": [
      "Preserving biodiversity and protecting keystone species",
      "Ignoring the impact of invasive species on ecosystems",
      "Disrupting natural ecological balances",
      "Neglecting the conservation of endangered species"
    ],
    "solution": "Preserving biodiversity and protecting keystone species"
  },
  {
    "question": "What supports sustainable supply chain management?",
    "choices": [
      "Implementing ethical sourcing practices",
      "Exploiting labor and resources in the supply chain",
      "Disregarding the environmental impact of production processes",
      "Neglecting transparency and accountability in the supply chain"
    ],
    "solution": "Implementing ethical sourcing practices"
  }
]

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

function questionsPage(){
  startButton.remove();

  const quizForm = document.createElement('form');
  quizForm.className = "quiz-form";
  quizForm.method = 'post';
  quizForm.action = 'javascript:void(0)';
  
  const heading = document.createElement('h1');
  heading.textContent = 'Quiz';
  div1.appendChild(quizForm);
  quizForm.appendChild(heading);

  let n = 10;
  for(let i = 0; i<n; i++)
  {
  let random = Math.floor(Math.random() * questions.length);
  const questionDiv = document.createElement('div');
  questionDiv.className = "question-container";

  const qlabel = document.createElement('label');
  qlabel.className = "qlabel";
  qlabel.textContent = questions[random].question;

  questionDiv.appendChild(qlabel);

  const choiceDiv = document.createElement('div');

  console.log(random+1);
  questions[i].choices.forEach(choice => {
    const input = document.createElement('input');
    const randomName = generateRandomString(10);

    input.type = 'radio';
    input.value = choice;
    input.id = randomName;
    input.className = 'quiz-choice';
    input.required = true;
    input.name = `q${random + 1}`;

    const choiceLabel = document.createElement('label');
    choiceLabel.textContent = choice;
    choiceLabel.setAttribute('for',randomName);
    
    choiceDiv.appendChild(input);
    choiceDiv.appendChild(choiceLabel);
    choiceDiv.appendChild(document.createElement('br'));
    
  })
  
  
  questionDiv.appendChild(choiceDiv);
  quizForm.appendChild(questionDiv);
  div1.appendChild(quizForm);
}
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  quizForm.appendChild(submitButton);
  submitButton.addEventListener('click')
}

