import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { AuthService } from '../../core/auth/service/auth.service';
import { inject } from '@angular/core';
import { Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    authService: AuthService = inject(AuthService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.token;
        const type = this.authService.tokenType;
        if (token) {
            req = req.clone({ setHeaders: { Authorization: `${type} ${token}` } })
            console.log('User Token is Called Available');
        }
        return next.handle(req);
    }

}