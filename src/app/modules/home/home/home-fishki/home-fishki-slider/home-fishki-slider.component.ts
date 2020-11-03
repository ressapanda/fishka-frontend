import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

import { HomeService } from '../../../home.service';
import { IFishka } from '@core/interfaces/fishka.interface';

@Component({
  selector: 'fishka-home-fishki-slider',
  templateUrl: './home-fishki-slider.component.html',
  styleUrls: ['./home-fishki-slider.component.scss'],
})
export class HomeFishkiSliderComponent implements OnInit {
  public questions: IFishka[] = [];

  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true,
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  };

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.getRandomQuestions();
  }

  getRandomQuestions() {
    this.homeService.getRandomQuestions().subscribe((response) => (this.questions = response));
  }
}