const bodyEle = document.querySelector(".body-tag");

const h2Ele = document.createElement("h2");
h2Ele.textContent = 'Dynamic Table with Features';

const filterLabel = document.createElement('label');
filterLabel.setAttribute('for', 'filterInput');
filterLabel.textContent = 'Filter:';

const filterInput = document.createElement('input');
filterInput.setAttribute('type', 'text');
filterInput.setAttribute('id', 'filterInput');

const filterColumn = document.createElement('select');

const filterOptionEle1 = document.createElement('option');
filterOptionEle1.textContent = 'id';
const filterOptionEle2 = document.createElement('option');
filterOptionEle2.textContent = 'title';
const filterOptionEle3 = document.createElement('option');
filterOptionEle3.textContent = 'price'
const filterOptionEle4 = document.createElement('option');
filterOptionEle4.textContent = 'description';

filterColumn.appendChild(filterOptionEle1);
filterColumn.appendChild(filterOptionEle2);
filterColumn.appendChild(filterOptionEle3);
filterColumn.appendChild(filterOptionEle4);


const filterDiv = document.createElement('div');
filterDiv.appendChild(filterLabel);
filterDiv.appendChild(filterInput);
filterDiv.appendChild(filterColumn);



let totalData = [];

let offset = 0;
let limit = 5;

let totalDataLength;


function fetchAllData() {
  fetch(`https://api.escuelajs.co/api/v1/products`)
    .then(response => {
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then(data => {
      totalData = data;
      totalDataLength = data.length;
      fetchData();
      pageNo(totalData);
    })
    .catch(error => {
      console.error('Error during API request:', error.message);
    });
};

fetchAllData();

function fetchData() {
  renderTable(totalData.slice(offset, limit + offset));
};


let filteredData = totalData;
filterInput.addEventListener('input', function () {
  console.log(filterInput.value);
  let filteredData = [];
  const selectedOption = filterColumn.options[filterColumn.selectedIndex].value;
  console.log(selectedOption);

  for (let i = 0; i < totalData.length; i++) {
    if (filterInput.value == "" || totalData[i][selectedOption].toString().includes(filterInput.value)) {
      console.log("dbf");
      console.log(totalData);
      filteredData.push(totalData[i]);
    }
  }

  console.log(filteredData);
  offset = 0;
  renderTable(filteredData.slice(offset, limit + offset));
  pageNo(filteredData);
})



function sortData(key) {
  totalData = totalData.sort((a, b) => {

    if (a[key] < b[key]) return -1;

    if (a[key] > b[key]) return 1;

    return 0;
  });
  fetchData();
}



const table = document.createElement('table');
table.className = 'data-table';
table.setAttribute('id', 'dynamic-table');

function renderTable(data) {

  table.textContent = '';

  const tr = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.textContent = 'id';
  const th2 = document.createElement('th');
  th2.textContent = 'title';
  const th3 = document.createElement('th');
  th3.textContent = 'price';
  const th4 = document.createElement('th');
  th4.textContent = 'description';


  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);

  table.appendChild(tr);

  th1.addEventListener('click', function () {
    sortData(th1.textContent);
  });
  th2.addEventListener('click', function () {
    sortData(th2.textContent);
  });
  th3.addEventListener('click', function () {
    sortData(th3.textContent);
  });
  th4.addEventListener('click', function () {
    sortData(th4.textContent);
  });

  for (let i = 0; i < data.length; i++) {
    const trow = document.createElement('tr');
    const tdata1 = document.createElement('td');
    tdata1.textContent = `${JSON.stringify(data[i].id)}`;
    tdata1.contentEditable = true;
    const tdata2 = document.createElement('td');
    tdata2.textContent = `${JSON.stringify(data[i].title)}`;
    tdata2.contentEditable = true;

    tdata2.addEventListener('focusout', function () {
      totalData[i][title] = tdata2.textContent
    })

    const tdata3 = document.createElement('td');
    tdata3.textContent = `${JSON.stringify(data[i].price)}`;
    tdata3.contentEditable = true;
    const tdata4 = document.createElement('td');
    tdata4.textContent = `${JSON.stringify(data[i].description)}`;
    tdata4.contentEditable = true;

    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
    trow.appendChild(tdata3);
    trow.appendChild(tdata4);

    table.appendChild(trow);
  }

}





const elementsSelect = document.createElement('select');
elementsSelect.setAttribute('name', 'elements');
elementsSelect.classList.add('elements');

const option5 = document.createElement('option');
option5.textContent = '5';
const option10 = document.createElement('option');
option10.textContent = '10';
const option15 = document.createElement('option');
option15.textContent = '15';

elementsSelect.appendChild(option5);
elementsSelect.appendChild(option10);
elementsSelect.appendChild(option15);

const dataPerPageDiv = document.createElement('div');
dataPerPageDiv.classList.add('data-per-page-div');
dataPerPageDiv.textContent = 'Pagination';
dataPerPageDiv.appendChild(elementsSelect);

const previousBtn = document.createElement('button');
previousBtn.className = 'previous-btn';
previousBtn.textContent = 'Previous';

(function () {
  previousBtn.disabled = true;
})();


const pageNoDiv = document.createElement('div');
pageNoDiv.classList.add('page-no');
pageNoDiv.style.width = '60px';
pageNoDiv.style.fontSize = '20px';
pageNoDiv.style.marginLeft = '8px';
pageNoDiv.style.marginRight = '3px';

const nextBtn = document.createElement('button');
nextBtn.className = 'next-btn';
nextBtn.textContent = 'Next';





const paginationDiv = document.createElement('div');
paginationDiv.classList.add('pagination');
paginationDiv.appendChild(previousBtn);
paginationDiv.appendChild(pageNoDiv);
paginationDiv.appendChild(nextBtn);

bodyEle.appendChild(h2Ele);
bodyEle.appendChild(filterDiv);
bodyEle.appendChild(table);
bodyEle.appendChild(dataPerPageDiv);
bodyEle.appendChild(paginationDiv);





let currentPage = 1;

function pageNo(totalData) {
  const totalLength = Math.ceil(totalData.length / limit);
  document.querySelector('.page-no').textContent = `${currentPage} / ${totalLength}`
}


document.querySelector('.previous-btn').addEventListener('click', function () {
  document.querySelector('.next-btn').disabled = false;
  offset = offset - limit;

  if (offset === 0) {
    document.querySelector('.previous-btn').disabled = true;
  }

  currentPage--;

  if (filterInput.value == '') {
    fetchData();
    pageNo(totalData);
  }
  else {
    pageNo(filteredData);
  }

})

document.querySelector('.next-btn').addEventListener('click', function () {
  document.querySelector('.previous-btn').disabled = false;
  offset = limit + offset;
  console.log(offset, limit);

  if (offset + limit >= totalDataLength) {
    document.querySelector('.next-btn').disabled = true;
  }

  currentPage++;
  console.log(filterInput.value);

  if (filterInput.value == '') {
    fetchData();
    pageNo(totalData);
  }
  else {
    pageNo(filteredData);
  }
  
})




document.querySelector('.elements').addEventListener("click", function () {
  const selectedOption = document.querySelector('.elements').options[document.querySelector('.elements').selectedIndex];
  limit = Number(selectedOption.value);
  offset = 0;
  currentPage = 1;
  fetchData();
  pageNo(totalData);
})