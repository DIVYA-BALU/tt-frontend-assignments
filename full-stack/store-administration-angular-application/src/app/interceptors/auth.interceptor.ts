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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const loginResponse = localStorage.getItem("loginResponse");
    
    if (loginResponse) {
      
        const cloned = request.clone({
            headers: request.headers.set("Authorization",
                "Bearer " + JSON.parse(loginResponse).jwt)
        });

        return next.handle(cloned);
    }
    return next.handle(request);
  }
}
