import { Category } from "./types/types.js";
import renderTasks from "./helpers/render.js";
import { render as renderCategories } from "./helpers/render-categories.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];
const tasks = [{
        title: "Wyrzucić śmieci",
        done: false,
        category: Category.HOBBY
    },
    {
        title: "Pojść na siłke!",
        done: true,
        category: Category.GYM
    },
    {
        title: "Nakarmić koty",
        done: false,
        category: Category.WORK
    }];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainerElement);
});
const task = ['zrobic barki', Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
addTask({ title: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
