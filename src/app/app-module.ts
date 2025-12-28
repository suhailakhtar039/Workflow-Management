import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { LayoutModule } from './layout/layout-module';
import { SharedModule } from './shared/shared-module';
import { AuthModule } from './features/auth/auth-module';
import { DashboardModule } from './features/dashboard/dashboard-module';
import { CasesModule } from './features/cases/cases-module';
import { WorkflowModule } from './features/workflows/workflow-module';
import { AdminModule } from './features/admin/admin-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    CasesModule,
    WorkflowModule,
    AdminModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
