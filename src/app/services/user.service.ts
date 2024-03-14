import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    users: User[] = [];
    userName?: string;
    constructor(private _http: HttpClient) {

    }
    getUserName() {
        return this.userName;
    }
    setUserName(name: string) {
        this.userName = name;
    }
    getUsers(): Observable<User[]> {
        return this._http.get<User[]>("/api/User");
    }
    getUserByName(name: string): Observable<User> {
        return this._http.get<User>(`/api/User/${name}`);
    }
    addUser(user: User): Observable<boolean> {
        return this._http.post<boolean>("/api/User/", user);
    }
    deleteUser(id: number): Observable<boolean> {
        return this._http.delete<boolean>(`/api/User/${id}`);
    }
    updateUser(id: number, user: User): Observable<boolean> {
        return this._http.put<boolean>(`/api/User/${id}`, user);
    }
    checkUser(name: string) {
        this.getUsers().subscribe(data => {
            this.users = data;
        });
        console.log(this.users);
        const user = this.users.find(u => u.name === name);
        return user;
    }
}