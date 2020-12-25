import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('searchBar',{static:true})
  searchBar: SearchbarComponent;


  @ViewChild('sideBar',{static:true})
  sideBar:SidebarComponent;



  constructor(){

    this.searchBar=new SearchbarComponent();
    this.sideBar=new SidebarComponent();

  }


  changePageTo(pageNumber:number){

    this.sideBar.pageToShow=pageNumber;
    if(pageNumber===1)
    {
         this.searchBar.myLocation='>>Home';
    }
    else if(pageNumber===2)
    {
         this.searchBar.myLocation='>>Messages';
    }
    else if(pageNumber===3)
    {
         this.searchBar.myLocation='>>Reports';
    }
    else if(pageNumber===4)
    {
         this.searchBar.myLocation='>>Home>>Projects';
    }
    else if(pageNumber===5)
    {
         this.searchBar.myLocation='>>Home>>Worklist';
    }
    else
    {

    }
  }



  ngOnInit(): void{

  }
}
