import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from  './student'; 
@Injectable()
export class StudentService {

  constructor(private httpClient:HttpClient) { }
baseURL:string = "https://my-json-server.typicode.com/Goldenstriker/schoolappdb/";

  get_students(){
    return this.httpClient.get<Student[]>(this.baseURL+'/student');
  }
  get_student(id:number){
    return this.httpClient.get<Student>(this.baseURL+'/student/'+id);
  }
  delete_student(id:number){
    return this.httpClient.delete(this.baseURL+'/student/'+id);
  }

}