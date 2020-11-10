import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories.service';
import { CategoriesGridComponent } from './categories/categories-grid/categories-grid.component';

@NgModule({
  declarations: [CategoriesComponent, CategoriesGridComponent],
  imports: [CommonModule, CategoriesRoutingModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
