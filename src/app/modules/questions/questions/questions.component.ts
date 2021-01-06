import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { cleanObject } from '@utils/clean-object';
import { parsePaginationQuery } from '@utils/parse-pagination-query';
import { IQuestion } from '@core/interfaces/question.interface';
import { IPaginationResults } from '@core/interfaces/pagination-results';
import { QuestionsService } from '@shared/services/questions.service';
import { cardDifficulty } from '@shared/components/card/card.component';

@Component({
  selector: 'fishka-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements AfterViewInit {
  public questions: IQuestion[] = [];

  public questionDifficulty = cardDifficulty;

  public pagination = {
    page: 1,
    limit: 5,
  };

  public totalQuestions = 0;

  private filters = {
    categories: null,
  };

  constructor(private qs: QuestionsService, private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.route.queryParams.pipe(take(1)).subscribe((queryParams: Params) => {
      const filters = {};
      Object.keys(queryParams).forEach((paramName) => {
        if (typeof this.filters[paramName]) {
          this.filters[paramName] = queryParams[paramName];
          filters[paramName] = queryParams[paramName];
        }
        if (typeof this.pagination[paramName]) {
          this.pagination[paramName] = Number(queryParams[paramName]);
        }
      });

      this.getQuestions();
    });
  }

  getQuestions(page: number = this.pagination.page) {
    this.pagination.page = page;

    // Change query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: cleanObject({ ...this.filters, ...this.pagination }),
      queryParamsHandling: 'merge',
    });

    this.qs.getAll(this.params).subscribe((response: IPaginationResults<IQuestion>) => {
      this.questions = response.results;
      this.totalQuestions = response.count;
    });
  }

  private get params() {
    return { ...cleanObject(this.filters), ...parsePaginationQuery(this.pagination) };
  }
}
