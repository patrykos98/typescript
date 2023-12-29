// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
//             </li>
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [{
        name: "Wyrzucić śmieci",
        done: false
    },
    {
        name: "Pojść na siłkę",
        done: true
    },
    {
        name: "Nakarmić koty",
        done: false
    }];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkBoxElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = task.name;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkBoxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
