import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// Intercepts and handles an HttpRequest or HttpResponse.
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // ...
        // maniputing request object
        const modifyRequest = req.clone({
            headers: req.headers.append('Interceptor_header', 'Value from interceptor')
        });
        return next.handle(modifyRequest)
        // response interceptors
        .pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log(event.body);
            }
        }));
    }
}
