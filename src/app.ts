
import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render.js";
import { render as renderCategories } from "./helpers/render-categories.js";
import { TaskClass } from "./classes/task.js";

const taskNameInputElement: HTMLInputElement=document.querySelector("#name");
const addButtonElement: HTMLButtonElement=document.querySelector("button");
const tasksContainerElement: HTMLElement=document.querySelector(".tasks");
const categoriesContainerElement:HTMLElement=document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL,Category.WORK, Category.GYM, Category.HOBBY];

const tasks: Task[]=[

    new Task("Wyrzuci smieci", false, Category.HOBBY),
    new Task("Pojsc na silke", true, Category.GYM),
    new Task("Nakarmi koty", false),
];

const addTask= (task: Task)=>{
    tasks.push(task);
}

const updateSelectedCategory=(newCategory: Category)=>{
    selectedCategory=newCategory;
}

addButtonElement.addEventListener("click",(event: Event)=>{
    event.preventDefault();
    const newTask: Task= new Task(taskNameInputElement.value,false,selectedCategory)
    addTask(newTask);
    newTask.logCreationDate();
    renderTasks(tasks, tasksContainerElement);
})

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple=['zrobic barki', Category.GYM, false];

const taskName=task[0];
const taskCategory= task[1];
const taskDoneStatus= task[2];
renderCategories(categories,categoriesContainerElement,updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass('zadanie z konstruktora', false);
taskClassInstance.logCreationDate();