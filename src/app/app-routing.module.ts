import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/user/login/login.component';
import { LogoutComponent } from './modules/user/logout/logout.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { AllCoursesComponent } from './modules/course/all-courses/all-courses.component';
import { AddCourseComponent } from './modules/course/add-course/add-course.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: '', redirectTo: '/all-courses', pathMatch: 'full' }, // ניתוב ברירת המחדל
  { path: '**', redirectTo: '/all-courses' } // ניתוב עבור כל נתיב אחר שאינו קיים
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

