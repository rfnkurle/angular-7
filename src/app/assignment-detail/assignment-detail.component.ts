import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assigments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
//@Input
  passedAssignment: Assignment;

//injects assignment service to make it available
  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }
    
  ngOnInit() {
    this.getAssignment();
  }

  getAssignment(){
    //snapshot returns a string, so + returns snapshot as a number
    const id = +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id)
    //assignment that comes back is equal to local assignment ie passedAssignment
  .subscribe(assignment => this.passedAssignment = assignment)
  
  }  

  onAssignmentSubmitted(){
    this.passedAssignment.submitted = true;
    this.assignmentsService.updateAssignments(this.passedAssignment)
    .subscribe(result => console.log(result))
  }

  onDelete(){
    //calls delete assignment method from service injection, using input passedAssignment
    this.assignmentsService.deleteAssignment(this.passedAssignment)
    .subscribe(result => console.log(result));
    
    // this.passedAssignment = null;//gets rid of card that is left after deleted
    
    this.router.navigate(['/home'])//brings you back to home page after delete
  }

  onClickEdit() {
    this.router.navigate(['/assignment', this.passedAssignment.id, 'edit'],
      {queryParams: {name: this.passedAssignment.name}, fragment: 'editing'});
  }

}
