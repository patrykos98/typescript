import { Task } from "../types/types";


const render=(tasks: Task[],tasksContainerElement:HTMLElement)=>{
    tasksContainerElement.innerHTML="";
    tasks.forEach((task,index)=>{
        const taskElement: HTMLElement=document.createElement("li");
        if(task.category){
        taskElement.classList.add(task.category);
        }
        const id: string=`task-${index}`;
        const labelElement: HTMLLabelElement=document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for",id);

        const checkBoxElement: HTMLInputElement = document.createElement("input");
        checkBoxElement.type="checkbox";
        checkBoxElement.name=task.title;
        checkBoxElement.id=id;
        checkBoxElement.checked=task.done;
        checkBoxElement.addEventListener("change",()=>task.done=!task.done);

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkBoxElement);
        
        tasksContainerElement.appendChild(taskElement);
    })
}

export default render;