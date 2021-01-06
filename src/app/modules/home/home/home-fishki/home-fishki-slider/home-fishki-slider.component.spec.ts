import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeFishkiSliderComponent } from './home-fishki-slider.component';
import { IQuestion } from '@core/interfaces/question.interface';
import { HomeService } from '@modules/home/home.service';
import { MockSvgIconComponent } from '../../../../../tests/svg-icon.mock.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CardComponent } from '@shared/components/card/card.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

describe('HomeFishkiSlider', () => {
  let component: HomeFishkiSliderComponent;
  let fixture: ComponentFixture<HomeFishkiSliderComponent>;
  let homeService: HomeService;

  const mockRandomQuestions: IQuestion[] = [
    {
      id: 6,
      question: 'Question6',
      answer: 'Answer to question 6',
      difficulty: 'i',
      framework: null,
      team: null,
      language: null,
    },
    {
      id: 1,
      question: 'Question1',
      answer: 'Answer to question 1',
      difficulty: 'e',
      framework: {
        id: 1,
        name: 'Angluar',
      },
      team: {
        id: 12,
        name: 'Frontend',
      },
      language: {
        id: 9,
        name: 'Javascript',
      },
    },
    {
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
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFishkiSliderComponent, MockSvgIconComponent, CardComponent],
      imports: [NguCarouselModule],
      providers: [
        {
          provide: HomeService,
          useValue: {
            getRandomQuestions: () => of(mockRandomQuestions),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFishkiSliderComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRandomQuestions on init', () => {
    spyOn(component, 'getRandomQuestions').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.getRandomQuestions).toHaveBeenCalled();
  });

  it('carouselTileLoad should detectChanges', () => {
    const changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);

    // So, I am spying directly on the prototype.
    const detectChangesSpy = spyOn(changeDetectorRef.constructor.prototype, 'detectChanges');

    component.carouselTileLoad(); // Which internally calls the detectChanges.

    expect(detectChangesSpy).toHaveBeenCalled();
  });

  it('should call homeService getRandomQuestions', () => {
    spyOn(homeService, 'getRandomQuestions').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(homeService.getRandomQuestions).toHaveBeenCalled();
    expect(component.questions).toEqual(mockRandomQuestions);
  });

  it('should render carousel', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('ngu-carousel'))).toBeTruthy();
  });

  it('should render all fetched questions', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.fishki-carousel fishka-card')).length).toBe(
      mockRandomQuestions.length
    );
  });
});
