import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddCourseComponent } from "./add-course/add-course.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { EditDetailsComponent } from "./edit-details/edit-details.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
//
import { MatButtonModule } from '@angular/material/button';
import { StudyIconPipe } from './study-icon.pipe';
@NgModule({
  declarations: [AddCourseComponent, AllCoursesComponent, CourseDetailsComponent, EditDetailsComponent,StudyIconPipe],
  imports: [CommonModule, MatCardModule, MatButton,MatButtonModule, MatIconModule, MatTabsModule,
    MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatToolbarModule,
    MatListModule, MatBottomSheetModule, MatSelectModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  exports: [AddCourseComponent, AllCoursesComponent, EditDetailsComponent]
})
export class CourseModule {

}
