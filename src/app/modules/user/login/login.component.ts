import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { LectureService } from '../../../services/lecturer.service';
import { CourseService } from '../../../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  password?: string;
  name!: string;
  isInstructor: boolean = false;
  courseName!: string; 
  constructor(private _userService: UserService, private _lecturerService: LectureService, private _courseService: CourseService, 
    private router: Router,private _snackBar: MatSnackBar) {
  }
  checkUser() {
    let someone!: any;
    // debugger
    if (this.isInstructor)
      someone = this._lecturerService.checkLecturer(this.name!);
    else
      someone = this._userService.checkUser(this.name!);
    if (someone) {
    // debugger
      console.log(someone.name)
      if (someone.password === this.password) {
        if (!this.isInstructor) {
          sessionStorage.setItem('username', this.name!);
          this.router.navigate(['/all-courses']);
        }
        else
          if (this._courseService.checkCourse(this.courseName, this.name!)) {
            sessionStorage.setItem('username', this.name!);
            this.router.navigate(['/all-courses']);
          }
          else{
            this.courseName = "";
            this._snackBar.open("Course name isnt correct", "close", {
              duration: 3000,
            });
          }
      }
      else {
        this.password = "";
        this._snackBar.open("Your password isnt correct", "close", {
          duration: 3000,
        });
        this.isInstructor = false;
      }

    } else {
      this._userService.setUserName(this.name);
      this.router.navigate(['/register']);
    }
  }
}