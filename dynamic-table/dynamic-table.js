const headers = ["Student", "Age", "Score"];
const data = [
  { student: "John", age: 25, score: 85 },
  { student: "Alice", age: 30, score: 92 },
  { student: "Bob", age: 28, score: 78 },
  { student: "Emily", age: 35, score: 88 },
  { student: "Michael", age: 27, score: 95 },
  { student: "Sophia", age: 32, score: 87 }
];

sortData('age');

const body = document.querySelector('body');
const tableDiv = document.createElement('div');
tableDiv.classstudent = 'tableContainer';
const table = document.createElement('table');
tableDiv.appendChild(table);
body.appendChild(tableDiv);

let currentPage = 1;
let totalPages = 0;
const paginationOptions = [5, 10, 15];
let paginationOption = paginationOptions[0];
const paginatorDiv = document.createElement('div');
const paginatorDropdown = document.createElement('select');

paginatorDropdown.addEventListener('change', () => {
  paginationOption = paginatorDropdown.value;
  buildTable();
})

paginationOptions.forEach((paginationOption) => {
  const option = document.createElement('option');
  option.textContent = paginationOption;
  paginatorDropdown.appendChild(option);
})

paginatorDiv.appendChild(paginatorDropdown);
body.appendChild(paginatorDiv);

const prevPageButton = document.createElement('button');
prevPageButton.textContent = 'Prev';
prevPageButton.disabled = true;

prevPageButton.addEventListener('click', () => {
  currentPage--;
  console.log("prevButton");
  console.log(currentPage);
  checkButtons();
  buildTable();
});

const nextPageButton = document.createElement('button');
nextPageButton.textContent = 'Next';
nextPageButton.addEventListener('click', () => {
  if (currentPage === 1)
    prevPageButton.disabled = false;

  currentPage++;
  console.log("nextButton");
  console.log(currentPage);
  checkButtons();
  buildTable();
});

paginatorDiv.appendChild(prevPageButton);
paginatorDiv.appendChild(nextPageButton);

sortingOptions = ['student', 'age', 'score'];
const sortingDiv = document.createElement('div');
const sortingDropdown = document.createElement('select');

sortingDropdown.addEventListener('change', () => {
  sortData(sortingDropdown.value);
  buildTable();
})

sortingOptions.forEach((sortingOption) => {
  const option = document.createElement('option');
  option.textContent = `Sort by ${sortingOption}`;
  sortingDropdown.appendChild(option);
})

body.appendChild(sortingDropdown);
buildTable();

const filterDiv = document.createElement('div');
const filterDropdown = document.createElement('select');

sortingOptions.forEach((filterOption) => {
  const option = document.createElement('option');
  option.textContent = filterOption;
  filterDropdown.appendChild(option);
})

const applyFilterButton = document.createElement('button');
applyFilterButton.textContent = 'Apply Filter';
const searchText = document.createElement('input');
searchText.type = 'text';

applyFilterButton.addEventListener('click',() => {
  filteredData = data.filter((currentData) => {
    if(typeof currentData[filterDropdown.value] === "number"){
      if(currentData[filterDropdown.value] === parseInt(searchText.value))
    return true;
    }
    if(currentData[filterDropdown.value] === searchText.value)
    return true;
  });
  console.log(filteredData);
})

filterDiv.appendChild(filterDropdown);
filterDiv.appendChild(searchText);
filterDiv.appendChild(applyFilterButton);
body.appendChild(filterDiv);

function sortData(column, order = 'asc') {
  data.sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    if (typeof valueA === 'string') {
      return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    }

  });
}

function checkButtons() {
  if (currentPage === 1) {
    prevPageButton.disabled = true;
  }

  if (currentPage >= data.length / paginationOption) {
    nextPageButton.disabled = true;
  }

  else
    nextPageButton.disabled = false;
}

function buildTable() {
  const previousRowsDiv = document.querySelector('.rows-div');
  if (previousRowsDiv) {
    table.removeChild(previousRowsDiv);
  }

  const startIndex = (currentPage - 1) * paginationOption;
  const endIndex = startIndex + paginationOption - 1;
  const currentPageData = data.slice(startIndex, endIndex);
  const rowsDiv = document.createElement('div');
  rowsDiv.className = 'rows-div'

  const headerRow = document.createElement('tr');
  rowsDiv.appendChild(headerRow);
  headers.forEach((header) => {
    const headerCell = document.createElement('th');
    headerCell.textContent = header;
    headerRow.appendChild(headerCell);
  })

  table.appendChild(rowsDiv);
  currentPageData.forEach((currentData) => {
    const row = document.createElement("tr");
    rowsDiv.appendChild(row);

    headers.forEach((header) => {
      const cell = document.createElement('td');
      const input1 = document.createElement('input');
      input1.value = currentData[header.toLowerCase()];
      input1.addEventListener('input', () => {
        currentData[header.toLowerCase()] = input1.value;
      });
      cell.appendChild(input1);
      row.appendChild(cell);
    });
  })
}