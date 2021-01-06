import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

import { IQuestion } from '@core/interfaces/question.interface';
import { IPaginationResults } from '@core/interfaces/pagination-results';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) {}

  getAll(params: { [key: string]: any } = {}): Observable<IPaginationResults<IQuestion>> {
    return this.http.get<IPaginationResults<IQuestion>>(this.getUrl(), { params });
  }

  private getUrl() {
    return `${environment.apiUrl}questions/`;
  }
}
