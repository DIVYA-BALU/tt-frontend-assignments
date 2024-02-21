const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Alice Smith', email: 'alice@example.com' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com' },
    { id: 5, name: 'Michael Jordan', email: 'michael@example.com' },
    { id: 6, name: 'LeBron James', email: 'lebron@example.com' },
    { id: 7, name: 'Kobe Bryant', email: 'kobe@example.com' },
    { id: 8, name: 'Steph Curry', email: 'steph@example.com' },
    { id: 9, name: 'Kevin Durant', email: 'kevin@example.com' },
    { id: 10, name: 'James Harden', email: 'jamesh@example.com' },
    { id: 11, name: 'Russell Westbrook', email: 'russellw@example.com' },
    { id: 12, name: 'Kawhi Leonard', email: 'kawhi@example.com' },
    { id: 13, name: 'Giannis Antetokounmpo', email: 'giannis@example.com' },
    { id: 14, name: 'Anthony Davis', email: 'anthony@example.com' },
    { id: 15, name: 'Chris Paul', email: 'chris@example.com' }
];

let perPage = 5;
let currentPage = 1;
let currentSortColumn = null;
let currentSortOrder = null;

const tableContainer = document.createElement('div');
tableContainer.id = 'tableContainer';

const dataTable = document.createElement('table');
dataTable.id = 'dataTable';

const tableHead = document.createElement('thead');
const headRow = document.createElement('tr');

const headers = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
];

headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header.label;
    th.addEventListener('click', () => sortColumn(header.key));
    headRow.appendChild(th);
});

tableHead.appendChild(headRow);
dataTable.appendChild(tableHead);

const tableBody = document.createElement('tbody');
tableBody.id = 'tableBody';
dataTable.appendChild(tableBody);

const paginationContainer = document.createElement('div');
paginationContainer.id = 'pagination';

tableContainer.appendChild(dataTable);
tableContainer.appendChild(paginationContainer);
document.body.appendChild(tableContainer);

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search by name...';
searchInput.addEventListener('input', handleSearch);

tableContainer.insertBefore(searchInput, dataTable);

function renderTable(page, filteredData) {
    tableBody.innerHTML = '';

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedData = filteredData ? filteredData.slice(start, end) : data.slice(start, end);

    paginatedData.forEach(item => {
        const row = document.createElement('tr');

        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = item[header.key];
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

function renderPagination(filteredData) {
    const totalData = filteredData ? filteredData.length : data.length;
    const totalPages = Math.ceil(totalData / perPage);
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = function () {
            currentPage = i;
            renderTable(currentPage, filteredData);
            renderPagination(filteredData);
        };
        paginationContainer.appendChild(button);
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(query)
    );
    renderTable(currentPage, filteredData);
    renderPagination(filteredData);
}

function sortColumn(column) {
    if (currentSortColumn === column) {
        currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        currentSortColumn = column;
        currentSortOrder = 'asc';
    }

    const sortedData = data.slice().sort((a, b) => {
        const valueA = a[column].toUpperCase();
        const valueB = b[column].toUpperCase();

        if (valueA < valueB) return currentSortOrder === 'asc' ? -1 : 1;
        if (valueA > valueB) return currentSortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    renderTable(currentPage, sortedData);
}

renderTable(currentPage);
renderPagination();
