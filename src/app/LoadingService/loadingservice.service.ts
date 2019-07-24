import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoadingserviceService {
    isLoading:boolean = false;
    show() {
        this.isLoading = true;
    }
    hide() {
        this.isLoading = false;
    }
}