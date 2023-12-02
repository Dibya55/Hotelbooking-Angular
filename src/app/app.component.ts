import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HotelBooking';
  constructor(private router: Router, public authService: AuthService) {
  }
  ngOnInit(): void {

  }

  logOut() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(["login"]);
    this.authService.setLoginStatus(false);;
  }
}
