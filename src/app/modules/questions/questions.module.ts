import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { SharedModule } from '@shared/shared.module';
import { UIPaginationModule } from '../../../../projects/ui-pagination/src/lib/ui-pagination.module';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, QuestionsRoutingModule, SharedModule, UIPaginationModule],
})
export class QuestionsModule {}
