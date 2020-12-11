import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { IFishka } from '@core/interfaces/fishka.interface';
import { HomeService } from '../../home.service';
import { HomeHeaderComponent } from './home-header.component';
import { CardComponent } from '@shared/card/card.component';
import { MockSvgIconComponent } from '../../../../tests/svg-icon.mock.component';

describe('HomeHeaderComponent', () => {
  let component: HomeHeaderComponent;
  let fixture: ComponentFixture<HomeHeaderComponent>;
  let homeService: HomeService;

  const mockFishka: IFishka = {
    id: 1,
    question: 'Question',
    answer: 'Answer to question 4',
    difficulty: 'e',
    framework: {
      id: 2,
      name: 'Django',
    },
    team: {
      id: 3,
      name: 'Backend',
    },
    language: {
      id: 4,
      name: 'Python',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHeaderComponent, MockSvgIconComponent, CardComponent],
      providers: [
        {
          provide: HomeService,
          useValue: {
            getRandomQuestion: () => of(mockFishka),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRandomQuestion', () => {
    spyOn(homeService, 'getRandomQuestion').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(homeService.getRandomQuestion).toHaveBeenCalled();
  });

  it('should get random question', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.randomCard).toEqual(mockFishka);
  });

  it('should render fishka component', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('fishka-card'))).toBeTruthy();
  });
});
