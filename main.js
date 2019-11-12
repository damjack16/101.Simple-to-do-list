const form = document.querySelector("form");
const addInput = document.querySelector("input.add");
const searchInput = document.querySelector("input.search");
const addBtn = document.querySelector("button");
const span = document.querySelector("span");
const ul = document.querySelector("ul");
let toDolist = [];

//ADD TASK FUNCTION
const addTask = (e) => {
    e.preventDefault();
    const inputValue = addInput.value;
    if (inputValue === "") return //if input is empty - stop the function
    addInput.value = "";
    const task = document.createElement(`li`);
    task.innerHTML = inputValue + ` <button>Usuń</button>`;
    ul.appendChild(task); //add task to ul list
    toDolist.push(task); //add new task to Array
    ul.textContent = ""; //clear ul from elements, because we will add elements from Array toDoList
    span.textContent = toDolist.length;
    renderTask(); // add id attribute to new elements of toDoList
    task.querySelector("button").addEventListener('click', removeTask); //search selector button in task only. Not in document.
}

//REMOVE TASK FUNCTION
const removeTask = (e) => {
    e.target.parentNode.remove();
    const elementId = e.target.parentNode.id; //get id value of task
    toDolist.splice(elementId, 1); //delete element from toDoList array
    span.textContent = toDolist.length;
    renderTask();
}

//RENDERING TASKS IN ARRAY - getting element ID same like in Array elements
const renderTask = () => {
    toDolist.forEach((element, index) => {
        element.id = index;
        ul.appendChild(element);
    })
}

//SEARCH TASK FUNCTION
const searchTask = (e) => {
    const searchValue = e.target.value.toLowerCase(); //get search input value in lower case
    let resultList = toDolist.filter(element => element.textContent.toLowerCase().includes(searchValue)); //get new array with filtered values from toDoList
    ul.textContent = ""; //reset ul content
    resultList.forEach((element) => {
        ul.appendChild(element);
    })
    span.textContent = resultList.length;
}

searchInput.addEventListener("input", searchTask);
form.addEventListener("submit", addTask);