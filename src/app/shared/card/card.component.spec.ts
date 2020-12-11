import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from '@shared/card/card.component';
import { IFishka } from '@core/interfaces/fishka.interface';
import { MockSvgIconComponent } from '../../tests/svg-icon.mock.component';

const mockCard: IFishka = {
  id: 7,
  question: 'Question7',
  answer: 'Answer to question 7',
  difficulty: 'e',
  framework: {
    id: 7,
    name: 'Docker',
  },
  team: {
    id: 13,
    name: 'Devops',
  },
  language: null,
};

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, MockSvgIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.fishka = mockCard;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render fishka question', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.fishka__question')).nativeElement.textContent).toContain(
      mockCard.question
    );
  });

  it('should have difficulty class', () => {
    fixture.detectChanges();

    expect(
      fixture.debugElement
        .query(By.css('.fishka__difficulty'))
        .nativeElement.classList.contains('fishka__difficulty--easy')
    ).toBeTruthy();
  });
});
