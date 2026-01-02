import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-case-create-component',
  standalone: false,
  templateUrl: './case-create-component.html',
  styleUrl: './case-create-component.css',
})
export class CaseCreateComponent {
  case!: FormGroup;
  statusOptions;
  constructor(private fb: FormBuilder) {
    this.case = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.statusOptions = [
      { label: 'Low', value: 'Low' },
      { label: 'Medium', value: 'Medium' },
      { label: 'High', value: 'High' },
    ];
  }

  onSubmit(): void {
    console.log('Case Created:', this.case);
  }
}
