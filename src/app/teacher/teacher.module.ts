import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import { TeacherService } from './teacher.service';
import { CardComponent } from '../card/card.component';
@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [TeacherlistComponent,CardComponent],
  providers: [TeacherService]
})
export class TeacherModule { }