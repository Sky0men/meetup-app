import { HttpInterceptorFn } from '@angular/common/http';
const token = localStorage.getItem('token')

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: { 'Content-Type': `application/json`, 'Authorization': `Bearer ${token}`, },
  })
  return next(req);
};
