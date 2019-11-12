const form = document.querySelector("form");
const addInput = document.querySelector("input.add");
const searchInput = document.querySelector("input.search");
const addBtn = document.querySelector("button");
const span = document.querySelector("span");
const ul = document.querySelector("ul");
const toDolist = [];

//ADD TASK FUNCTION
const addTask = (e) => {
    e.preventDefault();
    const inputValue = addInput.value;
    if (inputValue === "") return //if input is empty - stop the function
    addInput.value = "";
    const task = document.createElement(`li`);
    task.innerHTML = inputValue + ` <button>Usuń</button>`;
    ul.appendChild(task);
    toDolist.push(task); //add new task to Array
    ul.textContent = ""; //clear ul from elements, because we will add elements from Array toDoList
    span.textContent = toDolist.length;
    //forEach add id attribute to new elements of toDoList
    renderTask();

    task.querySelector("button").addEventListener('click', removeTask);

}

//REMOVE TASK FUNCTION
const removeTask = (e) => {
    e.target.parentNode.remove();
    const elementId = e.target.parentNode.id;
    toDolist.splice(elementId, 1);
    span.textContent = toDolist.length;
    renderTask();
}

//RENDERING TASKS IN ARRAY
const renderTask = () => {
    toDolist.forEach((element, index) => {
        element.id = index;
        ul.appendChild(element);
    })

}

// const searchTask = (e) => {
//     const searchValue = e.target.value.toLowerCase();
//     const liItems = document.querySelectorAll('li');
//     let tasks = [...liItems];
//     tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchValue)); //show li with text inside our search input
//     ul.textContent = "";
//     tasks.forEach((task) => {
//         ul.appendChild(task);
//     })
//     span.textContent = tasks.length;
// }


// searchInput.addEventListener("input", searchTask);

form.addEventListener("submit", addTask);