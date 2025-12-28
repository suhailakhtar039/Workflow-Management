import { Component, ViewChild } from '@angular/core';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-layout-component',
  standalone: false,
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;
  closeCallback(e: Event): void {
    this.visible = false;
    this.drawerRef.close(e);
  }
  visible: boolean = false;
}
