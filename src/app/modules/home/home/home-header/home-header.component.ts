import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../home.service';
import { IQuestion } from '@core/interfaces/question.interface';

@Component({
  selector: 'fiskha-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  public randomCard: IQuestion = null;

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getRandomQuestion().subscribe((response: IQuestion) => (this.randomCard = response));
  }
}
