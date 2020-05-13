import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signUpForm: NgForm;
  defaultQuestion = 'place';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestName = 'superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestName,
    //     email: ''
    //   },
    //   secret: 'sport',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestName
      }
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }
}
