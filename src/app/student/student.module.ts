import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import {StudentRoutingModule} from './student-routing.module';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { CardComponent } from '../card/card.component';
import { StudentService } from './student.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule
  ],
  declarations: [StudentlistComponent, StudenteditComponent,CardComponent],
  providers: [StudentService]
})
export class StudentModule { }