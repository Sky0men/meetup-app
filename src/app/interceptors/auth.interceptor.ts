import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: { 'Content-Type': `application/json` },
  })
  return next(req);
};