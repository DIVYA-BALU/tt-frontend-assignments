const studentsData = [
  { name: "John Doe", subject: "Math", marks: 85 },
  { name: "Jane Doe", subject: "Science", marks: 92 },
  { name: "Alice Smith", subject: "English", marks: 78 },
  { name: "Bob Johnson", subject: "History", marks: 90 },
  { name: "Eva Davis", subject: "Physics", marks: 88 },
  { name: "Chris Brown", subject: "Chemistry", marks: 76 },
  { name: "Emma Wilson", subject: "Biology", marks: 95 },
  { name: "Frank Miller", subject: "Geography", marks: 82 },
  { name: "Grace Taylor", subject: "Computer Science", marks: 89 },
  { name: "Taylor", subject: "Computer Science", marks: 89 },
  { name: "Bare", subject: "Computer Science", marks: 89 },
  { name: "Kary", subject: "Computer Science", marks: 89 },
  { name: "Brad", subject: "Computer Science", marks: 89 },
  { name: "Wales", subject: "Computer Science", marks: 89 },
  { name: "Peter", subject: "Computer Science", marks: 89 },
  { name: "Maya", subject: "Computer Science", marks: 89 },
  { name: "Maria", subject: "Computer Science", marks: 89 },
  { name: "Taylor", subject: "Computer Science", marks: 89 },
  { name: "Henry Martin", subject: "Economics", marks: 93 },
  { name: "Isabel Turner", subject: "Art", marks: 70 },
  { name: "Jack Harris", subject: "Music", marks: 87 },
  { name: "Kelly Robinson", subject: "Physical Education", marks: 84 },
  { name: "Leo White", subject: "Political Science", marks: 91 },
  { name: "Mia Clark", subject: "Psychology", marks: 79 },
  { name: "Nathan Green", subject: "Sociology", marks: 88 },
  { name: "Olivia Baker", subject: "Philosophy", marks: 75 },
  { name: "Peter Young", subject: "Environmental Science", marks: 94 },
  { name: "Quinn Hill", subject: "Foreign Languages", marks: 86 },
  { name: "Rachel Reed", subject: "Engineering", marks: 97 },
];

const divEl = document.getElementById("container");

createTable();

function createTable() {
  tableEl = document.createElement("table");
  tableEl.setAttribute("class", "table table-hover");
  divEl.appendChild(tableEl);

  const rowEl = document.createElement("tr");
  tableEl.appendChild(rowEl);

  const headEl1 = document.createElement("th");
  headEl1.textContent = "NAME";
  rowEl.appendChild(headEl1);

  const headEl2 = document.createElement("th");
  headEl2.textContent = "SUBJECT";
  rowEl.appendChild(headEl2);

  const headEl3 = document.createElement("th");
  headEl3.textContent = "MARKS";
  rowEl.appendChild(headEl3);

  const tbodyEl = document.createElement("tbody");
  tbodyEl.id = "body-container";
  tableEl.appendChild(tbodyEl);
}

// function addRow() {
//   const rowEl = document.createElement("tr");
//   tableEl.appendChild(rowEl);

//   const len = totalCol();
//   console.log(len);

//   for (let i = 0; i < len; i++) {
//     const col = document.createElement("td");
//     rowEl.appendChild(col);
//   }
// }

// function addCol() {
//   const rowEl = document.querySelectorAll("tr");

//   if (rowEl != null) {
//     for (let i = 0; i < rowEl.length; i++) {
//       const colEl = document.createElement("td");
//       rowEl[i].appendChild(colEl);
//     }
//   }
// }

function totalCol() {
  const colEl = document.querySelectorAll("th");

  let length = 0;

  if (colEl != null) {
    length = colEl.length;
  }

  return length;
}

const paginationEl = document.getElementById("pagination");
const filterPaginationEl = document.getElementById("filterPagination");

const valuesPerPage = 5;
let startPage = 1;

function createPagination() {
  const noOfValues = studentsData.length;
  const totalPage = Math.round(noOfValues / valuesPerPage);

  displayValue(startPage);

  for (let i = 1; i <= totalPage; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.addEventListener("click", () => {
      startPage = i;
      li.setAttribute("class", "active");
      removeValue();
      displayValue(startPage);
    });

    paginationEl.appendChild(li);
  }
}

function removeValue() {
  const tbodyEl = document.getElementById("body-container");
  tbodyEl.innerHTML = "";
}

function displayValue(page) {
  const start = (page - 1) * valuesPerPage;
  let end = start + valuesPerPage;

  const tbodyElement = document.getElementById("body-container");

  if (studentsData.length < end) {
    end = studentsData.length;
  }

  for (let i = start; i < end; i++) {
    const rowEl = document.createElement("tr");

    const len = totalCol();

    const properties = ["name", "subject", "marks"];
    for (let j = 0; j < len; j++) {
      const col = document.createElement("td");
      rowEl.appendChild(col);

      const inputEl = document.createElement("input");
      inputEl.type = "text";
      inputEl.setAttribute("class", "input");
      inputEl.setAttribute("value", studentsData[i][properties[j]]);

      inputEl.addEventListener("change", () => {
        const newValue = inputEl.value;
        studentsData[i][properties[j]] = newValue;
      });
      col.appendChild(inputEl);
    }
    tbodyElement.appendChild(rowEl);
  }
}

createPagination();

function sortTable(key) {
  if (key === "name") {
    studentsData.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (key === "subject") {
    studentsData.sort((a, b) => {
      const subA = a.subject.toLowerCase();
      const subB = b.subject.toLowerCase();

      if (subA < subB) {
        return -1;
      } else if (subA > subB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (key === "marks") {
    studentsData.sort((a, b) => {
      const markA = a.marks;
      const markB = b.marks;

      if (markA < markB) {
        return -1;
      } else if (markA > markB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  removeValue();
  displayValue(startPage);
}

let filteredValues = [];

function filter() {
  filteredValues = [];

  paginationEl.style.display = "none";

  const inputEl = document.getElementById("filterMark");

  studentsData.filter((element) => {
    if (element.marks === Number(inputEl.value)) {
      filteredValues.push(element);
    }
  });

  createFilterPagination();
}

function createFilterPagination() {
  const noOfValues = filteredValues.length;
  const totalPage = Math.round(noOfValues / valuesPerPage);
  console.log(totalPage);

  removeValue();
  displayFilterValue(1);

  for (let i = 1; i <= totalPage; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.addEventListener("click", () => {
      startPage = i;
      removeValue();
      displayFilterValue(startPage);
    });

    filterPaginationEl.appendChild(li);
  }
}

function displayFilterValue(page) {
  const start = (page - 1) * valuesPerPage;
  let end = start + valuesPerPage;

  const tbodyElement = document.getElementById("body-container");

  if (filteredValues.length < end) {
    end = filteredValues.length;
  }

  for (let i = start; i < end; i++) {
    const rowEl = document.createElement("tr");

    const properties = ["name", "subject", "marks"];
    for (let j = 0; j < 3; j++) {
      const col = document.createElement("td");
      col.textContent = filteredValues[i][properties[j]];
      rowEl.appendChild(col);
    }
    tbodyElement.appendChild(rowEl);
  }
}
