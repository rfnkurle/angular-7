import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

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
  
  constructor() { }

  ngOnInit() {
  
  setTimeout( () => {
    this.enabled = true;
  }, 2000)
}


setSelected(assignment: Assignment){
  this.selectedAssignment = assignment;
}

onAddBtnClick()
{
  this.formVisible = true;
}
}
