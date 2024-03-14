import { Lecturer } from "./lecturer";

export class Course {
    id!: number;
    lecturer?: Lecturer;
    name?: string;
    category?: number;
    countOfLessons?: number;
    start?: Date;
    syllabus?: string[];
    study?: Study;
    image?: string;
}

export enum Study {
    OnLine = 1,
    OffLine = 2,
    Hybrid = 3
}
