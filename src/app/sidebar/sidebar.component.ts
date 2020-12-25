import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  pageToShow=0;

  @Output()
  updatePage=new EventEmitter<number>();

  constructor() { }

  onClickingHome(){
     this.updatePage.emit(1);
  }

  onClickingMessages(){
    this.updatePage.emit(2);
  }

  onClickingReports(){
    this.updatePage.emit(3);
  }


  ngOnInit(): void {
  }

}
