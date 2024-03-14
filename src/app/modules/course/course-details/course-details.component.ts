import { Component,Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../../../models/course';
import { CategoryService } from '../../../services/category.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
  providers: [CategoryService],
})
export class CourseDetailsComponent {
  @Input() course!: Course;

  editItem: boolean = false;
  constructor(public dialog: MatDialog, private _categoryService: CategoryService) { }
  ngOnInit() {
    this._categoryService.getCategory().find(x => x.id == this.course.category)
  }
  edit(flag: boolean) {
    this.editItem = flag;
  }
  isLecturerOfCourse() {
    const lecturer = sessionStorage.getItem('lecturer');
    return this.course!.lecturer?.name === lecturer;
  }

  showButton() {
    if (this.editItem)
      return false;
    return this.isLecturerOfCourse();

  }
  showEdit() {
    return this.isLecturerOfCourse() && this.editItem;
  }
}
