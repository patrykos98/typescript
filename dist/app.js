import renderTasks from "./helpers/render.js";
import { render as renderCategories } from "./helpers/render-categories.js";
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
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectedRadioElement.value;
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainerElement);
});
addTask({ title: "klata", category: "gym", done: true });
renderCategories(categories, categoriesContainerElement);
renderTasks(tasks, tasksContainerElement);
