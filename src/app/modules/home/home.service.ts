import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IQuestion } from '@core/interfaces/question.interface';

export interface IStatistics {
  questions_count: number;
  categories_count: number;
}

@Injectable()
export class HomeService {
  constructor(public http: HttpClient) {}

  getStatisticsData(): Observable<IStatistics> {
    return this.http.get<IStatistics>(`${environment.apiUrl}core/statistics/`);
  }

  getRandomQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(`${environment.apiUrl}questions/random_list/`);
  }

  getRandomQuestion(): Observable<IQuestion> {
    return this.http.get<IQuestion>(`${environment.apiUrl}questions/random_list/?limit=1`).pipe(
      map((items) => {
        return items instanceof Array && items.length > 0 ? items[0] : null;
      })
    );
  }
}
