import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '@shared/services/questions.service';
import { take } from 'rxjs/operators';
import { IQuestion } from '@core/interfaces/question.interface';

@Component({
  selector: 'fishka-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public question: IQuestion;

  constructor(private route: ActivatedRoute, private qs: QuestionsService) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params: Params) => {
      this.getQuestion(params.id);
    });
  }

  getQuestion(id: number) {
    this.qs.get(id).subscribe((question: IQuestion) => (this.question = question));
  }
}
