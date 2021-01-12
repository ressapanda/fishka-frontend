import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrls: ['./ui-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UILoaderComponent {
  @HostBinding('class.loader--opened') private loaderOpened = false;

  private _loaderStatus = false;

  constructor(private cdr: ChangeDetectorRef) {}

  set loader(status: boolean) {
    if (this._loaderStatus !== status) {
      this._loaderStatus = status;
      this.loaderOpened = status;
      this.cdr.detectChanges();
    }
  }

  get loader() {
    return this._loaderStatus;
  }
}
