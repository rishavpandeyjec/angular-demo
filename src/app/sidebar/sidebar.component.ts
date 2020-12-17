import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  pageToShow=3;

  whereAmI='';

  @Output()
  pageChangeEvent = new EventEmitter();

  constructor() { }

  onSelection(x : number){
     this.pageToShow=x;
     if(x===1)
     {
       this.whereAmI='>>Home';
     }
     else if(x===2)
     {
      this.whereAmI='>>Messages';
     }
     else if(x===3)
     {
      this.whereAmI='>>Reports';
     }
     else
     {

     }
     this.pageChangeEvent.emit(this.whereAmI);
  }

  ngOnInit(): void {
  }

}
