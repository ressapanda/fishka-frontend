import { HomeService, IStatistics } from '@modules/home/home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { IFishka } from '@core/interfaces/fishka.interface';
import { environment } from '@env/environment';

const mockRandomQuestions: IFishka[] = [
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

const statisticsMockData: IStatistics = { questions_count: 150, categories_count: 20 };

describe('HomeService', () => {
  let injector: TestBed;
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });

    injector = getTestBed();
    service = injector.inject(HomeService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('getStatisticsData()', () => {
    service.getStatisticsData().subscribe((res) => {
      expect(res).toEqual(statisticsMockData);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}core/statistics/`);
    expect(req.request.method).toBe('GET');
    req.flush(statisticsMockData);
  });

  it('getRandomQuestions()', () => {
    service.getRandomQuestions().subscribe((res) => {
      expect(res).toEqual(mockRandomQuestions);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}questions/random_list/`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRandomQuestions);
  });

  describe('getRandomQuestions()', () => {
    it('with data', () => {
      service.getRandomQuestion().subscribe((res) => {
        expect(res).toEqual(mockRandomQuestions[0]);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}questions/random_list/?limit=1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockRandomQuestions);
    });

    it('without data', () => {
      service.getRandomQuestion().subscribe((res) => {
        expect(res).toEqual(null);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}questions/random_list/?limit=1`);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });

  afterEach(() => {
    // Check if there no outstanding http calls
    httpMock.verify();
  });
});
