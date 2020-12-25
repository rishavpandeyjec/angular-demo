import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-your-projects',
  templateUrl: './your-projects.component.html',
  styleUrls: ['./your-projects.component.css']
})
export class YourProjectsComponent implements OnInit {

  pageNumber=1;

  @Output()
  updatePage=new EventEmitter();

  constructor() { }

  onClickingViewProjects(){
    this.updatePage.emit(4);
  }

  ngOnInit(): void {
  }

}
