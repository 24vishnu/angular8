import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngFormComponent } from './basicform/ang-form/ang-form.component';
import { AssignmentComponent } from './basicform/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AngFormComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
