import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { UIPaginationModule } from '../../../../projects/ui-pagination/src/lib/ui-pagination.module';
import { UILoaderModule } from '../../../../projects/ui-loader/src/lib/ui-loader.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [QuestionsComponent, QuestionComponent],
  imports: [CommonModule, QuestionsRoutingModule, SharedModule, UIPaginationModule, UILoaderModule],
})
export class QuestionsModule {}
