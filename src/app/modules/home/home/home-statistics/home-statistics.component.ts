import { Component } from '@angular/core';
import { HomeService, IStatistics } from '../../home.service';

@Component({
  selector: 'fishka-home-statistics',
  templateUrl: './home-statistics.component.html',
  styleUrls: ['./home-statistics.component.scss'],
})
export class HomeStatisticsComponent {
  public statisticsData: IStatistics;

  constructor(public homeService: HomeService) {
    this.homeService.getStatisticsData().subscribe((statistics: IStatistics) => (this.statisticsData = statistics));
  }
}
