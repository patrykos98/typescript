
import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render.js";
import { render as renderCategories } from "./helpers/render-categories.js";

const taskNameInputElement: HTMLInputElement=document.querySelector("#name");
const addButtonElement: HTMLButtonElement=document.querySelector("button");
const tasksContainerElement: HTMLElement=document.querySelector(".tasks");
const categoriesContainerElement:HTMLElement=document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL,Category.WORK, Category.GYM, Category.HOBBY];

const tasks: Task[]=[{
    title:"Wyrzucić śmieci",
    done:false,
    category: Category.HOBBY
},
{
    title:"Pojść na siłke!",
    done:true,
    category: Category.GYM
},
{
    title:"Nakarmić koty",
    done:false,
    category: Category.WORK
}];

const addTask= (task: Task)=>{
    tasks.push(task);
}

const updateSelectedCategory=(newCategory: Category)=>{
    selectedCategory=newCategory;
}

addButtonElement.addEventListener("click",(event: Event)=>{
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false, category: selectedCategory});
    renderTasks(tasks, tasksContainerElement);
})

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple=['zrobic barki', Category.GYM, false];

const taskName=task[0];
const taskCategory= task[1];
const taskDoneStatus= task[2];
addTask({title: taskName, category:taskCategory, done:taskDoneStatus});
renderCategories(categories,categoriesContainerElement,updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);