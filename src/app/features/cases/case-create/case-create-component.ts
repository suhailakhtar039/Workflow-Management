import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseService } from '../services/case-service';
import { NotificationService } from '../../../core/services/notification-service';

@Component({
  selector: 'app-case-create-component',
  standalone: false,
  templateUrl: './case-create-component.html',
  styleUrl: './case-create-component.css',
})
export class CaseCreateComponent {
  case!: FormGroup;
  statusOptions;

  isEditMode: boolean = false;
  caseId!: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private caseService: CaseService,
    private notificationService: NotificationService
  ) {
    this.case = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.caseId = id;
      const existingCase = this.caseService.getCaseById(id);
      if (existingCase) {
        this.case.patchValue(existingCase);
      }
    }

    this.statusOptions = [
      { label: 'DRAFT', value: 'DRAFT' },
      { label: 'SUBMITTED', value: 'SUBMITTED' },
      { label: 'APPROVED', value: 'APPROVED' },
      { label: 'REJECTED', value: 'REJECTED' },
    ];
  }

  onSubmit(): void {
    if (this.isEditMode) {
      const existingCase = this.caseService.getCaseById(this.caseId);
      if (!existingCase) return;
      if (existingCase) {
        this.caseService.updateCase({ ...existingCase, ...this.case.value });
      }
      this.notificationService.success('Case Updated Successfully');
      // this.caseService.updateCase({ id: this.caseId, ...this.case.value });
    } else {
      this.caseService.createCase(this.case.value);
      this.notificationService.success('Case created successfully');
    }
    console.log('Case Created:', this.case.value.title);
    this.router.navigate(['/cases']);
  }
}
