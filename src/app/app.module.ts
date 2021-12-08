import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsgComponent } from './Components/msg.component';
import { TlistComponent } from './Components/tlist/tlist.component';
import { AddTravelComponent } from './Components/add-travel/add-travel.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgComponent,
    TlistComponent,
    AddTravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
