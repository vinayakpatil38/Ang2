import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsgComponent } from './Components/msg.component';
import { TlistComponent } from './Components/tlist/tlist.component';
import { AddTravelComponent } from './Components/add-travel/add-travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './Components/customer/customer.component';
import { RegisterComponent } from './Components/register/register.component';
import { HlgrowDirective } from './Directives/hlgrow.directive';

@NgModule({
  declarations: [
    AppComponent,
    MsgComponent,
    TlistComponent,
    AddTravelComponent,
    CustomerComponent,
    RegisterComponent,
    HlgrowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
