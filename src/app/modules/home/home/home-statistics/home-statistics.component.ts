import { Component } from '@angular/core';
import { HomeService, IStatistics } from '../../home.service';

@Component({
  selector: 'fishka-home-statistics',
  templateUrl: './home-statistics.component.html',
  styleUrls: ['./home-statistics.component.scss'],
})
export class HomeStatisticsComponent {
  public statisticsData: IStatistics;

  public statisticsStepper = {
    questions_count: [5, 10, 25, 50, 100, 200, 250, 500, 1000],
    categories_count: [5, 10, 15, 30, 50, 80, 100],
  };

  constructor(public homeService: HomeService) {
    this.homeService.getStatisticsData().subscribe((statistics: IStatistics) => {
      this.statisticsData = {
        questions_count: this.findFirstLess(statistics.questions_count, this.statisticsStepper.questions_count),
        categories_count: this.findFirstLess(statistics.categories_count, this.statisticsStepper.categories_count),
      };
    });
  }

  findFirstLess(value: number, array: number[]) {
    return array
      .sort((a, b) => a - b)
      .filter((item) => item < value)
      .reverse()[0];
  }
}
