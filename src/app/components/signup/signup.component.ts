
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: any = {
    name:"",
    email:"",
    password:""
  };
  @ViewChild('form') registeredForm!: NgForm;
  constructor(private user: UserService,
    private router: Router) { }

  ngOnInit() {

  }

  signup(form:NgForm) {
    console.log(this.registeredForm.form.value);
    console.log(form);
    if (this.registeredForm.form.valid) {
      let users = JSON.parse(localStorage.getItem('users')!) || [];

      const existingUser = users.find((u: { email: any; }) => u.email === this.signupForm.email);
      if (existingUser) {
        alert('Email already registered!');
        return;
      }
      users.push({
        name: this.signupForm.name,
        email: this.signupForm.email,
        password: this.signupForm.password
      });

      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful!');
      this.router.navigate(["login"]);
    }
  }
}



