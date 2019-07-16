import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationGuard} from './authentication.guard';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: 'app/student/student.module#StudentModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'teacher',
    loadChildren: 'app/teacher/teacher.module#TeacherModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }