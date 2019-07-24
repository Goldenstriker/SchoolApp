import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoadingserviceService {
    isLoading:Subject<boolean> = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}