import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import {StudentRoutingModule} from './student-routing.module';
@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentlistComponent]
})
export class StudentModule { }