import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IFishka } from '@core/interfaces/fishka.interface';

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

  getRandomQuestions(): Observable<IFishka[]> {
    return this.http.get<IFishka[]>(`${environment.apiUrl}questions/random_list/`);
  }
}
