import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IQuestion } from '@core/interfaces/question.interface';

export const cardDifficulty = {
  e: 'Łatwe',
  i: 'Średnie',
  h: 'Trudne',
};

@Component({
  selector: 'fishka-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // TODO Input with config (eg. flippable)

  public difficulty = cardDifficulty;

  @Input() public flipped = false;

  @Output() public flippedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public fishka: IQuestion;

  flipCard() {
    this.flipped = !this.flipped;
    this.flippedChange.emit(this.flipped);
  }
}
