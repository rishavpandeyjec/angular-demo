import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { YourProjectsComponent } from './your-projects/your-projects.component';
import { YourWorklistComponent } from './your-worklist/your-worklist.component';
import { YourReportComponent } from './your-report/your-report.component';
import { PortalUpdatesComponent } from './portal-updates/portal-updates.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorklistComponent } from './worklist/worklist.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SidebarComponent,
    YourProjectsComponent,
    YourWorklistComponent,
    YourReportComponent,
    PortalUpdatesComponent,
    ReportsComponent,
    ProjectsComponent,
    WorklistComponent,
    FooterComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
