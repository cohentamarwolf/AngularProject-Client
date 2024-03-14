import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService {
    categories: Category[] = [{ id: 1, name: "a", icon: "a" }, { id: 2, name: "b", icon: "a" }, { id: 3, name: "c", icon: "a" }];
    constructor(private _http: HttpClient) {

    }
    getCategory(){
        return this.categories;
    }
}