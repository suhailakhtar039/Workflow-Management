import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from './case-list/case-list-component';
import { CaseCreateComponent } from './case-create/case-create-component';
import { CaseDetailComponent } from './case-detail/case-detail-component';

const routes: Routes = [
  {
    path: '',
    component: CaseListComponent,
  },

  {
    path: 'create',
    component: CaseCreateComponent,
  },

  {
    path: ':id/edit',
    component: CaseCreateComponent,
  },

  {
    path: ':id',
    component: CaseDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
