import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from '../../../services/course.service';
import { Course, Study } from '../../../models/course';
import { CategoryService } from '../../../services/category.service';
import { LectureService } from '../../../services/lecturer.service';
import { Lecturer } from '../../../models/lecturer';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  courseData!: Course;
  hide = true;
  courseForm!: FormGroup;
  studyEnumValues = Object.values(Study);
  lecturers?: Lecturer[];
  studyTypes = [
    { value: Study.OnLine, viewValue: 'Online' },
    { value: Study.OffLine, viewValue: 'Offline' },
    { value: Study.Hybrid, viewValue: 'Hybrid' }
  ];
  constructor(private _courseService: CourseService, private _router: Router,
    private _snackBar: MatSnackBar, private _categoryService: CategoryService, private _lectureService: LectureService) {
    _lectureService.getLectures().subscribe((data) => {
      this.lecturers = data;
    });
  }
  ngOnInit(): void {
    this.courseForm = new FormGroup({
      "id": new FormControl(),
      "lecture": new FormControl(),
      "name": new FormControl(null, [Validators.minLength(3), Validators.required]),
      "category": new FormControl(),
      "countOfLessons": new FormControl(),
      "start": new FormControl(),
      "syllabus": new FormControl(),
      "study": new FormControl(null, Validators.required),
      "image": new FormControl()
    });
  }
  onSubmit(): void {
    if (this.courseForm.valid) {
      this.courseData = {
        id: this.courseForm.get('id')?.value,
        lecturer: undefined,
        name: this.courseForm.get('name')?.value,
        category: this.courseForm.get('category')?.value,
        countOfLessons: this.courseForm.get('countOfLessons')?.value,
        start: this.courseForm.get('start')?.value,
        syllabus: this.courseForm.get('syllabus')?.value,
        study: this.courseForm.get('study')?.value,
        image: this.courseForm.get('image')?.value,
      };
      console.log('course data', this.courseData);
      var lectureId = this.courseForm.get('lecture')?.value;
      debugger
      this._lectureService.getLectureById(lectureId).subscribe((data) => {
        console.log("subscribe" + data);
        this.courseData.lecturer = data;
      })
      console.log(this.courseData.lecturer?.name);
      if (this._courseService.checkCourse(this.courseForm.get('name')?.value,
        this.courseData.lecturer?.name) == undefined) {
        this._courseService.addCourse(this.courseData).subscribe(() => {
          Swal.fire('Success', 'Course added successfully!', 'success').then(() => {
            this._router.navigate(['/all-courses']);
          });
        });
      }
      else {
        this._snackBar.open("The course is exist", "close", {
          duration: 3000,
        });
        this.courseForm.get('name')!.setValue('');
        this.courseForm.get('lecture')!.setValue('');
      }
    }
    else {
      this._snackBar.open("Please fill all required fields", "close", {
        duration: 3000,
      });
    }
  }
  getCategories() {
    return this._categoryService.getCategory();
  }
  getLectures() {
    this._lectureService.getLectures().subscribe(data => {
      this.lecturers = data;
    });
  }
}


