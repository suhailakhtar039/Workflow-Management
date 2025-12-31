import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const requiredRoles: string[] = route.data['roles'] || [];
  if (requiredRoles.length === 0) {
    return true;
  }

  const currentUser = authService.getCurrentUser();
  if (!currentUser || !requiredRoles.includes(currentUser.role)) {
    router.navigate(['/unauthorized']);
    return false;
  }
  return true;
};
