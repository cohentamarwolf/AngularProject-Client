import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private _courseService: CourseService) {
  }
  ngOnInit(): void {
    this._courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  isLecturerOfCourse(course: Course) {
    const lecturer = sessionStorage.getItem('lecturer');
    return course.lecturer?.name === lecturer;
  }
}


