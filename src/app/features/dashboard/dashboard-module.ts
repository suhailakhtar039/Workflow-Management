import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home-component';
//primeng module
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

// storing primeng modules and imports
const primengModulesAndImports = [CardModule, ButtonModule];
@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [CommonModule, DashboardRoutingModule, ...primengModulesAndImports],
})
export class DashboardModule {}
