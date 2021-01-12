import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from '@shared/services/loader.service';
import { UILoaderComponent } from '../../projects/ui-loader/src/lib/ui-loader.component';

/**
 * App Component
 */
@Component({
  selector: 'fishka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('loaderRef') public loaderRef: UILoaderComponent;

  private loaderStateSubs: Subscription = new Subscription();

  constructor(public loaderService: LoaderService) {
    this.loaderStateSubs.add(this.loaderService.showLoaderSub.subscribe(() => (this.loaderRef.loader = true)));
    this.loaderStateSubs.add(this.loaderService.hideLoaderSub.subscribe(() => (this.loaderRef.loader = false)));
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.loaderStateSubs.unsubscribe();
  }
}
