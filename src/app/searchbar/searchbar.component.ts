import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  myLocation='';

  @Output()
  updatePage=new EventEmitter<number>();

  constructor() { }


  onClickingBell(){
    this.updatePage.emit(2);
  }

  ngOnInit(): void {
  }

}
