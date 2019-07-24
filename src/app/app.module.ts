import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LoadingserviceService } from './LoadingService/loadingservice.service';
import { LoaderInterceptor } from './Interceptor/loader.interceptor';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoadingserviceService,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }]
})
export class AppModule { }
