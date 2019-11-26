import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assigments.service'
//logic file
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html', //references html file of component
  styleUrls: ['./assignments.component.css']//css file
})
export class AssignmentsComponent implements OnInit {
  // property that will bind to component html throgh string interpolation
  title = "SON of A BITCH! (this is coming from a Child Component)"
  enabled = false;
  formVisible = false;

  selectedAssignment: Assignment;

  assignments: Assignment[];
  
  constructor(
    private assignmentsService: AssignmentsService
  ) { }

  ngOnInit() {
  this.assignments = this.assignmentsService.getAssignments();
  
}


setSelected(assignment: Assignment){
  this.selectedAssignment = assignment;
}

onAddBtnClick()
{
  this.formVisible = true;
  this.selectedAssignment = null;
}

onNewAssignment(event: Assignment){
  this.assignments.push(event);
  this.formVisible = false;
}
}
