import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assigments.service';
import { Assignment } from 'src/app/assignments/assignment.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  assignmentName: string;
  dueDate: Date;
  assignment: Assignment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentsService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.getAssignment(id);
  }

  getAssignment(id){
    this.assignmentService.getAssignment(id)
    .subscribe(assignment => this.assignment = assignment)
  }

  onSaveAssignment(){
    if (this.assignmentName){
      this.assignment.name = this.assignmentName;
    }
    if(this.dueDate){
      this.assignment.dueDate = this.dueDate;
    }
    this.assignmentService.updateAssignments(this.assignment)
    .subscribe( assignment => console.log(assignment + ' updated'))
    this.router.navigate(['/home']);
  }

}
