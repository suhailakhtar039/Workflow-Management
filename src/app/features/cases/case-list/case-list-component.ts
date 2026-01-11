import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Case, CaseService } from '../services/case-service';
import { map, Observable } from 'rxjs';
import { User } from '../../../core/auth/auth.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification-service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-case-list-component',
  standalone: false,
  templateUrl: './case-list-component.html',
  styleUrl: './case-list-component.css',
})
export class CaseListComponent {
  currentUser$!: Observable<User | null>;
  cases$!: Observable<Case[]>;

  isAdmin$!: Observable<boolean>;
  isOfficer$!: Observable<boolean>;
  isViewer$!: Observable<boolean>;
  dt: any;

  constructor(
    private authService: AuthService,
    private caseService: CaseService,
    private router: Router,
    private notificationService: NotificationService,
    private confirmationService: ConfirmationService
  ) {
    this.currentUser$ = this.authService.currentUser$;
    this.cases$ = this.caseService.getCases();

    this.isAdmin$ = this.currentUser$.pipe(map((user) => user?.role === 'ADMIN'));

    this.isOfficer$ = this.currentUser$.pipe(map((user) => user?.role === 'OFFICER'));

    this.isViewer$ = this.currentUser$.pipe(map((user) => user?.role === 'VIEWER'));
  }

  onEdit(caseItem: Case): void {
    console.log('Edit case:', caseItem);
    this.router.navigate(['/cases', caseItem.id, 'edit']);
  }

  onDelete(caseItem: Case): void {
    console.log('clicked on delete');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this case?',
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.notificationService.success('Delete simulated');
      },
    });
  }

  onView(caseItem: Case): void {
    console.log('View case:', caseItem);
    this.router.navigate(['/cases', caseItem.id]);
  }
}
