import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})
export class AuthComponent {
    isLoginMode = false;
    isLoading = false;
    isError: string = null;

    constructor(private authService: AuthService) {}

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
