import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  
  students: Student[];
  delete(student: Student): void {
    //this.employees.splice(this.employees.indexOf(emp), 1);
    this.studentService.delete_student(student.id).subscribe((res)=>{  
        let index = this.students.indexOf(student);  
        this.students.splice(index, 1);  
      });  
  }
  constructor(public studentService: StudentService) { }
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.get_students().subscribe((res) => this.students = res);
  }

}