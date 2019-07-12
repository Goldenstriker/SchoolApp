import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import {TeacherRoutingModule} from './teacher-routing.module';
@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [TeacherlistComponent]
})
export class TeacherModule { }