import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { HomeStatisticsComponent } from './home-statistics.component';
import { HomeService, IStatistics } from '../../home.service';
import findFirstLess from '@utils/findFirstLess';
import { MockSvgIconComponent } from '../../../../tests/svg-icon.mock.component';

describe('HomeStatisticsComponent', () => {
  let component: HomeStatisticsComponent;
  let fixture: ComponentFixture<HomeStatisticsComponent>;
  let homeService: HomeService;

  const statisticsMockData: IStatistics = { questions_count: 150, categories_count: 20 };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStatisticsComponent, MockSvgIconComponent],
      providers: [
        {
          provide: HomeService,
          useValue: {
            getStatisticsData: () => of(statisticsMockData),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStatisticsComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStatisticsDetail', () => {
    spyOn(homeService, 'getStatisticsData').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    expect(homeService.getStatisticsData).toHaveBeenCalled();
  });

  it('should get statistics detail', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.statisticsData).toEqual({
      questions_count: findFirstLess(statisticsMockData.questions_count, component.statisticsStepper.questions_count),
      categories_count: findFirstLess(
        statisticsMockData.categories_count,
        component.statisticsStepper.categories_count
      ),
    });
  });

  it('should properly parse statistics data', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.statisticsData.questions_count).toBe(
      findFirstLess(statisticsMockData.questions_count, component.statisticsStepper.questions_count)
    );

    expect(component.statisticsData.categories_count).toBe(
      findFirstLess(statisticsMockData.categories_count, component.statisticsStepper.categories_count)
    );
  });

  it('should render statistics data', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const questionCount = findFirstLess(
      statisticsMockData.questions_count,
      component.statisticsStepper.questions_count
    );
    const categoriesCount = findFirstLess(
      statisticsMockData.categories_count,
      component.statisticsStepper.categories_count
    );

    expect(
      fixture.debugElement.query(By.css('#categories-statistics .home-statistics__data')).nativeElement.textContent
    ).toContain(categoriesCount + '+Kategorii');

    expect(
      fixture.debugElement.query(By.css('#questions-statistics .home-statistics__data')).nativeElement.textContent
    ).toContain(questionCount + '+Fishek');
  });
});
