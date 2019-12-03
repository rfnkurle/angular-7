import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assigments.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;

//injexts assignment service to make it available
  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit() {
  }

  onAssignmentSubmitted(){
    this.passedAssignment.submitted = true;
    this.assignmentService.updateAssignments(this.passedAssignment)
    .subscribe(result => console.log(result))
  }

  onDelete(){
    this.assignmentService.deleteAssignment(this.passedAssignment)
    .subscribe(result => console.log(result));
    this.passedAssignment = null;
  }

}
