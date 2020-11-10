import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';
import { ICategory } from '../category.interface';

interface IPaginationOptions {
  limit: number;
  page: number;
}

@Component({
  selector: 'fishka-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public paginationOptions: IPaginationOptions = {
    limit: 8,
    page: 1,
  };

  public categories: ICategory[] = [];

  constructor(public categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(page: number = this.paginationOptions.page) {
    this.paginationOptions.page = page;

    const options = {
      limit: this.paginationOptions.limit,
      offset: this.paginationOptions.page * this.paginationOptions.limit - this.paginationOptions.limit,
    };

    this.categoriesService.getCategories(options).subscribe((response) => (this.categories = response.results));
  }
}
