import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher.service';
import {TeacherService} from '../teacher.service';
import { Observable, of,Subject } from 'rxjs';
import { LoadingserviceService } from '../../LoadingService/loadingservice.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  teachers: Teacher[];
  delete(teacher: Teacher): void {
    //this.employees.splice(this.employees.indexOf(emp), 1);
    this.teacherService.delete_teacher(teacher.id).subscribe((res)=>{  
        let index = this.teachers.indexOf(teacher);  
        this.teachers.splice(index, 1);  
      });  
  }
  constructor(public teacherService: TeacherService,private loadingserviceService:LoadingserviceService) { }
  ngOnInit() {
    this.get_teachers();
  }
  get_teachers() {
    this.teacherService.get_teachers().subscribe((res) => { this.teachers = res;});
  }

}