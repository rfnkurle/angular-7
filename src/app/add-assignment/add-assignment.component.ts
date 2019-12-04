import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assigments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  name: string;
  dueDate: Date;
  assignments: any;

  //allows to emit events FROM a chld component, of type <Assignment>
  // 
  
  newAssignment: Assignment;

  constructor( 
    private assignmentService: AssignmentsService
  ) { }

  ngOnInit() {
    
  }

  onSubmit(){
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    
    //below no longer needed because @output was commented out
    // this.newAssignment.emit(assignment);

    this.assignmentService.addAssignments(assignment);
  }

}
