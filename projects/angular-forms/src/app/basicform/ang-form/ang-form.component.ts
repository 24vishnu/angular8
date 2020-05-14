import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ang-form',
  templateUrl: './ang-form.component.html',
  styleUrls: ['./ang-form.component.scss']
})
export class AngFormComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenUserNames = ['vishnu', 'Leo'];
  // Rective form/
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
          username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)], ),
          email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
        }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // hit when value is change
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // execute when state is call (valid or invalid)
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
    // set own default values in to form
    this.signupForm.setValue({
      userData: {
        username: 'shathis kumar',
        email: 'shathis@test.com'
      },
      gender: 'male',
      hobbies: []
    });
    // patchValue form the form
    this.signupForm.patchValue({
      userData: {
        username: 'Akhil'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    console.log('hi:  ', control);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    } else {
      return null;
    }
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'vishnu23kumar@gmail.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

}
