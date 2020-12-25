import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {

  pageNumber=5;
  constructor() { }

  ngOnInit(): void {
  }

}
