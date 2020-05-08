export class AuthService {
    logginedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.logginedIn);
                }, 100);
            }
        );
        return promise;
    }

    login() {
        this.logginedIn = true;
    }

    logout() {
        this.logginedIn = false;
    }
}
