import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-your-worklist',
  templateUrl: './your-worklist.component.html',
  styleUrls: ['./your-worklist.component.css']
})
export class YourWorklistComponent implements OnInit {

  pageNumber=1;
  constructor() { }

  @Output()
  updatePage=new EventEmitter();

  onClickingViewWorklist(){
    this.updatePage.emit(5);
  }

  ngOnInit(): void {
  }

}
