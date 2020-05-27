import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    isError: string = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        this.isError = null;
        let authObs: Observable<AuthResponseData>;
        if (!form.valid) {
            return;
        }
        if (!this.isLoginMode) {
            this.isLoading = true;
            authObs = this.authService.onSignup(form.value.email, form.value.password);
        } else {
            this.isLoading = true;
            authObs = this.authService.onLogin(form.value.email, form.value.password);
        }
        authObs.subscribe(
            responseData => {
                console.log(responseData);
                this.isLoading = false;
                this.router.navigate(['./recipes']);
            },
            errorMessage => {
                console.log(errorMessage);
                this.isError = errorMessage;
                this.isLoading = false;
            }
        );
        form.reset();
    }
}
