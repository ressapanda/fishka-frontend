import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NguCarouselModule } from '@ngu/carousel';

import { CardComponent } from './card/card.component';

@NgModule({
  imports: [HttpClientModule, AngularSvgIconModule, NguCarouselModule, CommonModule],
  exports: [HttpClientModule, AngularSvgIconModule, NguCarouselModule, CardComponent],
  declarations: [CardComponent],
})
export class SharedModule {}
