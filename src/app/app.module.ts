import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSlideToggleModule} from '@angular/material';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AssignmentsService} from './shared/assigments.service';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component'
import {  Routes, RouterModule } from '@angular/router';
import { EditAssignmentComponent } from './assignment-detail/edit-assignment/edit-assignment.component'
import { AuthGuard } from './shared/auth.guard'
import { HttpClientModule } from '@angular/common/http'

//routes as the variable declaration connected with Routes from @angular/router
const routes: Routes = [
  {path:'', component: AssignmentsComponent},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent},
  {path: 'assignment/:id', component: AssignmentDetailComponent},
  {path: 'assignment/:id/edit', 
  canActivate: [AuthGuard],
  component: EditAssignmentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent
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
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    HttpClientModule,
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
