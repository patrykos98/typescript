// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
//             </li>
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [{
        title: "Wyrzucić śmieci",
        done: false
    },
    {
        title: "Pojść na siłke",
        done: true
    },
    {
        title: "Nakarmić koty",
        done: false
    }];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkBoxElement = document.createElement("input");
        checkBoxElement.type = "checkbox";
        checkBoxElement.name = task.title;
        checkBoxElement.id = id;
        checkBoxElement.checked = task.done;
        checkBoxElement.addEventListener("change", () => task.done = !task.done);
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkBoxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false });
    render();
});
addTask({ title: "specjalnie od szefa", done: true });
render();
