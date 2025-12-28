import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout-component/layout-component';
import { RouterOutlet } from '@angular/router';
// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';

const primeModule = [
  ButtonModule,
  DrawerModule,
  AvatarModule,
  StyleClassModule,
  RippleModule,
  ToolbarModule,
  MenuModule,
];
@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterOutlet, ...primeModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
