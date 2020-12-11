import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesService } from '@modules/categories/categories.service';
import { CategoriesGridComponent } from './categories-grid.component';
import { mockGetCategoriesResponse } from '@modules/categories/categories.service.spec';
import { By } from '@angular/platform-browser';

describe('CategoriesGridComponent', () => {
  let component: CategoriesGridComponent;
  let fixture: ComponentFixture<CategoriesGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesGridComponent);
    component = fixture.componentInstance;
    component.categories = mockGetCategoriesResponse.results;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render categories from @Input', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.categories-grid__items__item')).length).toBe(
      mockGetCategoriesResponse.results.length
    );
    // Check if category names are properly rendered
    expect(
      fixture.debugElement
        .queryAll(By.css('.categories-grid__items__item'))
        .map((item) => item.nativeElement.textContent.trim())
        .join(', ')
    ).toEqual(mockGetCategoriesResponse.results.map((item) => item.name).join(', '));
  });
});
