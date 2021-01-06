import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NguCarouselModule } from '@ngu/carousel';

import { CardComponent } from './components/card/card.component';
import { QuestionsService } from './services/questions.service';

@NgModule({
  imports: [HttpClientModule, AngularSvgIconModule, NguCarouselModule, CommonModule],
  exports: [HttpClientModule, AngularSvgIconModule, NguCarouselModule, CardComponent],
  declarations: [CardComponent],
  providers: [QuestionsService],
})
export class SharedModule {}
