import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  login() {
    this.router.navigate(['home']);
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
