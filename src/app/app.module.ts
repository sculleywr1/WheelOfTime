import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailComponent } from './components/add-detail/add-detail.component';
import { DetailDetailsComponent } from './components/detail-details/detail-details.component';
import { DetailsListComponent } from './components/details-list/details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailComponent,
    DetailDetailsComponent,
    DetailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
