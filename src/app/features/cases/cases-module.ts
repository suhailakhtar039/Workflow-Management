import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing-module';
import { CaseListComponent } from './case-list/case-list-component';

@NgModule({
  declarations: [CaseListComponent],
  imports: [CommonModule, CasesRoutingModule],
})
export class CasesModule {}
