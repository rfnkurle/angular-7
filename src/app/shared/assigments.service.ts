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
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments)
  }
}
