import { Component } from '@angular/core';
import { Case, CaseService } from '../services/case-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-case-detail-component',
  standalone: false,
  templateUrl: './case-detail-component.html',
  styleUrl: './case-detail-component.css',
})
export class CaseDetailComponent {
  case!: Case;
  id!: string;
  found: boolean = true;
  constructor(
    private caseService: CaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.case = this.caseService.getCaseById(this.id)!;

    if (this.case === undefined) this.found = false;
  }
  goBack() {
    this.router.navigate(['/cases']);
  }
}
