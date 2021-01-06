import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

import { HomeService } from '../../../home.service';
import { IQuestion } from '@core/interfaces/question.interface';

@Component({
  selector: 'fishka-home-fishki-slider',
  templateUrl: './home-fishki-slider.component.html',
  styleUrls: ['./home-fishki-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFishkiSliderComponent implements OnInit {
  public questions: IQuestion[] = [];

  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3, all: 0 },
    slide: 1,
    speed: 250,
    point: {
      visible: true,
    },
    load: 2,
    velocity: 0,
    touch: false,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  };

  constructor(public homeService: HomeService, public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getRandomQuestions();
  }

  getRandomQuestions() {
    this.homeService.getRandomQuestions().subscribe((response) => {
      this.questions = response;
      this.cdr.detectChanges();
    });
  }

  carouselTileLoad() {
    this.cdr.detectChanges();
  }
}
