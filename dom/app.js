const data = [
  { name: "John", age: 30, email: "john.doe@gmail.com" },
  { name: "Alice", age: 25, email: "alice.smith@gmail.com" },
  { name: "Bob", age: 35, email: "bob.jones@gmail.com" },
  { name: "Emma", age: 28, email: "emma.wilson@gmail.com" },
  { name: "David", age: 32, email: "david.green@gmail.com" },
  { name: "Sophie", age: 27, email: "sophie.brown@gmail.com" },
  { name: "Michael", age: 40, email: "michael.white@gmail.com" },
  { name: "Olivia", age: 22, email: "olivia.jenkins@gmail.com" },
  { name: "Daniel", age: 31, email: "daniel.miller@gmail.com" },
  { name: "Grace", age: 26, email: "grace.taylor@gmail.com" },
  { name: "William", age: 33, email: "william.smith@gmail.com" },
  { name: "Ella", age: 29, email: "ella.brown@gmail.com" },
  { name: "Matthew", age: 38, email: "matthew.jones@gmail.com" },
  { name: "Sophia", age: 24, email: "sophia.davis@gmail.com" },
  { name: "James", age: 36, email: "james.wilson@gmail.com" },
  { name: "Ava", age: 23, email: "ava.martin@gmail.com" },
  { name: "Joseph", age: 37, email: "joseph.anderson@gmail.com" },
  { name: "Mia", age: 21, email: "mia.evans@gmail.com" },
  { name: "Benjamin", age: 34, email: "benjamin.jenkins@gmail.com" },
  { name: "Isabella", age: 39, email: "isabella.jones@gmail.com" },
  { name: "Liam", age: 28, email: "liam.martin@gmail.com" },
  { name: "Evelyn", age: 31, email: "evelyn.white@gmail.com" },
  { name: "Noah", age: 24, email: "noah.brown@gmail.com" },
  { name: "Charlotte", age: 29, email: "charlotte.jones@gmail.com" },
  { name: "Lucas", age: 32, email: "lucas.davis@gmail.com" },
  { name: "Amelia", age: 27, email: "amelia.jenkins@gmail.com" },
  { name: "Jackson", age: 30, email: "jackson.anderson@gmail.com" },
  { name: "Avery", age: 33, email: "avery.smith@gmail.com" },
  { name: "Logan", age: 26, email: "logan.taylor@gmail.com" },
  { name: "Mia", age: 35, email: "mia.jones@gmail.com" },
  { name: "Oliver", age: 22, email: "oliver.evans@gmail.com" },
  { name: "Emma", age: 37, email: "emma.martin@gmail.com" },
  { name: "Carter", age: 23, email: "carter.wilson@gmail.com" },
  { name: "Aria", age: 38, email: "aria.jenkins@gmail.com" },
  { name: "Henry", age: 25, email: "henry.brown@gmail.com" },
  { name: "Aiden", age: 40, email: "aiden.anderson@gmail.com" },
  { name: "Ella", age: 34, email: "ella.smith@gmail.com" },
  { name: "Sebastian", age: 21, email: "sebastian.davis@gmail.com" },
  { name: "Grace", age: 39, email: "grace.miller@gmail.com" },
  { name: "Elijah", age: 36, email: "elijah.jones@gmail.com" },
  { name: "Scarlett", age: 20, email: "scarlett.martin@gmail.com" },
  { name: "Levi", age: 37, email: "levi.jenkins@gmail.com" },
  { name: "Aurora", age: 26, email: "aurora.white@gmail.com" },
  { name: "Wyatt", age: 38, email: "wyatt.anderson@gmail.com" },
  { name: "Hazel", age: 29, email: "hazel.evans@gmail.com" },
  { name: "Matthew", age: 39, email: "matthew.brown@gmail.com" },
  { name: "Luna", age: 24, email: "luna.jones@gmail.com" },
  { name: "Isaac", age: 40, email: "isaac.davis@gmail.com" },
  { name: "Stella", age: 30, email: "stella.jenkins@gmail.com" },
  { name: "Alexander", age: 22, email: "alexander.martin@gmail.com" },
  { name: "Penelope", age: 31, email: "penelope.white@gmail.com" },
  { name: "Samuel", age: 23, email: "samuel.jones@gmail.com" },
  { name: "Madison", age: 32, email: "madison.evans@gmail.com" },
  { name: "Daniel", age: 27, email: "daniel.miller@gmail.com" },
  { name: "Lily", age: 33, email: "lily.anderson@gmail.com" },
  { name: "Owen", age: 28, email: "owen.jenkins@gmail.com" },
  { name: "Chloe", age: 34, email: "chloe.smith@gmail.com" },
  { name: "Grayson", age: 25, email: "grayson.davis@gmail.com" },
  { name: "Nora", age: 35, email: "nora.martin@gmail.com" },
  { name: "Caleb", age: 26, email: "caleb.wilson@gmail.com" },
  { name: "Riley", age: 36, email: "riley.jones@gmail.com" },
  { name: "Gabriel", age: 29, email: "gabriel.miller@gmail.com" },
  { name: "Eleanor", age: 37, email: "eleanor.jenkins@gmail.com" },
  { name: "Jack", age: 30, email: "jack.brown@gmail.com" },
  { name: "Layla", age: 38, email: "layla.anderson@gmail.com" },
  { name: "Julian", age: 31, email: "julian.white@gmail.com" },
  { name: "Hannah", age: 39, email: "hannah.jones@gmail.com" },
  { name: "Jaxon", age: 32, email: "jaxon.martin@gmail.com" },
  { name: "Addison", age: 40, email: "addison.davis@gmail.com" },
  { name: "Benjamin", age: 33, email: "benjamin.jenkins@gmail.com" },
  { name: "Aubrey", age: 28, email: "aubrey.evans@gmail.com" },
  { name: "Nicholas", age: 34, email: "nicholas.miller@gmail.com" },
  { name: "Zoe", age: 29, email: "zoe.jones@gmail.com" },
  { name: "Nathan", age: 35, email: "nathan.martin@gmail.com" },
  { name: "Victoria", age: 30, email: "victoria.davis@gmail.com" },
  { name: "Leo", age: 36, email: "leo.anderson@gmail.com" },
  { name: "Brooklyn", age: 31, email: "brooklyn.brown@gmail.com" },
  { name: "Cameron", age: 37, email: "cameron.jenkins@gmail.com" },
  { name: "Allison", age: 32, email: "allison.smith@gmail.com" },
  { name: "Isaiah", age: 38, email: "isaiah.jones@gmail.com" },
  { name: "Autumn", age: 33, email: "autumn.wilson@gmail.com" },
  { name: "Eli", age: 39, email: "eli.martin@gmail.com" },
  { name: "Savannah", age: 34, email: "savannah.white@gmail.com" },
  { name: "Cooper", age: 40, email: "cooper.jenkins@gmail.com" },
  { name: "Gianna", age: 35, email: "gianna.davis@gmail.com" },
];

