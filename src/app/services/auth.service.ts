import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public loggedInStatus = false;
  private user = JSON.parse(localStorage.getItem('loggedInUser')!);

  constructor() {

  }

  ngOnInit() {
   
  }

  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedInUser') ||
      this.loggedInStatus.toString());
  }

  setLoginStatus(value: boolean) {
    return this.loggedInStatus = value;
  }


}
