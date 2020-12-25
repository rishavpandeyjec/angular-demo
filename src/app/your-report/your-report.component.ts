import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-your-report',
  templateUrl: './your-report.component.html',
  styleUrls: ['./your-report.component.css']
})
export class YourReportComponent implements OnInit {

  pageNumber=1;


  @Output()
  updatePage=new EventEmitter<number>();

  constructor() { }

  onClickingViewReports(){
    this.updatePage.emit(3);
  }
  ngOnInit(): void {
  }

}
