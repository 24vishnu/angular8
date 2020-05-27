import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';


import { User } from './user.model';

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
    public user = new BehaviorSubject<User>(null);
    private remainingTime: any;

    constructor(
        private http: HttpClient,
        private router: Router) {}

    onSignup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzGjXxbu7Q5Ibw0AUy2F4D_aSzrcPdTUE', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap( respData => {
            this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
        }));
    }

    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _TOKEN: string;
            _TOKENEXPIRATIONDATE: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if(!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._TOKEN,
            new Date(userData._TOKENEXPIRATIONDATE)
        );

        if(loadedUser.token) {
            this.user.next(loadedUser);
            const expireDuration = new Date(
                userData._TOKENEXPIRATIONDATE
                ).getTime() - new Date().getTime();
            this.autoLogout(expireDuration);
        }
    }

    logout() {
        localStorage.clear();
        this.user.next(null);
        this.router.navigate(['./auth']);
        if(this.remainingTime) {
            clearTimeout(this.remainingTime);
        }
        this.remainingTime = null;
    }

    autoLogout(expirationTime: number) {
        this.remainingTime = setTimeout(() => {
            this.logout();
        }, expirationTime);
    }

    onLogin(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzGjXxbu7Q5Ibw0AUy2F4D_aSzrcPdTUE', 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError),  tap( respData => {
            this.handleAuthentication(respData.email, respData.localId, respData.idToken, +respData.expiresIn);
        }));
    }

    private handleAuthentication(email: string, userId: string, idToken: string, expiresIn: number) {
        const expireDate = new Date(new Date().getTime() + +expiresIn * 1000);
            const user = new User(
                email,
                userId, 
                idToken, 
                expireDate);
            this.user.next(user);
            this.autoLogout(expiresIn * 1000);
            localStorage.setItem('userData', JSON.stringify(user));
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
