export class Task{
    name: string= "Nowe zadanie";
    done: boolean=true;
    category?: Category;
    createdAt: Date;

    constructor(name: string, done: boolean, category: Category=Category.GENERAL){
        this.name=name;
        this.done=done;
        this.category=category;
        this.createdAt=new Date();
    }

    logCreationDate(){
        console.log(`Task zostal stworzony ${this.createdAt}`);
    }
}

export enum Category{
    GENERAL = 'general',
    WORK = 'work',
    GYM = 'gym',
    HOBBY = 'hobby'
}

