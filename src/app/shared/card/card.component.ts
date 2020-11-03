import { Component, Input, OnInit } from '@angular/core';

import { IFishka } from '@core/interfaces/fishka.interface';

@Component({
  selector: 'fishka-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public difficulty = {
    e: 'Łatwe pytanie',
    i: 'Umiarkowane pytanie',
    h: 'Trudne pytanie',
  };

  @Input() public fishka: IFishka;
}
