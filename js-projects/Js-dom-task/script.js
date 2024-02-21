// HEADER
const header = document.createElement('header');
const headerText = document.createElement('h3');

headerText.textContent = 'Enter user details';
header.appendChild(headerText);


// FORM

const inputDetails = [
    {label: 'ID', placeholder: 'id', id:'id'},
    {label: 'Name', placeholder: 'name', id:'name'},
    {label:'Role', placeholder: 'role', id:'role'}
];

const div1 = document.createElement('div');
div1.classList.add('div1')

const form = document.createElement('form');

inputDetails.forEach (function (detail) {
    const label = document.createElement('label');
    label.textContent = detail.label + ' : ';

    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('placeholder', detail.placeholder);
    inputEl.setAttribute('id', detail.id);
    
    form.appendChild(label);
    form.appendChild(inputEl);
    
    form.appendChild(document.createElement('br'));
});

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Add Data';

document.body.appendChild(header);
document.body.appendChild(div1);
div1.appendChild(form);
form.appendChild(buttonEl);


// FILER 

const filterInput = document.createElement('input');
filterInput.setAttribute('type', 'text');
filterInput.setAttribute('placeholder', 'Search...');

document.body.appendChild(filterInput);

filterInput.addEventListener('input', function (event) {
    const searchText = event.target.value.toLowerCase();

    table.querySelectorAll('tr').forEach(function (row, index) {
        if (index === 0) return; 

        const rowData = Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.toLowerCase());
        const rowMatches = rowData.some(data => data.includes(searchText));

        row.style.display = rowMatches ? 'table-row' : 'none';
    });
});

// SORT

const sortSelect = document.createElement('select');

const sortOptions = ['Sort by ID', 'Sort by Name', 'Sort by Role'];
sortOptions.forEach(optionText => {
    const option = document.createElement('option');
    option.textContent = optionText;
    sortSelect.appendChild(option);
});

document.body.appendChild(sortSelect);

sortSelect.addEventListener('change', function (event) {
    const sortCriteria = event.target.value;

    let columnIndex;
    if (sortCriteria === 'Sort by ID') { } 
    
    else if (sortCriteria === 'Sort by Name') {
        columnIndex = 1; 
    } 
    
    else if (sortCriteria === 'Sort by Role') {
        columnIndex = 2; 
    }

    const rows = Array.from(table.querySelectorAll('tr')).slice(1);

    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.toLowerCase();
        const bValue = b.cells[columnIndex].textContent.toLowerCase();
        return aValue.localeCompare(bValue);
    });

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    rows.forEach(row => table.appendChild(row));
});


//   TABLE 

const table = document.createElement('table');
table.classList.add('table');

const tr = document.createElement('tr');
table.appendChild(tr);

inputDetails.forEach(function (tableHeading) {
    const th = document.createElement('th');
    th.textContent = tableHeading.label;
    tr.appendChild(th);
})

const thEdit = document.createElement('th');
thEdit.textContent = 'Actions';
tr.appendChild(thEdit);


table.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        const row = target.closest('tr');

        if (target.textContent === 'EDIT') {
            target.textContent = 'SAVE';

            row.querySelectorAll('td').forEach(function (cell, index) {
                if (index !== row.cells.length - 1) { 
                    const text = cell.textContent;
                    cell.innerHTML = `<input type="text" value="${text}">`;
                }
            });
        } 
        
        else if (target.textContent === 'SAVE') {
            target.textContent = 'EDIT';

            row.querySelectorAll('input').forEach(function (input, index) {
                if (index !== row.cells.length - 1) { 
                    row.cells[index].textContent = input.value;
                }
            });
        } 
        
        else if (target.textContent === 'DELETE') {
            if (confirm('Confirm delete?')) {
                row.remove();
            }
        }
    }
});


function addTableRow(data) {
    const newRow = document.createElement('tr');

    inputDetails.forEach(function (detail) {
        const cell = document.createElement('td');
        cell.textContent = data[detail.label.toLowerCase()];
        newRow.appendChild(cell);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'EDIT';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';

    const actionCell = document.createElement('td');
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    table.appendChild(newRow);
}

let currentPage = 1;
let itemsPerPage = 5; 

function displayItemsForPage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const rows = Array.from(table.querySelectorAll('tr')).slice(1); // Exclude header row

    rows.forEach((row, index) => {
        if (index >= startIndex && index < endIndex) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}


function updatePagination() {
    const totalRows = table.rows.length - 1; 
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    currentPageDisplay.textContent = `Page ${currentPage} of ${totalPages}`;

    previousButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    if (totalRows === 0) {
        currentPage = 1;
    }

    displayItemsForPage();
}


const paginationControls = document.createElement('div');
paginationControls.classList.add('pagination-controls');

const previousButton = document.createElement('button');
previousButton.textContent = 'Previous';
previousButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => {
    const totalRows = table.rows.length - 1; // Exclude header row
    const totalPages = Math.ceil(totalRows / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

const itemsPerPageSelect = document.createElement('select');
itemsPerPageSelect.addEventListener('change', () => {
    itemsPerPage = parseInt(itemsPerPageSelect.value);
    currentPage = 1;
    updatePagination();
});

[5, 10, 15].forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = `${value} per page`;
    itemsPerPageSelect.appendChild(option);
});

const currentPageDisplay = document.createElement('span');

paginationControls.appendChild(previousButton);
paginationControls.appendChild(nextButton);
paginationControls.appendChild(itemsPerPageSelect);
paginationControls.appendChild(currentPageDisplay);
document.body.appendChild(paginationControls);

updatePagination();

// EVENT LISTENER

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {};
    inputDetails.forEach(function (detail) {
        formData[detail.label.toLowerCase()] = document.getElementById(detail.id).value;
    });

    addTableRow(formData);
    form.reset();
});


// BODY

document.body.appendChild(table);
