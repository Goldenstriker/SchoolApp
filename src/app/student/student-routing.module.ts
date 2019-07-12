import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudenteditComponent } from './studentedit/studentedit.component';

const routes: Routes = [
  {
    path: '',
    component: StudentlistComponent
  },
  {
    path: '/edit',
    component: StudenteditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }