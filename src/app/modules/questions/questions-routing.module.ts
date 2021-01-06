import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from '@modules/questions/question/question.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
  },
  {
    path: ':id',
    component: QuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
