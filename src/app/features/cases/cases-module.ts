import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing-module';
import { CaseListComponent } from './case-list/case-list-component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { CaseCreateComponent } from './case-create/case-create-component';
import { CaseDetailComponent } from './case-detail/case-detail-component';
import { ConfirmationService, MessageService } from 'primeng/api';

//prime ng imports

//prime ng modules
const primengModulesAndImports = [
  ButtonModule,
  TableModule,
  InputTextModule,
  InputIconModule,
  IconFieldModule,
  SelectModule,
  CardModule,
  TextareaModule,
  ToastModule,
  ConfirmDialogModule,
];
@NgModule({
  declarations: [CaseListComponent, CaseCreateComponent, CaseDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CasesRoutingModule,
    ...primengModulesAndImports,
  ],
})
export class CasesModule {}
