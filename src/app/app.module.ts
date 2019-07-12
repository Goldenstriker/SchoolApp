import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { CardComponent } from './card/card.component';
import {StudentModule} from './student/student.module';
import {TeacherModule} from './teacher/teacher.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,TeacherModule,StudentModule],
  declarations: [ AppComponent, CardComponent ],
  bootstrap:    [ AppComponent ],
  exports: [CardComponent]
})
export class AppModule { }
