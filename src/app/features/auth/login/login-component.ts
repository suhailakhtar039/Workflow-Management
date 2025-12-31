import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password);
    this.router.navigate(['/dashboard']);
  }
}
