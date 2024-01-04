
import { Task, Category } from "./types/types";
import renderTasks from "./helpers/render.js";
import { render as renderCategories } from "./helpers/render-categories.js";

const taskNameInputElement: HTMLInputElement=document.querySelector("#name");
const addButtonElement: HTMLButtonElement=document.querySelector("button");
const tasksContainerElement: HTMLElement=document.querySelector(".tasks");
const categoriesContainerElement:HTMLElement=document.querySelector(".categories");


const categories: Category[] = ["general","work", "gym", "hobby"];

const tasks: Task[]=[{
    title:"Wyrzucić śmieci",
    done:false
},
{
    title:"Pojść na siłke!",
    done:true,
    category: "gym"
},
{
    title:"Nakarmić koty",
    done:false
}];

const addTask= (task: Task)=>{
    tasks.push(task);
}

addButtonElement.addEventListener("click",(event: Event)=>{
    const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory: Category = selectedRadioElement.value as Category;
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false, category: selectedCategory});
    renderTasks(tasks, tasksContainerElement);
})

addTask({title: "klata", category:"gym", done:true});
renderCategories(categories,categoriesContainerElement);
renderTasks(tasks, tasksContainerElement);