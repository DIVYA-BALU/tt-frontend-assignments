

let details = [
    { "id": 1, "name": "John Doe", "age": 28, "city": "New York", "salary": 60000 },
    { "id": 2, "name": "Jane Smith", "age": 35, "city": "Los Angeles", "salary": 75000 },
    { "id": 3, "name": "Bob Johnson", "age": 42, "city": "Chicago", "salary": 80000 },
    { "id": 4, "name": "Alice Brown", "age": 31, "city": "San Francisco", "salary": 70000 },
    { "id": 5, "name": "Chris Wilson", "age": 29, "city": "Seattle", "salary": 65000 },
    { "id": 6, "name": "Eva Martinez", "age": 38, "city": "Miami", "salary": 72000 },
    { "id": 7, "name": "David Lee", "age": 45, "city": "Houston", "salary": 85000 },
    { "id": 8, "name": "Sophia Turner", "age": 33, "city": "Atlanta", "salary": 78000 },
    { "id": 9, "name": "Michael Wang", "age": 27, "city": "Denver", "salary": 67000 },
    { "id": 10, "name": "Olivia Chen", "age": 40, "city": "Boston", "salary": 90000 },
    { "id": 11, "name": "Liam Harris", "age": 36, "city": "Philadelphia", "salary": 82000 },
    { "id": 12, "name": "Emma Garcia", "age": 30, "city": "Phoenix", "salary": 69000 },
    { "id": 13, "name": "Noah Rodriguez", "age": 34, "city": "San Diego", "salary": 77000 },
    { "id": 14, "name": "Isabella Martinez", "age": 39, "city": "Dallas", "salary": 83000 },
    { "id": 15, "name": "William Rivera", "age": 32, "city": "Austin", "salary": 74000 },
    { "id": 16, "name": "Sophia Thompson", "age": 28, "city": "Portland", "salary": 71000 },
    { "id": 17, "name": "James Robinson", "age": 37, "city": "Las Vegas", "salary": 82000 },
    { "id": 18, "name": "Olivia Carter", "age": 41, "city": "San Antonio", "salary": 79000 },
    { "id": 19, "name": "Lucas Nguyen", "age": 35, "city": "Orlando", "salary": 76000 },
    { "id": 20, "name": "Ava Walker", "age": 29, "city": "Minneapolis", "salary": 70000 }
];


const body = document.getElementById('body');
const table = document.createElement('table');
let noOfItems = 5;
const paginationButtons = document.createElement('div');
let pages = 0;
let curPage = 1;

const select = document.createElement('select');
select.id = "item";

const option1 = document.createElement('option');
option1.value = 5;
option1.textContent = 5;
select.appendChild(option1);

const option2 = document.createElement('option');
option2.value = 10;
option2.textContent = 10;
select.appendChild(option2);

const option3 = document.createElement('option');
option3.value = 15;
option3.textContent = 15;
select.appendChild(option3);
select.addEventListener('input', () => {
    noOfItems = document.getElementById('item').value;
    pagination(details);
})

const label = document.createElement('label');
label.innerText = "Select Page Count:";
label.append(select);
const br = document.createElement('br');


function loadTable(details, page) {

    table.innerHTML = '';
    const startIndex = (page - 1) * noOfItems;
    const endIndex = startIndex + noOfItems;
    const pageDetails = details.slice(startIndex, endIndex);
    const header = document.createElement('thead');
    const trow = document.createElement('tr');
    trow.setAttribute('class', 'row');

    Object.keys(pageDetails[0]).forEach(head => {
        const cell = document.createElement('th');
        cell.innerHTML = head;
        cell.addEventListener('click', () => sortData(head));
        trow.appendChild(cell);
    })
    header.appendChild(trow);
    table.appendChild(header);

    pageDetails.forEach(data => {
        const trow = document.createElement('tr');
        trow.setAttribute('class', 'row');
        Object.keys(data).forEach(key => {
            const cell = document.createElement('td');
            cell.innerHTML = data[key];
            cell.contentEditable = true;
            const value = cell.innerHTML;
            cell.addEventListener('focusout', () => data[key] = value)
            // cell.addEventListener('click', () => editCell(cell));
            trow.appendChild(cell);
        })
        table.appendChild(trow);
    })
    body.appendChild(table);
    body.appendChild(paginationButtons);
}


(function fetchData() {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // details = data;
            const input = document.createElement('input');
            input.placeholder = "type Here";
            input.addEventListener('input', () => filterData());
            input.setAttribute('id', 'input');
            const select = document.createElement('select');
            select.setAttribute('id', 'select');
            body.appendChild(input);
            body.appendChild(select);

            Object.keys(details[0]).forEach(head => {
                const option = document.createElement('option');
                option.value = head;
                option.textContent = head;
                select.appendChild(option);
            })
            pagination(details);
        })
        .catch(error => {
            console.error('Error during API request:', error.message);
        });

})();


function filterData() {
    const value = document.getElementById('input').value;
    const selectedOption = document.getElementById('select').value;
    const filteredData = details.filter((obj) => {
        const objVal = isNumber(obj[selectedOption]) ? obj[selectedOption] + "" : obj[selectedOption];
        if (objVal.includes(value))
            return true;
    });
    pagination(filteredData);
}

function sortData(key) {
    const sortedDetails = details.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
    pagination(sortedDetails);
}

function pagination(details) {
    paginationButtons.innerHTML = ' ';
    paginationButtons.appendChild(label);
    paginationButtons.appendChild(br);
    pages = Math.ceil(details.length / noOfItems);
    for (let i = 0; i < pages; i++) {
        const button = document.createElement('button');
        button.textContent = i + 1;
        button.addEventListener('click', () =>
            loadTable(details, i + 1)
        );
        paginationButtons.appendChild(button);
    }
    loadTable(details, 1);

}
