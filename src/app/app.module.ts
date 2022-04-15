import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportComponent } from './reports/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
