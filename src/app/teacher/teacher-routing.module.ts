import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherlistComponent } from './teacherlist/teacherlist.component';


const routes: Routes = [
  {
    path: '',
    component: TeacherlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }