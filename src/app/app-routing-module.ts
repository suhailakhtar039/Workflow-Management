import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout-component/layout-component';
import { authGuard } from './core/guards/auth-guard';
import { roleGuard } from './core/guards/role-guard';

const routes: Routes = [
  // -----------------------------
  // Public routes (NO layout)
  // -----------------------------
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth-module').then((m) => m.AuthModule),
  },

  // -----------------------------
  // Protected routes (WITH layout)
  // -----------------------------
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module').then((m) => m.DashboardModule),
        canActivate: [roleGuard],
        data: {
          roles: ['ADMIN', 'OFFICER', 'VIEWER'],
        },
      },

      // future protected routes go here
      // cases, workflows, admin, etc.
    ],
  },
  {
    path: 'cases',
    loadChildren: () => import('./features/cases/cases-module').then((m) => m.CasesModule),
    canActivate: [roleGuard],
    data: {
      roles: ['ADMIN', 'OFFICER', 'VIEWER'],
    },
  },

  // Fallback
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
