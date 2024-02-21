const mainDiv = document.createElement("div");
mainDiv.className = "container";

const optionsDiv = document.createElement("div");
optionsDiv.className = "options";


let sortType;

const sortAsc = document.createElement("button");
sortAsc.className = "asc";
sortAsc.textContent = "ASC";

sortAsc.addEventListener("click",() => {
    sortType = 1;
    document.querySelector(".table-container").textContent = " ";
    generateTable(sortType, data)
})

const sortDesc = document.createElement("button");
sortDesc.className = "desc";
sortDesc.textContent = "DESC"

sortDesc.addEventListener("click",() => {
    sortType = 0;
    document.querySelector(".table-container").textContent = " ";
    generateTable(sortType, data)
})

const inputField = document.createElement("input");
inputField.placeholder = "Filter";

const pTag = document.createElement("p");

inputField.addEventListener("input", (value) => {
    console.log(value.target.value, columnSelection);
    if(columnSelection !== undefined){
        filterData(columnSelection,value.target.value);
    }
    else{
        alert("Select a column")
    }
})

optionsDiv.appendChild(sortAsc);
optionsDiv.appendChild(sortDesc);
optionsDiv.appendChild(inputField);
optionsDiv.appendChild(pTag);


const tableDiv = document.createElement("div");
tableDiv.className = "table-container";


function paginator (data) {
    const paginatorContainer = document.querySelector(".pagination-container");
    
    if(paginatorContainer !== null) {
        paginatorContainer.remove();
    }
    
    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination-container";

    const prevButton = document.createElement("button");
    prevButton.className = "previous";
    prevButton.innerText = "Prev";

    if (initPage === 0){
        prevButton.disabled = true;
    }

    prevButton.addEventListener("click",() => {
        initPage -= 1;
        document.querySelector(".table-container").textContent = " ";
        generateTable(sortType, data);
    })

    
    const nextButton = document.createElement("button");
    nextButton.className = "next";
    nextButton.innerText = "Next";

    if (data.length <= itemsPerPage * (initPage + 1)){
        nextButton.disabled = true;
    }

    nextButton.addEventListener("click",() => {
        initPage += 1;
        document.querySelector(".table-container").textContent = " ";
        generateTable(sortType, data);
    })

    paginationDiv.appendChild(prevButton);
    paginationDiv.appendChild(nextButton);
    mainDiv.appendChild(paginationDiv);
}

mainDiv.appendChild(optionsDiv);
mainDiv.appendChild(tableDiv);
document.body.appendChild(mainDiv);

let initPage = 0;
let itemsPerPage = 4;

let data = [
    {"id": 1, "name": "John Doe", "age": 28, "city": "New York", "salary": 60000},
    {"id": 2, "name": "Jane Smith", "age": 35, "city": "Los Angeles", "salary": 75000},
    {"id": 3, "name": "Bob Johnson", "age": 42, "city": "Chicago", "salary": 80000},
    {"id": 4, "name": "Alice Brown", "age": 31, "city": "San Francisco", "salary": 70000},
    {"id": 5, "name": "Chris Wilson", "age": 29, "city": "Seattle", "salary": 65000},
    {"id": 6, "name": "Eva Martinez", "age": 38, "city": "Miami", "salary": 72000},
    {"id": 7, "name": "David Lee", "age": 45, "city": "Houston", "salary": 85000},
    {"id": 8, "name": "Sophia Turner", "age": 33, "city": "Atlanta", "salary": 78000},
    {"id": 9, "name": "Michael Wang", "age": 27, "city": "Denver", "salary": 67000},
    {"id": 10, "name": "Olivia Chen", "age": 40, "city": "Boston", "salary": 90000}
]

// dataSize = 60;

// function generateTable(sort = "ASC", filter = "none",) {
//     const data = fetch("https://api.escuelajs.co/api/v1/products")
//     .then(val => val.json())
//     .then(async values => {
//         currentData = await values;
//         console.log(currentData);

//     });
// }

// generateTable()

function sortData(column, sortType = 1) {
    data.sort((a, b) => {
      const x = a[column];
      const y = b[column];
      if (typeof x === 'string') {
        return sortType === 1 ? x.localeCompare(y) : y.localeCompare(x);
      } else {
        return sortType === 1 ? x - y : y - x;
      }
    });

    document.querySelector(".table-container").textContent = " ";
    generateTable(sortType,data);
}

function filterData(column, value) {
    console.log(typeof value);
    let filtered = data.filter((val) =>{
        if(typeof val[column] === "string"){
            return val[column].includes(value);
        }
        else{
            return val[column].toString().includes(value)
        }

    })

    console.log(filtered);
    document.querySelector(".table-container").textContent = " ";
    generateTable(sortType,filtered)
}

let columnSelection ;


function generateTable(sortType,data) {
    const table = document.createElement("table");

    Object.keys(data[0]).forEach((key) =>{
        const header = document.createElement("th");
        header.textContent = key.toUpperCase();

        header.addEventListener("click",() => {
            sortData(key,sortType);
            pTag.textContent = ` ${key} `
            columnSelection = key;
        });

        table.appendChild(header);
    })


    start = initPage * itemsPerPage;
    end =  start + itemsPerPage;
    paged = data.slice(start,end);

    paged.forEach((value) => {
        const row = document.createElement("tr");
        
        Object.entries(value).forEach((item) => {
            const tData = document.createElement("td");
            
            const inputField = document.createElement("input");
            inputField.value = item[1];

            inputField.addEventListener("input", (changedValue) => {
                id = value["id"];
                data[data.findIndex((val) =>{
                    return val === value;
                })][item[0]] = changedValue.target.value;
            })

            tData.appendChild(inputField);
            row.appendChild(tData);
        })

        table.appendChild(row);
    })

    tableDiv.appendChild(table);

    paginator(data);
}

generateTable(sortType,data)


