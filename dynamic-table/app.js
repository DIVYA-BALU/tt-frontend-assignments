const formDetails = [
    {
        name: 'rollNumber',
        type: 'number',
        title: 'Roll Number',
        id: 'roll_number'
    },
    {
        name: 'firstName',
        type: 'text',
        title: 'First Name',
        id: 'first_name'
    },
    {
        name: 'lastName',
        type: 'text',
        title: 'Last Name',
        id: 'last_name'
    },
    {
        name: 'department',
        type: 'text',
        title: 'Department',
        id: 'department'
    },
    {
        name: 'age',
        type: 'number',
        title: 'Age',
        id: 'age'
    }
];

const studentDetails = [
    { roll_number: 101, first_name: "John", last_name: "Doe", department: "Computer Science", age: 20 },
    { roll_number: 102, first_name: "Jane", last_name: "Smith", department: "Electrical Engineering", age: 21 },
    { roll_number: 103, first_name: "Bob", last_name: "Johnson", department: "Mechanical Engineering", age: 19 },
    { roll_number: 104, first_name: "Alice", last_name: "Williams", department: "Civil Engineering", age: 22 },
    { roll_number: 105, first_name: "Charlie", last_name: "Brown", department: "Computer Science", age: 20 },
    { roll_number: 106, first_name: "Eva", last_name: "Miller", department: "Physics", age: 23 },
    { roll_number: 107, first_name: "David", last_name: "Davis", department: "Electrical Engineering", age: 21 },
    { roll_number: 108, first_name: "Grace", last_name: "Taylor", department: "Civil Engineering", age: 20 },
    { roll_number: 109, first_name: "Frank", last_name: "Harris", department: "Mechanical Engineering", age: 22 },
    { roll_number: 110, first_name: "Helen", last_name: "Clark", department: "Physics", age: 23 },
    { roll_number: 111, first_name: "Ian", last_name: "Anderson", department: "Computer Science", age: 21 },
    { roll_number: 112, first_name: "Jessica", last_name: "Moore", department: "Physics", age: 20 },
    { roll_number: 113, first_name: "Kevin", last_name: "Carter", department: "Civil Engineering", age: 22 },
    { roll_number: 114, first_name: "Laura", last_name: "Martin", department: "Electrical Engineering", age: 21 },
    { roll_number: 115, first_name: "Morgan", last_name: "Wright", department: "Mechanical Engineering", age: 23 },
    { roll_number: 116, first_name: "Nancy", last_name: "Lee", department: "Computer Science", age: 20 },
    { roll_number: 117, first_name: "Oscar", last_name: "Brown", department: "Physics", age: 21 },
    { roll_number: 118, first_name: "Pamela", last_name: "Green", department: "Civil Engineering", age: 22 },
    { roll_number: 119, first_name: "Quincy", last_name: "Evans", department: "Electrical Engineering", age: 23 },
    { roll_number: 120, first_name: "Randy", last_name: "Turner", department: "Computer Science", age: 20 }
];

const sortState = {
    columnId: null,
    ascending: true,
};



const rowsPageSelectEl = document.createElement('select');
rowsPageSelectEl.innerHTML = `<option value=${studentDetails.length+1}>All</option><option value="5">5 per page</option><option value="10">10 per page</option><option value="15">15 per page</option>`;
rowsPageSelectEl.addEventListener('change', handleRowsPerPageChange);

const formEl = document.createElement('form');
formEl.title = 'Add User form';
createForm();
const submitButton = document.createElement('button');
submitButton.innerHTML = 'Add Student';
formEl.appendChild(submitButton);

const paginationContainer = document.createElement('div');
paginationContainer.className = 'pagination-container';

let itemsPerPage = studentDetails.length;
let currentPage = 1;
let totalPages = Math.ceil(studentDetails.length / itemsPerPage);

const tableEl = document.createElement('table');
tableEl.className = 'student-table';
displayTable(studentDetails);
document.body.appendChild(formEl);

const filterInput = document.createElement('input');
const filterLabelEl = document.createElement('label');
filterLabelEl.innerText = 'Filter By :';
filterInput.placeholder = 'Search by roll number, name or department';
filterInput.id = 'filter-input';
filterInput.addEventListener('input', filterTable);
document.body.appendChild(filterLabelEl);
document.body.appendChild(filterInput);
document.body.appendChild(rowsPageSelectEl);
document.body.appendChild(paginationContainer);
document.body.appendChild(tableEl);

function createForm() {
    formDetails.forEach(formDetail => {
        const labelEl = document.createElement('label');
        labelEl.innerText = formDetail.title;

        const inputEl = document.createElement('input');
        inputEl.type = formDetail.type;
        inputEl.name = formDetail.name;
        inputEl.id = formDetail.id;
        inputEl.required = true;

        labelEl.setAttribute('for', formDetail.name);

        formEl.appendChild(labelEl);
        formEl.appendChild(inputEl);
    });
}

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    const student = {};
    formDetails.forEach(formDetail => {
        const inputText = document.getElementById(formDetail.id);
        student[formDetail.id] = inputText.value;
    });
    studentDetails.push(student);
    displayTable(studentDetails);
    // console.log(studentDetails);
    // const trEl = createRow(student);
    // const tbodyEl = tableEl.querySelector('tbody');
    // tbodyEl.appendChild(trEl);

    formEl.reset();
    console.log('Form submitted!');
});

