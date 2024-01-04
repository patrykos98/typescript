// <li>
//                 <label for="task-1">Wyrzucić śmieci</label>
//                 <input type="checkbox" id="task-1" name="Wyrzucić śmieci"/>
//             </li>
const taskNameInputElement: HTMLInputElement=document.querySelector("#name");
const addButtonElement: HTMLButtonElement=document.querySelector("button");
const tasksContainerElement: HTMLElement=document.querySelector(".tasks");
const categoriesContainerElement:HTMLElement=document.querySelector(".categories");

type Category="general" | "work" | "gym" | "hobby";

interface Task{
    title: string;
    done: boolean;
    category?: Category;
}

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

const renderCategories= ()=>{
    categories.forEach(category=>{
        const categoryElement: HTMLElement=document.createElement("li");

        const radioInputElement: HTMLInputElement=document.createElement("input");
        radioInputElement.type="radio";
        radioInputElement.name="category";
        radioInputElement.value= category;
        radioInputElement.id=`category-${category}`;

        const labelElement: HTMLLabelElement=document.createElement("label");
        labelElement.setAttribute("for",`category-${category}`);
        labelElement.innerText=category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    })
}

const addTask= (task: Task)=>{
    tasks.push(task);
}

addButtonElement.addEventListener("click",(event: Event)=>{
    const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory: Category = selectedRadioElement.value as Category;
    event.preventDefault();
    addTask({title: taskNameInputElement.value, done: false, category: selectedCategory});
    render();
})

addTask({title: "klata", category:"gym", done:true});
renderCategories();
render();