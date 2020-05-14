import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  project: FormGroup;

  constructor() { }

  ngOnInit() {
    this.project = new FormGroup({
      projectName: new FormControl(
                    null,
                    [
                      Validators.required,
                      CustomValidators.invalidProjectName
                    ]),
      email: new FormControl(
                    null,
                    [
                      Validators.required,
                      Validators.email
                    ],
                    CustomValidators.invalidEmail
                    ),
      status: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.project.value);
  }
}
