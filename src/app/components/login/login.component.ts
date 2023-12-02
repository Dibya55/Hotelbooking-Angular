import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: any = {};
  constructor(private user: UserService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(data?: any) {

    const users = JSON.parse(localStorage.getItem('users')!) || [];
    const user = users.find((u: { email: any; password: any; }) => u.email === this.loginForm.email && u.password === this.loginForm.password);

    if (user) {
      this.authService.setLoginStatus(true);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login successful!');
      this.router.navigate(["home"]);
    } else {
      alert('Invalid email or password!');
    }
  }
}
