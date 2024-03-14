import { Injectable } from "@angular/core";
import { Course } from "../models/course";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CourseService {
    courses: Course[] = [];
    constructor(private _http: HttpClient) {

    }
    getCourses(): Observable<Course[]> {
        return this._http.get<Course[]>("/api/Course");
    }
    getCourseById(id: number): Observable<Course> {
        return this._http.get<Course>(`/api/Course/${id}`);
    }
    addCourse(course: Course): Observable<boolean> {
        return this._http.post<boolean>("/api/Course/", course);
    }
    deleteCourse(id: number): Observable<boolean> {
        return this._http.delete<boolean>(`/api/Course/${id}`);
    }
    putCourse(id: number, course: Course): Observable<boolean> {
        return this._http.put<boolean>(`/api/Course/${id}`, course);
    }
    checkCourse(cname: string, lname?: string) {
        this.getCourses().subscribe(data => {
            this.courses = data;
        })
        let course = this.courses.find(c => c.name === cname && c.lecturer?.name === lname);
        console.log("aaaa"+course);
        return course;
    }
    get() {
        this.getCourses().subscribe(data => {
            this.courses = data;
        })
    }
}