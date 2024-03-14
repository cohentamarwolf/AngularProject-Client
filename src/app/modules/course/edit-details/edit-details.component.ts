import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../../../models/course';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from '../../../services/course.service';
@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input() course!: Course;
  editCourse!: FormGroup;

  //constructor(
  // public dialogRef: MatDialogRef<CourseDetailsComponent>,
  // @Inject(MAT_DIALOG_DATA) public course: Course,
  // private _courseServise: courseService) { }
  @Output() courseSaved: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(private _courseServise: CourseService) { }

  ngOnInit() {
    this.editCourse = new FormGroup({
      name: new FormControl(this.course.name),
      category: new FormControl(this.course.category),
      countOfLessons: new FormControl(this.course.countOfLessons),
      start: new FormControl(this.course.start),
      syllabus: new FormControl(this.course.syllabus),
      study: new FormControl(this.course.study),
      image: new FormControl(this.course.image),
      lecturer: new FormControl(this.course.lecturer)
    });
  }

  saveCourseDetails(): void {
    console.log(this.course);
    this.courseSaved.emit(this.editCourse.value);

    this._courseServise.putCourse(this.course.id, this.editCourse.value).subscribe(data => {
      this._courseServise.get();
      this.courseSaved.emit(this.editCourse.value);
    });
  }
}
