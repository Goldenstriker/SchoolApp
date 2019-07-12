import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
