import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render.js";
import { render as renderCategories } from "./helpers/render-categories.js";
import { TaskClass } from "./classes/task.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];
const tasks = [
    new Task("Wyrzuci smieci", false, Category.HOBBY),
    new Task("Pojsc na silke", true, Category.GYM),
    new Task("Nakarmi koty", false),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate();
    renderTasks(tasks, tasksContainerElement);
});
const task = ['zrobic barki', Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass('zadanie z konstruktora', false);
taskClassInstance.logCreationDate();
