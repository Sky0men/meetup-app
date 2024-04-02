import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state): boolean => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (authService.user) {
    return true;
  } 
  alert('Авторизуйтесь!');
  router.navigate(['auth']);
  return false; 
};
