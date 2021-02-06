import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlcoholListComponent } from './components/alcohol-list/alcohol-list.component';
import { AlcoholDetailsComponent } from './components/alcohol-details/alcohol-details.component';
import { AddAlcoholComponent } from './components/add-alcohol/add-alcohol.component';

@NgModule({
  declarations: [
    AppComponent,
    AlcoholListComponent,
    AlcoholDetailsComponent,
    AddAlcoholComponent
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
