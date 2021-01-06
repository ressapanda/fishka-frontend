import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IQuestion } from '@core/interfaces/question.interface';

export const cardDifficulty = {
  e: 'Łatwe',
  i: 'Średnie',
  h: 'Trudne',
};

export interface CardConfig {
  flip: boolean;
}

@Component({
  selector: 'fishka-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public difficulty = cardDifficulty;

  @Input() public flipped = false;

  @Input() public config: CardConfig = {
    flip: true,
  };

  @Output() public flippedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public fishka: IQuestion;

  flipCard() {
    this.flipped = !this.flipped;
    this.flippedChange.emit(this.flipped);
  }
}
