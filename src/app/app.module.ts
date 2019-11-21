import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatButtonModule, MatListModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AssigmentsService} from './shared/assigments.service';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    AssignmentDetailComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule

  ],
  providers: [AssigmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
