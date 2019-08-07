import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import {StudentRoutingModule} from './student-routing.module';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentService } from './student.service';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingserviceService } from '../LoadingService/loadingservice.service';
import { LoaderInterceptor } from '../Interceptor/loader.interceptor';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [StudentlistComponent, StudenteditComponent],
  providers: [StudentService,LoadingserviceService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }]
})
export class StudentModule { }