/*=========================
    utility fuction
=========================*/

function createElement(elementType, attributes = {}) {
    const element = document.createElement(elementType);

    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key])
    })

    return element;
}

function appendChildren(parent, children) {

    children.forEach(child => parent.appendChild(child));

}

function createTableElement(elementType, text) {
    const element = createElement(elementType);
    element.textContent = text;
    return element;
}

/*=========================
    structural functions
=========================*/

function createTable(datas) {
    const table = createElement('table', { class: 'product-table' });
    const thead = createTableHeader();
    const tbody = createTableBody(datas);
    appendChildren(table, [thead, tbody]);
    return table;
}

function createTableHeader() {
    const thead = createElement('thead', { class: 'table-header' });
    const tr = createElement('tr');
    const headers = ['ID', 'Title', 'Price', 'Description', 'Category'];

    const ths = headers.map(header => createTableElement('th', header));

    appendChildren(tr, ths);
    thead.appendChild(tr);
    return thead;
}

function createTableBody(data) {
    const tbody = createElement('tbody', { class: 'table-body' });

    data.forEach(row => {
        const tr = createElement('tr');
        const tds = Object.values(row).map(value => createTableElement('td', value));
        appendChildren(tr, tds);
        tbody.appendChild(tr);
    });

    return tbody;
}

function createSortByDropdown() {
    const sortDropDowns = createElement('div', { class: 'sort-dropdowns' });
    const label = createElement('label', { for: 'sort-by' });
    label.textContent = 'Sort By:';
    const select = createElement('select', { class: 'sort-by' });
    const options = ['ID', 'Title', 'Price', 'Description', 'Category'];

    options.forEach(option => {
        const element = createElement('option', { value: option });
        element.textContent = option;
        select.appendChild(element);
    });

    appendChildren(sortDropDowns, [label, select]);
    return sortDropDowns;
}

function createFilterByDropdown() {
    const filterDropDowns = createElement('div', { class: 'filter-dropdowns' });
    const categoryLabel = createElement('label', { for: 'filter-category' });
    categoryLabel.textContent = 'Filter by Category:';
    const categorySelect = createElement('select', { id: 'filter-category', class: 'filter-category' });
    const categoryOptions = ['All', 'Category A', 'Category B', 'Category C'];

    categoryOptions.forEach(option => {
        const element = createElement('option', { value: option });
        element.textContent = option;
        categorySelect.appendChild(element);
    });

    appendChildren(filterDropDowns, [categoryLabel, categorySelect]);
    return filterDropDowns;
}

function createPagination() {
    const pagination = createElement('div', { class: 'pagination' });
    const prev = createElement('button', { class: 'prev', id: 'prev' });
    prev.textContent = 'Prev';
    const pageNumber = createElement('span', { class: 'page-number', id: 'page-number' });
    pageNumber.innerHTML = 'Page <span class="current-page"> 1 </span> of <span class="total-page">13</span>';
    const next = createElement('button', { class: 'next', id: 'next' });
    next.textContent = 'Next';
    appendChildren(pagination, [prev, pageNumber, next]);
    return pagination;
}


/*=========================
main function call
=========================*/
const tabledatas = getDatas();
const root = document.querySelector('#app-root');

const table = createTable(tabledatas);
const sortByDropdown = createSortByDropdown();
const filterByDropdown = createFilterByDropdown();
const pagenationDiv = createPagination();

root.appendChild(sortByDropdown);
root.appendChild(filterByDropdown);
root.appendChild(table);
root.appendChild(pagenationDiv);

/*=========================
    important variables
=========================*/

const itemsPerPage = 3;
let currentPageIndex = 1;
let displayedDatas = tabledatas.slice();
let fileteredDatas = []
let paginatedDatas = [];
let totalPageIndex = Math.ceil(displayedDatas.length / itemsPerPage);
const pagination = document.querySelector('.pagination');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sortBy = document.querySelector('.sort-by');
const filterBy = document.querySelector('.filter-category');
const mainBody = document.querySelector('.table-body')

/*=========================
    initial  render
=========================*/
renderTable();

/*=========================
    event listeners
=========================*/

prevButton.addEventListener('click', previousPage);
nextButton.addEventListener('click', nextPage);
sortBy.addEventListener('change', sortFunction);
filterBy.addEventListener('change', filterFunction);


/*===================================
    dynamic structural functions
===================================*/

//sort data
function sortFunction(event) {
    let sortBy = event.target.value;
    sortBy = sortBy.toLowerCase();
    displayedDatas = displayedDatas.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }
        return 0;
    });
    renderTable();
}

//next page
function nextPage() {
    currentPageIndex++;
    renderTable();
}

//previous page
function previousPage() {
    currentPageIndex--;
    renderTable();
}

//render table
function renderTable() {
    const mainTable = document.querySelector('.product-table');

    const startIndex = (currentPageIndex - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    paginatedDatas = displayedDatas.slice(startIndex, endIndex);
    const newTable = createTable(paginatedDatas);

    if (currentPageIndex === 1) {
        prevButton.disabled = true;
    }
    else {
        prevButton.disabled = false;
    }

    if (currentPageIndex === totalPageIndex) {
        nextButton.disabled = true;
    }
    else {
        nextButton.disabled = false;
    }

    updatePagination();

    root.replaceChild(newTable, mainTable);

    const cells = document.querySelectorAll('td');

    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            const originalText = this.textContent;

            const input = document.createElement('input');
            input.type = 'text';
            input.value = originalText;

            this.textContent = '';
            this.appendChild(input);

            input.focus();

            input.addEventListener('blur', function () {
                const newText = this.value;
                this.parentElement.textContent = newText;
            });
        });
    });
}

//update pagination
function updatePagination() {
    const currentPage = document.querySelector('.current-page');
    const totalPage = document.querySelector('.total-page');
    totalPageIndex = Math.ceil(displayedDatas.length / itemsPerPage);
    currentPage.textContent = currentPageIndex;
    totalPage.textContent = totalPageIndex;
}

//filter data
function filterFunction(event) {
    const filter = event.target.value;

    if (filter !== 'All') {

        fileteredDatas = tabledatas.filter(
            (data) => {
                if (data['category'] === filter) {
                    return data;
                }
            }
        );

        displayedDatas = fileteredDatas;
    } else {
        displayedDatas = tabledatas;
    }
    currentPageIndex = 1;

    renderTable();
}








