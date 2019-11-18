import { Component, OnInit } from '@angular/core';
//logic file
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html', //references html file of component
  styleUrls: ['./assignments.component.css']//css file
})
export class AssignmentsComponent implements OnInit {
  // property that will bind to component html throgh string interpolation
  title = "SON of A BITCH! (this is coming from a Child Component)"
  constructor() { }

  ngOnInit() {
  }

}
