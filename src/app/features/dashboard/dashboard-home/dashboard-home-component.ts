import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-dashboard-home-component',
  standalone: false,
  templateUrl: './dashboard-home-component.html',
  styleUrl: './dashboard-home-component.css',
})
export class DashboardHomeComponent implements OnInit {
  username?: string;
  role?: string;
  isAdmin?: boolean;
  isOfficer?: boolean;
  isviewer?: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe({
      next: (user) => {
        console.log('Current User:', user);
        this.username = user?.username;
        this.role = user?.role;
        this.isAdmin = (user?.role as string) === 'ADMIN';
        this.isOfficer = (user?.role as string) === 'OFFICER';
        this.isviewer = (user?.role as string) === 'VIEWER';
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
  }
}
