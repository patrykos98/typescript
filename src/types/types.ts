export interface Task{
    title: string;
    done: boolean;
    category?: Category;
}

export enum Category{
    GENERAL = 'general',
    WORK = 'work',
    GYM = 'gym',
    HOBBY = 'hobby'
}

