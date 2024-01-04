// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
//             </li>
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [{
        title: "Wyrzucić śmieci",
        done: false
    },
    {
        title: "Pojść na siłke!",
        done: true,
        category: "gym"
    },
    {
        title: "Nakarmić koty",
        done: false
    }];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
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
const renderCategories = () => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectedRadioElement.value;
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render();
});
addTask({ title: "klata", category: "gym", done: true });
renderCategories();
render();
