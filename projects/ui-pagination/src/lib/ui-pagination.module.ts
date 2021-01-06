import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UIPaginationComponent } from './ui-pagination.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UIPaginationComponent],
  exports: [UIPaginationComponent],
})
export class UIPaginationModule {}
