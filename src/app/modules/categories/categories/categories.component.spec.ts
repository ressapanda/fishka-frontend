import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from '@modules/categories/categories/categories.component';
import { CategoriesService } from '@modules/categories/categories.service';
import { of } from 'rxjs';
import { mockGetCategoriesResponse } from '@modules/categories/categories.service.spec';
import { CategoriesGridComponent } from '@modules/categories/categories/categories-grid/categories-grid.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockUIPaginationComponent } from '../../../tests/ui-pagination.mock.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let categoriesService: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesComponent, CategoriesGridComponent, MockUIPaginationComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: CategoriesService,
          useValue: {
            getCategories: () => of(mockGetCategoriesResponse),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    categoriesService = TestBed.inject(CategoriesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should getCategories onInit', () => {
    it('call getCategories', () => {
      spyOn(component, 'getCategories').and.callThrough();

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.getCategories).toHaveBeenCalled();
    });

    it('load categories', () => {
      component.ngOnInit();
      fixture.detectChanges();

      expect(component.categories).toEqual(mockGetCategoriesResponse.results);
    });
  });
});
