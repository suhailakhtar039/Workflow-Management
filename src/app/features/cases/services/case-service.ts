import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Case {
  id: string;
  title: string;
  status: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
  assignedTo: string;
  createdAt: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  casesSubject: BehaviorSubject<Case[]> = new BehaviorSubject<Case[]>([]);
  private readonly cases: Case[] = [
    {
      id: '1',
      title: 'Case 1',
      status: 'DRAFT',
      assignedTo: 'John Doe',
      createdAt: '2023-01-01',
      description: 'This is the description for Case 1',
    },
    {
      id: '2',
      title: 'Case 2',
      status: 'SUBMITTED',
      assignedTo: 'Jane Smith',
      createdAt: '2023-01-02',
      description: 'This is the description for Case 2',
    },
    {
      id: '3',
      title: 'Case 3',
      status: 'APPROVED',
      assignedTo: 'Bob Johnson',
      createdAt: '2023-01-03',
      description: 'This is the description for Case 3',
    },
    {
      id: '4',
      title: 'Case 4',
      status: 'REJECTED',
      assignedTo: 'Alice Brown',
      createdAt: '2023-01-04',
      description: 'This is the description for Case 4',
    },
  ];

  getCases(): Observable<Case[]> {
    return of(this.cases);
  }

  getCaseById(id: string): Case | undefined {
    return this.cases.find((c) => c.id == id);
  }

  updateCase(updatedCase: Case): void {
    const index = this.cases.findIndex((c) => c.id === updatedCase.id);
    this.cases[index] = { ...updatedCase };
    this.casesSubject.next(this.cases);
  }

  deleteCase(id: string): void {
    const updatedCase = this.cases.filter((c) => c.id != id);
    this.cases.length = 0;
    this.cases.push(...updatedCase);
    this.casesSubject.next(this.cases);
  }
}
