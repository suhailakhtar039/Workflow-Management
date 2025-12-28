import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-layout-component',
  standalone: false,
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;
  visible: boolean = false;

  userMenuItems: MenuItem[] = [
    {
      label: 'My Profile',
      icon: 'pi pi-user',
      command: () => this.onProfile(),
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => this.onSettings(),
    },
    {
      separator: true,
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      command: () => this.onLogout(),
    },
  ];

  constructor(private router: Router) {}

  closeDrawer(): void {
    this.visible = false;
  }

  onProfile(): void {
    this.router.navigate(['/profile']);
  }

  onSettings(): void {
    this.router.navigate(['/settings']);
  }

  onLogout(): void {
    // TODO: Implement logout logic
    console.log('Logging out...');
    // Example: this.authService.logout();
    // this.router.navigate(['/login']);
  }
}
