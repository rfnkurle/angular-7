import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assigments.service'
import { Router } from '@angular/router'

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

  //local array to disply on screen
  assignments: Assignment[];
  
  constructor(
    //injects an instance of the assignment service that we exported
    private assignmentsService: AssignmentsService,
    private router: Router
  ) { }

  ngOnInit() {
  // this.assignments = this.assignmentsService.getAssignments();
  this.getAssignments();
}

getAssignments(){
  
  //call our assignments service that was injected into constructor, 
  //call getAssignments method and subscribe to populate assignments array locally
  this.assignmentsService.getAssignments()
  .subscribe( assignments => this.assignments = assignments);
}//1.takes assignments from service, 2.sets it to local array 3.makes it equal to assignment service

setSelected(assignment: Assignment){
  // this.selectedAssignment = assignment;
  this.router.navigate(['assignment/' + assignment.id])
}

onAddBtnClick()
{
  // this.formVisible = true;
  this.selectedAssignment = null;
}

// onNewAssignment(event: Assignment){
//   this.assignmentsService.addAssignments(event)
//   .subscribe(success => console.log(success))
//   this.formVisible = false;
// }


}
