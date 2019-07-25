import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TeacherService {

  constructor(private httpClient:HttpClient) { }
  baseURL: string = "https://demodjango--goldenstriker.repl.co/fake/";
  get_students() {
    return this.httpClient.get<Student[]>(this.baseURL + '/student');
  }
  get_student(id: number) {
    return this.httpClient.get<Student>(this.baseURL + '/student/' + id);
  }
  delete_student(id: number) {
    return this.httpClient.delete(this.baseURL + '/student/' + id);
  }
}