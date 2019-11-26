import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model'
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

  getAssignments(): Assignment []{
    return this.assignments
  }
}
