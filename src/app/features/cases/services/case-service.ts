import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Case {
  id: string;
  title: string;
  status: 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
  assignedTo: string;
  createdAt: string;
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
    },
    {
      id: '2',
      title: 'Case 2',
      status: 'SUBMITTED',
      assignedTo: 'Jane Smith',
      createdAt: '2023-01-02',
    },
    {
      id: '3',
      title: 'Case 3',
      status: 'APPROVED',
      assignedTo: 'Bob Johnson',
      createdAt: '2023-01-03',
    },
    {
      id: '4',
      title: 'Case 4',
      status: 'REJECTED',
      assignedTo: 'Alice Brown',
      createdAt: '2023-01-04',
    },
  ];

  getCases(): Observable<Case[]> {
    return of(this.cases);
  }
}
