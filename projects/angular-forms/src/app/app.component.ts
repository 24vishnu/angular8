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
  user = {
    username: '',
    email: '',
    screreQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.screreQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
