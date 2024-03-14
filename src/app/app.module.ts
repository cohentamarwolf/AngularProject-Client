import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from './services/user.service';
import { LectureService } from './services/lecturer.service';
import { CategoryService } from './services/category.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CourseModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatToolbarModule
  ],
  providers: [
    CourseService,
    UserService,
    LectureService,
    CategoryService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }






