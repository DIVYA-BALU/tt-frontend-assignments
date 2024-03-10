import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("accessToken");
    if (token) {
      const authReq = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
