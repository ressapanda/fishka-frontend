import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { QuestionsService } from '@shared/services/questions.service';
import { IQuestion } from '@core/interfaces/question.interface';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'fishka-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements AfterViewInit {
  public question: IQuestion;

  constructor(public loaderService: LoaderService, private route: ActivatedRoute, private qs: QuestionsService) {}

  ngAfterViewInit(): void {
    this.route.params.pipe(take(1)).subscribe((params: Params) => {
      this.getQuestion(params.id);
    });
  }

  getQuestion(id: number) {
    this.loaderService.showLoader();
    this.qs
      .get(id)
      .pipe(tap(() => this.loaderService.hideLoader()))
      .subscribe((question: IQuestion) => {
        this.question = question;
      });
  }
}
