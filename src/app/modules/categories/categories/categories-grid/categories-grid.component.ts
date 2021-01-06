import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICategory } from '../../category.interface';

@Component({
  selector: 'fishka-categories-grid',
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.scss'],
})
export class CategoriesGridComponent {
  @Input() public categories: ICategory[] = [];

  @Input() public itemsCount = 0;

  @Input() public page = 1;
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() public limit = 5;

  getQueryParams(category: ICategory) {
    return { [category.category_type]: category.id };
  }
}
