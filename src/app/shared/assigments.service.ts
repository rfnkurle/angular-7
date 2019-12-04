import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service'

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
    {
    id: 1,
    name: "One",
    dueDate: new Date('2019-01-01'),
    submitted: true
  },
    {
      id: 2,
      name: "Two",
    dueDate: new Date('2019-01-01'),
    submitted:false
}
]



  constructor(
   private loggingService: LoggingService
  ) { }
//sets the observable as an assignemnt
  getAssignments(): Observable<Assignment[]> {
    //of package lets you return an observable
    return of(this.assignments)
  }
  //uses id --- confusingly different from above
  getAssignment(id: number): Observable<Assignment> {
    return of(this.assignments.find(x => x.id === id));
  }

  
  addAssignments(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment)

    this.loggingService.log(assignment.name, 'added');

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
    this.loggingService.log(assignment.name, 'updated');
    return of('assignment updated!')
  }

  deleteAssignment(deletedAssignment: Assignment): Observable<string> {
    this.assignments.forEach((assignment, i) => {
      if(assignment === deletedAssignment){
        this.assignments.splice(i, 1); 
      }
    });
    this.loggingService.log(deletedAssignment.name, 'deleted');
    return of('assignment deleted!')
  }

}
