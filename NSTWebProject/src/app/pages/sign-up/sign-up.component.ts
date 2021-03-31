import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    })
  }

  addNewUser() {
      this.userService.saveUser(this.userForm.value).subscribe(
        response => this.router.navigate(["/login"]),
        error => console.log(error))

  }
}
