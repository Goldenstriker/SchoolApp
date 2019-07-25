import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teacher} from './teacher.service';
@Injectable()
export class TeacherService {

  constructor(private httpClient:HttpClient) { }
  baseURL: string = "https://my-json-server.typicode.com/Goldenstriker/schoolappdb/";
  get_teachers() {
    return this.httpClient.get<Teacher[]>(this.baseURL+ '/teacher');
  }
  get_teacher(id: number) {
    return this.httpClient.get<Teacher>(this.baseURL + '/teacher/' + id);
  }
  delete_teacher(id: number) {
    return this.httpClient.delete(this.baseURL + '/teacher/' + id);
  }
}