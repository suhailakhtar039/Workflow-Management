import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-create-component',
  standalone: false,
  templateUrl: './case-create-component.html',
  styleUrl: './case-create-component.css',
})
export class CaseCreateComponent {
  case!: FormGroup;
  statusOptions;
  constructor(private fb: FormBuilder, private router: Router) {
    this.case = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.statusOptions = [
      { label: 'DRAFT', value: 'DRAFT' },
      { label: 'SUBMITTED', value: 'SUBMITTED' },
      { label: 'APPROVED', value: 'APPROVED' },
      { label: 'REJECTED', value: 'REJECTED' },
    ];
  }

  onSubmit(): void {
    console.log('Case Created:', this.case.value.title);
    this.router.navigate(['/cases']);
  }
}
