import { Component, Input, OnInit } from '@angular/core';

import { IFishka } from '@core/interfaces/fishka.interface';

@Component({
  selector: 'fishka-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public difficulty = {
    e: 'Łatwe',
    i: 'Średnie',
    h: 'Trudne',
  };

  @Input() public fishka: IFishka;
}
