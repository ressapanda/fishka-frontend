import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UILoaderComponent } from './ui-loader.component';

@NgModule({
  declarations: [UILoaderComponent],
  imports: [CommonModule],
  exports: [UILoaderComponent],
})
export class UILoaderModule {}
