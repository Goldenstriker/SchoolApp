import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import { TeacherService } from './teacher.service';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ],
  declarations: [TeacherlistComponent],
  providers: [TeacherService]
})
export class TeacherModule { }