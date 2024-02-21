const jsonData = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "country": "USA"
    },
    {
        "id": 2,
        "name": "Alice Smith",
        "age": 25,
        "city": "Los Angeles",
        "country": "USA"
    },
    {
        "id": 3,
        "name": "Mohammed Khan",
        "age": 35,
        "city": "London",
        "country": "UK"
    },
    {
        "id": 4,
        "name": "Anna Müller",
        "age": 28,
        "city": "Berlin",
        "country": "Germany"
    },
    {
        "id": 5,
        "name": "Luis Ramirez",
        "age": 32,
        "city": "Madrid",
        "country": "Spain"
    },
    {
        "id": 6,
        "name": "Yuki Tanaka",
        "age": 27,
        "city": "Tokyo",
        "country": "Japan"
    },
    {
        "id": 7,
        "name": "Maria Garcia",
        "age": 40,
        "city": "Barcelona",
        "country": "Spain"
    },
    {
        "id": 8,
        "name": "Chen Wei",
        "age": 33,
        "city": "Beijing",
        "country": "China"
    },
    {
        "id": 9,
        "name": "Elena Petrova",
        "age": 29,
        "city": "Moscow",
        "country": "Russia"
    },
    {
        "id": 10,
        "name": "Fatima Ali",
        "age": 26,
        "city": "Dubai",
        "country": "UAE"
    },
    {
        "id": 11,
        "name": "David Kim",
        "age": 31,
        "city": "Seoul",
        "country": "South Korea"
    },
    {
        "id": 12,
        "name": "Sophie Dubois",
        "age": 34,
        "city": "Paris",
        "country": "France"
    },
    {
        "id": 13,
        "name": "Matteo Rossi",
        "age": 27,
        "city": "Rome",
        "country": "Italy"
    },
    {
        "id": 14,
        "name": "Ananya Patel",
        "age": 30,
        "city": "Mumbai",
        "country": "India"
    },
    {
        "id": 15,
        "name": "Michael Johnson",
        "age": 29,
        "city": "Sydney",
        "country": "Australia"
    },

    {
        "id": 16,
        "name": "Sophia Lee",
        "age": 28,
        "city": "Toronto",
        "country": "Canada"
    },
    {
        "id": 17,
        "name": "Maximilian Müller",
        "age": 35,
        "city": "Munich",
        "country": "Germany"
    },
    {
        "id": 18,
        "name": "Isabella Johnson",
        "age": 29,
        "city": "Sydney",
        "country": "Australia"
    },
    {
        "id": 19,
        "name": "Liam Wilson",
        "age": 31,
        "city": "London",
        "country": "UK"
    },


]
const keys = ['id', 'name', 'age', 'city', 'country']
const pages = [];
const limit = 5;
let value = '';
let timer = null;

const container = document.getElementById('container');
const table = document.createElement('table');
const tr = document.createElement('tr');
let filterAttribute = 'id';

let numberOfPages;
if (jsonData.length % 5 === 0) {
    numberOfPages = jsonData.length / 5;
} else {
    numberOfPages = (jsonData.length / 5) + 1;
}

function sortJson(keyIndex) {
    jsonData.sort((a, b) => {
        const nameA = a[keys[keyIndex]].toLowerCase();
        const nameB = b[keys[keyIndex]].toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    clearChildren(table);
    renderTable(1);
}

for (let i = 0; i < keys.length; i++) {
    const th = document.createElement('th');
    const sortHeadingBtn = document.createElement('button');
    sortHeadingBtn.textContent = keys[i].toUpperCase();
    sortHeadingBtn.addEventListener('click', () => {
        sortJson(i);
    })
    sortHeadingBtn.classList.add('headingbtn');
    th.appendChild(sortHeadingBtn);
    tr.append(th);
}

table.appendChild(tr);

function clearChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearLastFiveChildren(parent) {
    const children = parent.children;
    const start = Math.max(children.length - limit, 0);
    for (let i = children.length - 1; i >= start; i--) {
        parent.removeChild(children[i]);
    }
}

function renderTable(pgNumber) {

    let offset = (pgNumber - 1) * limit
    for (let i = offset; i < offset + limit; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < keys.length; j++) {
            const td = document.createElement('td');
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.classList.add('inputStyle')
            inputElement.value = jsonData[i][keys[j]];
            inputElement.addEventListener('input', (event) => {
                jsonData[i][keys[j]] = event.target.value; // Update corresponding value in jsonData
            });
            td.appendChild(inputElement);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

function filterJson(jsonData, attribute, value) {
    let filteredData = [];
    jsonData.forEach(data => {
        
        if (data[attribute]== value) {
            filteredData.push(data);
        }
    });
    return filteredData;
}

const paginationDiv = document.createElement('div');
paginationDiv.classList.add('paginationDiv');
for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i)
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => {
        clearLastFiveChildren(table);
        renderTable(i);
    })
    paginationDiv.appendChild(pageButton);
}

const keysDropdown = document.createElement('select');
keysDropdown.setAttribute('id', 'keysDropdown');
keys.forEach((key, index) => {
    const option = document.createElement('option');
    option.setAttribute('value', key.toLowerCase());
    option.textContent = key;
    if (index === 0) {
        option.setAttribute('selected', 'selected');
    }
    keysDropdown.appendChild(option);
    keysDropdown.addEventListener('input', () => {
        filterAttribute = keysDropdown.value;
    })
});

function renderFilteredTable(filteredData) {
    for (let i = 0; i < filteredData.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < keys.length; j++) {
            const td = document.createElement('td');
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.classList.add('inputStyle')
            inputElement.value = filteredData[i][keys[j]];
            inputElement.addEventListener('input', (event) => {
                filteredData[i][keys[j]] = event.target.value; // Update corresponding value in filteredData
            });
            td.appendChild(inputElement);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('id', 'searchInput');
searchInput.setAttribute('placeholder', 'Search...');
searchInput.addEventListener('input', () => {

    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {

        let filteredData = filterJson(jsonData, filterAttribute, searchInput.value);
        if (filteredData.length > 0) {
            clearChildren(table);
            renderFilteredTable(filteredData);
        } else {
            alert('NO MATCHING DATA FOUND')
        }

    }, 2000);
});

container.appendChild(paginationDiv)

container.appendChild(keysDropdown)
container.appendChild(searchInput)

renderTable(1);