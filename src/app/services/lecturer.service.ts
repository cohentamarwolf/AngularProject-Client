import { Injectable } from "@angular/core";
import { Lecturer } from "../models/lecturer";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LectureService {
    lecturers!:Lecturer[];
    constructor(private _http: HttpClient) {

    }
    getLectures(): Observable<Lecturer[]> {
        return this._http.get<Lecturer[]>("/api/Lecturer");
    }
    getLectureById(id: number): Observable<Lecturer> {
        console.log('id', id);
            
        return this._http.get<Lecturer>(`/api/Lecturer/${id}`);
    }
    addLecture(user: Lecturer): Observable<boolean> {
        return this._http.post<boolean>("/api/Lecturer", user);
    }
    deleteLecture(id: number): Observable<boolean> {
        return this._http.delete<boolean>(`/api/Lecturer/${id}`);
    }
    updateLecture(id: number, user: Lecturer): Observable<boolean> {
        return this._http.put<boolean>(`/api/Lecturer/${id}`, user);
    }

    checkLecturer(name: string) {
        this.getLectures().subscribe(data => {
            this.lecturers = data;
        })
        const lecturer = this.lecturers.find(l => l.name === name);
        return lecturer;
    }

}