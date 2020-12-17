import { SearchbarComponent } from './searchbar/searchbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-practice';

  @ViewChild('searchBar',{static:true})
  searchbar: SearchbarComponent;


  constructor(){
    this.searchbar=new SearchbarComponent();
  }

  updateMyLocation(event: string){
    this.searchbar.mylocation='My Portal';
     this.searchbar.mylocation+=event;
  }
  ngOnInit(): void{

  }
}
