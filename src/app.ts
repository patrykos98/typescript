// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
//             </li>
const taskNameInputElement: HTMLInputElement=document.querySelector("#name");
const addButtonElement: HTMLButtonElement=document.querySelector("button");
const tasksContainerElement: HTMLElement=document.querySelector(".tasks");

interface Task{
    title: string;
    done: boolean;
    category?: "general" | "gym" | "work" | "hobby";
}

const categories: string[] = ["general","work", "gym", "hobby"];

const tasks: Task[]=[{
    title:"Wyrzucić śmieci",
    done:false
},
{
    title:"Pojść na siłke",
    done:true,
    category: "gym"
},
{
    title:"Nakarmić koty",
    done:false
}];

const render=()=>{
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

const addTask= (task: Task)=>{
    tasks.push(task);
}

addButtonElement.addEventListener("click",(event: Event)=>{
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false});
    render();
})

addTask({title: "klata", category:"gym", done:true});
render();