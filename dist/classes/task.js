import { Category } from "../types/types.js";
export class TaskClass {
    constructor(name, done, category = Category.GENERAL) {
        this.name = "Nowe zadanie";
        this.done = true;
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate() {
        console.log(`Task zostal stworzony ${this.createdAt}`);
    }
}
