import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
    static invalidProjectName(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Test') {
            return {invalidProjectName: true};
        } else {
            return null;
        }
    }
    static invalidEmail(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'vishnu23kumar@gmail.com') {
                    resolve({invalidEmail: true});
                } else {
                    resolve(null);
                }
            }, 1000);
        });
        return promise;
    }
}
