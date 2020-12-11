import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import toQueryString from '@utils/object-to-query-string';
import { CategoriesService } from '@modules/categories/categories.service';
import { environment } from '@env/environment';
import { IPaginationResults } from '@core/interfaces/pagination-results';
import { ICategory } from '@modules/categories/category.interface';

export const mockGetCategoriesResponse: IPaginationResults<ICategory> = {
  count: 13,
  next: 'https://fishka.adrox.xyz/api/categories/questions_count/?limit=8&offset=8',
  previous: null,
  results: [
    { id: 1, name: 'Angluar', category_type: 'framework', questions_count: 3 },
    { id: 11, name: 'Backend', category_type: 'team', questions_count: 2 },
    { id: 13, name: 'Devops', category_type: 'team', questions_count: 2 },
    { id: 4, name: 'Django', category_type: 'framework', questions_count: 1 },
    { id: 7, name: 'Docker', category_type: 'framework', questions_count: 1 },
    { id: 5, name: 'FastApi', category_type: 'framework', questions_count: 0 },
    { id: 6, name: 'Flask', category_type: 'framework', questions_count: 0 },
    { id: 12, name: 'Frontend', category_type: 'team', questions_count: 3 },
  ],
};

describe('CategoriesService', () => {
  let injector: TestBed;
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriesService],
    });

    injector = getTestBed();
    service = injector.inject(CategoriesService);
    httpMock = injector.inject(HttpTestingController);
  });

  describe('getCategories()', () => {
    it('with queryParams', () => {
      const queryParams = {};
      service.getCategories(queryParams).subscribe((res) => {
        expect(res).toEqual(mockGetCategoriesResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}categories/questions_count/?${toQueryString(queryParams)}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockGetCategoriesResponse);
    });

    it('without queryParams', () => {
      service.getCategories().subscribe((res) => {
        expect(res).toEqual(mockGetCategoriesResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}categories/questions_count/?${toQueryString({})}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockGetCategoriesResponse);
    });
  });

  afterEach(() => {
    // Check if there no outstanding http calls
    httpMock.verify();
  });
});
