import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }
  user:any;
  async onLogin(email, password) {
    try {
      const user = await this.authService.login(email.value, password.value);
      if (user) {
        this.user = []
        this.user.email = email;
        const isVerified = this.authService.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.error('Error --> ', error);
    }
  }

  
  private redirectUser(isVerified: boolean) {
    /// redirect --> admin
    if (isVerified) {
      
      
      //window.localStorage.setItem('user',this.user)
      this.router.navigate(['ownerpage']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
