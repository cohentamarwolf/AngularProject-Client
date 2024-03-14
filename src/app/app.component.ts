import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFinalProject';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Login',
        link: './login',
        index: 0
      }, {
        label: 'Logout',
        link: './logout',
        index: 1
      }, {
        label: 'Register',
        link: './register',
        index: 2
      }, {
        label: 'All Courses',
        link: './all-course',
        index: 3
      }, {
        label: 'Add Course',
        link: './add-course',
        index: 4
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
