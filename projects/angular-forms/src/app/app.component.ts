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

  onSubmit() {
    console.log(this.signUpForm);
  }
}
