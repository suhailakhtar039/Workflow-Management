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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { CaseCreateComponent } from './case-create/case-create-component';

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
];
@NgModule({
  declarations: [CaseListComponent, CaseCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CasesRoutingModule,
    ...primengModulesAndImports,
  ],
})
export class CasesModule {}