function displayTable(studentDetails) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = studentDetails.slice(startIndex, endIndex);
    tableEl.innerHTML = '';
    const theadEl = document.createElement('thead');
    const headerRow = document.createElement('tr');
    formDetails.forEach(formDetail => {
        const thEl = document.createElement('th');
        thEl.textContent = formDetail.title;
        const sortBtn = document.createElement('button');
        sortBtn.innerText = 'sort'
        sortBtn.addEventListener('click', function () {
            sortTable(formDetail.id);
        });
        thEl.appendChild(sortBtn);
        headerRow.appendChild(thEl);
    });
    const thEl = document.createElement('th');
    thEl.textContent = 'Actions';
    headerRow.appendChild(thEl);
    theadEl.appendChild(headerRow);
    tableEl.appendChild(theadEl);

    const tbodyEl = document.createElement('tbody');
    currentPageItems.forEach(studentDetail => {
        const trEl = createRow(studentDetail);
        tbodyEl.appendChild(trEl);
    });
    tableEl.appendChild(tbodyEl);
}


function createRow(studentDetail) {
    const trEl = document.createElement('tr');
    formDetails.forEach(formDetail => {
        const tdEl = document.createElement('td');
        tdEl.textContent = studentDetail[formDetail.id];
        trEl.appendChild(tdEl);
    })
    const tdEl = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function () {
        editStudent(trEl, studentDetail);
    });
    tdEl.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        deleteStudent(studentDetail);
    })

    tdEl.appendChild(deleteButton);
    trEl.appendChild(tdEl);
    return trEl;
}

function filterTable() {
    const filterValue = filterInput.value.toLowerCase();
    const filteredData = studentDetails.filter(student =>
        student.department.toLowerCase().includes(filterValue) ||
        student.first_name.toLowerCase().includes(filterValue) ||
        student.last_name.toLowerCase().includes(filterValue) ||
        student.roll_number.toString().includes(filterValue) ||
        student.age.toString().includes(filterValue)
    );

    displayTable(filteredData);
}


function deleteStudent(student) {
    studentDetails.splice(studentDetails.indexOf(student), 1);
    displayTable(studentDetails);
    console.log(studentDetails);
}

function editStudent(currentRow, student) {
    const cells = currentRow.querySelectorAll('td');
    cells.forEach((cell, index) => {
        if (index < 5) {
            const inputValue = student[formDetails[index].id];
            cell.innerHTML = `<input type="${formDetails[index].type}" value="${inputValue}">`;
        }
    })

    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', function () {
        saveEdit(currentRow, student);
    });

    currentRow.lastElementChild.appendChild(saveButton);
    const editButton = currentRow.lastElementChild.querySelector('button');
    editButton.style.display = 'none';
}

function saveEdit(currentRow, student) {
    const inputs = currentRow.querySelectorAll('input');
    formDetails.forEach((formDetail, index) => {
        student[formDetail.id] = inputs[index].value;
    });
    currentRow.lastElementChild.removeChild(currentRow.lastElementChild.lastElementChild);
    const editButton = currentRow.lastElementChild.querySelector('button');
    editButton.style.display = 'inline';
    console.log(studentDetails);
    displayTable(studentDetails);
}

function sortTable(columnId) {
    if (sortState.columnId === columnId) {
        sortState.ascending = !sortState.ascending;
    } else {
        sortState.columnId = columnId;
        sortState.ascending = true;
    }

    const index = formDetails.findIndex(formDetail => formDetail.id === columnId);
    if (index != -1) {
        studentDetails.sort((a, b) => {
            const valueA = a[formDetails[index].id];
            const valueB = b[formDetails[index].id];

            const comparison = formDetails[index].type === 'number' ? valueA - valueB : valueA.localeCompare(valueB);

            return sortState.ascending ? comparison : -comparison;
        });
        displayTable(studentDetails);
    }
}

function handleRowsPerPageChange() {
    itemsPerPage = parseInt(rowsPageSelectEl.value);
    totalPages = Math.ceil(studentDetails.length / itemsPerPage);
    currentPage = 1;
    displayPagination();
    displayTable(studentDetails);
}


function displayPagination() {
    paginationContainer.innerHTML = '';

    const previousButton = document.createElement('button');
    previousButton.innerHTML = 'Pervious';
    previousButton.addEventListener('click', () => navigatePage(-1));

    const nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next';
    nextButton.addEventListener('click', () => navigatePage(1));

    paginationContainer.appendChild(previousButton);
    paginationContainer.appendChild(nextButton);
}

function navigatePage(direction) {
    currentPage += direction;
    const pageInfo = document.querySelector('span');
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    displayTable(studentDetails);
    renderPagination();
}