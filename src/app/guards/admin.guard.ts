import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (authService.user?.roles[0].id === 1) {
    return true;
  } 
  alert('вы не админ');
  router.navigate(['auth']);
  return false; 
};
