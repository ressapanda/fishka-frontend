import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public showLoaderSub: Subject<any> = new Subject<any>();
  public hideLoaderSub: Subject<any> = new Subject<any>();

  showLoader() {
    this.showLoaderSub.next();
  }

  hideLoader() {
    this.hideLoaderSub.next();
  }
}
