import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
// tslint:disable
export class AuthService {
    constructor(private http: HttpClient) {}

    onSignup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzGjXxbu7Q5Ibw0AUy2F4D_aSzrcPdTUE', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    }

    onLogin(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzGjXxbu7Q5Ibw0AUy2F4D_aSzrcPdTUE', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage: string;
            switch(errorRes.error.error.message) {
                case 'INVALID_PASSWORD':
                    errorMessage = 'Password is not correct!'
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'Email does not exist!'
                    break;
                case 'EMAIL_EXISTS':
                    errorMessage = 'Email already exist!'
                    break;
                default:
                    errorMessage = 'Unknown Error!'                
            }
            return throwError(errorMessage);
    }
}
