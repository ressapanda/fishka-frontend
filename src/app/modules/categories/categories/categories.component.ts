import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../categories.service';
import { ICategory } from '../category.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { cleanObject } from '@utils/clean-object';
import { parsePaginationQuery } from '@utils/parse-pagination-query';
import { IPaginationResults } from '@core/interfaces/pagination-results';
import { take } from 'rxjs/operators';

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

  public totalCategories = 0;

  constructor(public categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe((queryParams: Params) => {
      Object.keys(queryParams).forEach((paramName) => {
        if (typeof this.paginationOptions[paramName]) {
          this.paginationOptions[paramName] = Number(queryParams[paramName]);
        }
      });

      this.getCategories();
    });
  }

  getCategories(page: number = this.paginationOptions.page) {
    this.paginationOptions.page = page;

    // Change query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: cleanObject({ ...this.paginationOptions }),
      queryParamsHandling: 'merge',
    });

    this.categoriesService
      .getCategories(parsePaginationQuery(this.paginationOptions))
      .subscribe((response: IPaginationResults<ICategory>) => {
        this.categories = response.results;
        this.totalCategories = response.count;
      });
  }
}
