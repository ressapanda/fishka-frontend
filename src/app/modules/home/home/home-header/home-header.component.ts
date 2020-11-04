import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../home.service';
import { IFishka } from '../../../../core/interfaces/fishka.interface';

@Component({
  selector: 'fiskha-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  public randomCard: IFishka = null;

  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getRandomQuestion().subscribe((response: IFishka) => (this.randomCard = response));
  }
}
