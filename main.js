const form = document.querySelector("form");
const addInput = document.querySelector("input.add");
const searchInput = document.querySelector("input.search");
const addBtn = document.querySelector("button");
const span = document.querySelector("span");
const ul = document.querySelector("ul");


const addTask = (e) => {
    e.preventDefault();
    const inputValue = addInput.value;
    if (inputValue === "") return //if input is empty - stop the function
    addInput.value = "";
    const task = document.createElement(`li`);
    task.innerHTML = inputValue + ` <button class="delete">Usuń</button>`;
    ul.appendChild(task);
    span.textContent++;

    const removeBtn = [...document.querySelectorAll(".delete")];
    removeBtn.forEach((button) => {
        button.addEventListener('click', removeTask)
    })

}

const removeTask = (e) => {
    e.target.parentNode.remove();
    span.textContent--;
}

const searchTask = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const liItems = document.querySelectorAll('li');
    let tasks = [...liItems];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchValue)); //show li with text inside our search input
    ul.textContent = "";
    tasks.forEach((task) => {
        ul.appendChild(task);
    })
    span.textContent = tasks.length;
}


searchInput.addEventListener("input", searchTask);

form.addEventListener("submit", addTask);