import { Injectable } from '@angular/core';
import { User } from './auth.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly currentUserSubject = new BehaviorSubject<User | null>(null);

  readonly currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  login(username: string, password: string) {
    const user: User = {
      id: '1',
      username,
      displayName: 'John Doe',
      role: 'ADMIN',
    };

    this.currentUserSubject.next(user);
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}
