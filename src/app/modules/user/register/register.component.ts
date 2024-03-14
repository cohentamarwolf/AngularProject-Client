import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName?: string;
  hide = true;
  userForm!: FormGroup;
  constructor(private _userService: UserService, private _router: Router, private _snackBar: MatSnackBar) {
 this.userName=this._userService.getUserName();
  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      "id": new FormControl(),
      "name": new FormControl(this.userName, Validators.minLength(3)),
      "address": new FormControl(null),
      "mail": new FormControl(null, Validators.email),
      "password": new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    });
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: User = {
        id: this.userForm.get('id')?.value,
        name: this.userForm.get('name')?.value,
        address: this.userForm.get('address')?.value,
        mail: this.userForm.get('mail')?.value,
        password: this.userForm.get('password')?.value
      };
      if (this._userService.checkUser(this.userForm.get('name')?.value) == undefined) {
        this._userService.addUser(userData).subscribe();
        this._router.navigate(['/all-courses']);
      }
      else {
        this._snackBar.open("    ", "close", {
          duration: 3000,
        });
        this.userForm.get('name')!.setValue('');
      }
    }
  }
}
