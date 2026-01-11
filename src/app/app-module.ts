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

import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './core/interceptors/error-interceptors';
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
    ButtonModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    provideBrowserGlobalErrorListeners(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
  bootstrap: [App],
})
export class AppModule {}
