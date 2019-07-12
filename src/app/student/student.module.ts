import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import {StudentRoutingModule} from './student-routing.module';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { CardComponent } from '../card/card.component';
@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    CardComponent
  ],
  declarations: [StudentlistComponent, StudenteditComponent]
})
export class StudentModule { }