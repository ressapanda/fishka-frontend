import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import toQueryString from '@utils/object-to-query-string';
import { IPaginationResults } from '@core/interfaces/pagination-results';
import { ICategory } from './category.interface';

@Injectable()
export class CategoriesService {
  constructor(public http: HttpClient) {}

  getCategories(params: {} = {}): Observable<IPaginationResults<ICategory>> {
    const queryParams = toQueryString(params);
    return this.http.get<IPaginationResults<ICategory>>(
      `${environment.apiUrl}categories/questions_count/?${queryParams}`
    );
  }
}
