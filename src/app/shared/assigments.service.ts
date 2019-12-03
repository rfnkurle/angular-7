import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [{
    name: "One",
    dueDate: new Date('2019-01-01'),
    submitted: true
  },
    {name: "Two",
    dueDate: new Date('2019-01-01'),
    submitted:false
}
]



  constructor(
   
  ) { }
//sets the observable as an assignemnt
  getAssignments(): Observable<Assignment []> {
    //of package lets you return an observable
    return of(this.assignments)
  }

  addAssignments(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment)
    return of ('assignment added!');//observable returned as string
  }

  updateAssignments(assignment: Assignment): Observable<string>{
    //loops through assignments array
    this.assignments.forEach((assignment, i) => {
      //if assignment passed in is equal to any assignments in array, replace it
      if(assignment === assignment){
        this.assignments[i] = assignment;
      }
    });

    return of('assignment updated!')
  }

  deleteAssignment(deletedAssignment: Assignment): Observable<string> {
    this.assignments.forEach((assignment, i) => {
      if(assignment === deletedAssignment){
        this.assignments.splice(i, 1); 
      }
    });
    return of('assignment deleted!')
  }

}