let currentPage = 1;
const itemsPerPage = 5;

function createTableBody(selectedData) {
  const existingTbody = document.querySelector("table tbody");
  if (existingTbody) existingTbody.remove();

  const tbody = document.createElement("tbody");

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = selectedData.slice(start, end);

  pageItems.forEach((item, index) => {
    const tr = document.createElement("tr");
    const td1 = createEditableCell(item.name, index, "name", selectedData);
    const td2 = createEditableCell(item.age, index, "age", selectedData);
    const td3 = createEditableCell(item.email, index, "email", selectedData);
    td1.innerHTML = item.name;
    td2.innerHTML = item.age;
    td3.innerHTML = item.email;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  });

  document.querySelector("table").appendChild(tbody);
  createPagination(selectedData);
}

function createEditableCell(value, index, key, selectedData) {
  const td = document.createElement("td");
  td.innerHTML = value;
  td.addEventListener("click", function () {
    const input = document.createElement("input");
    input.value = value;
    this.innerHTML = "";
    this.appendChild(input);
    input.focus();
    input.addEventListener("blur", function () {
      const newValue = this.value;
      td.innerHTML = newValue;
      selectedData[index][key] = newValue;
    });
  });
  return td;
}

function tableCreation() {
  const table = document.createElement("table");
  table.className = "table";
  table.classList.add("table-striped");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  th1.innerHTML = "Name";
  th2.innerHTML = "Age";
  th3.innerHTML = "Email";
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);
  table.appendChild(thead);
  document.body.appendChild(table);

  createTableBody(data);
  createPagination(data);
}

function createPagination(selectedData) {
  const pagination = document.querySelector(".pagination");
  if (pagination) pagination.remove();

  const div = document.createElement("div");
  div.className = "pagination";
  const totalPages = Math.ceil(selectedData.length / itemsPerPage);

  const prevButton = document.createElement("button");
  prevButton.innerHTML = "Previous";
  if (currentPage === 1) prevButton.disabled = true;
  prevButton.addEventListener("click", () => {
    currentPage--;
    createTableBody(data);
  });
  div.appendChild(prevButton);

  const pageIndicator = document.createElement("span");
  pageIndicator.innerHTML = `Page ${currentPage} of ${totalPages}`;
  div.appendChild(pageIndicator);

  const nextButton = document.createElement("button");
  nextButton.innerHTML = "Next";

  if (currentPage === totalPages) nextButton.disabled = true;

  nextButton.addEventListener("click", () => {
    currentPage++;
    createTableBody(data);
  });
  div.appendChild(nextButton);

  document.body.appendChild(div);
}

function createDropdown() {
  const dropdown = document.createElement("select");
  const option0 = document.createElement("option");
  option0.value = "default";
  option0.innerHTML = "select an option";
  const option1 = document.createElement("option");
  option1.value = "name";
  option1.innerHTML = "Sort by Name";
  const option2 = document.createElement("option");
  option2.value = "age";
  option2.innerHTML = "Sort by Age";
  const option3 = document.createElement("option");
  option3.value = "email";
  option3.innerHTML = "Sort by Email";
  dropdown.appendChild(option0);
  dropdown.appendChild(option1);
  dropdown.appendChild(option2);
  dropdown.appendChild(option3);
  document.body.appendChild(dropdown);

  dropdown.addEventListener("change", (e) => {
    const sortKey = e.target.value;
    data.sort((a, b) => {
        
      if (a[sortKey] < b[sortKey]) return -1;

      if (a[sortKey] > b[sortKey]) return 1;

      return 0;
    });
    createTableBody(data);
  });
}

function createAgeFilter() {
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Filter by Age";
  document.body.appendChild(input);

  input.addEventListener("input", (e) => {
    const age = e.target.value;
    const filteredData = data.filter((item) => item.age == age);
    createTableBody(filteredData);
    if (!age) createTableBody(data);
  });
}

createDropdown();

createAgeFilter();

tableCreation();
