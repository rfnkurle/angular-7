import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;


  constructor() { }

  ngOnInit() {
  }

  onAssignmentSubmitted(){
    this.passedAssignment.submitted = true;
  }

}
