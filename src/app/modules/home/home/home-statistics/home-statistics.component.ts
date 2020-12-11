import { Component, OnInit } from '@angular/core';

import findFirstLess from '@core/utils/find-first-less';
import { HomeService, IStatistics } from '../../home.service';

@Component({
  selector: 'fishka-home-statistics',
  templateUrl: './home-statistics.component.html',
  styleUrls: ['./home-statistics.component.scss'],
})
export class HomeStatisticsComponent implements OnInit {
  public statisticsData: IStatistics;

  public statisticsStepper = {
    questions_count: [5, 10, 25, 50, 100, 200, 250, 500, 1000],
    categories_count: [5, 10, 15, 30, 50, 80, 100],
  };

  constructor(public homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getStatisticsData().subscribe((statistics: IStatistics) => {
      this.statisticsData = {
        questions_count: findFirstLess(statistics.questions_count, this.statisticsStepper.questions_count),
        categories_count: findFirstLess(statistics.categories_count, this.statisticsStepper.categories_count),
      };
    });
  }
}
