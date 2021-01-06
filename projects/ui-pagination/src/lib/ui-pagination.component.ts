import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss'],
})
export class UIPaginationComponent implements OnChanges {
  /**
   * Current Page
   */
  @Input() public currentPage = 1;

  /**
   * Page change emitter
   */
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Items per page
   */
  @Input() public itemsPerPage = 10;

  /**
   * Items per page change evmitter
   */
  @Output() public itemsPerPageChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Total items
   */
  @Input() public totalItems = 0;

  /**
   * Show prev/next controls
   */
  @Input() public showNavigationControls = true;

  /**
   * Pagination offset
   */
  @Input() public offset = 1;

  /**
   * Array of pages
   */
  public pagesArray: number[] = [];

  /**
   * Number of all pages
   */
  public pages: number;

  /**
   * Pagination start number
   */
  public start: number;

  /**
   * Pagination end number
   */
  public end: number;

  /**
   * Rerender pagination on every change
   */
  ngOnChanges() {
    this.rerender();
  }

  /**
   * Calculate pages and pagination offset
   */
  rerender(): void {
    this.pagesArray = [];
    this.pages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.start = this.currentPage > this.offset ? this.currentPage - this.offset : 1;
    this.end = this.currentPage + this.offset > this.pages ? this.pages : this.currentPage + this.offset;

    for (let i = this.start; i <= this.end; i++) {
      this.pagesArray.push(i);
    }
  }

  /**
   * Change page and emit change to parent
   * @param page Page
   */
  changePage(page: number) {
    this.pageChange.emit(page);
    this.currentPage = page;
  }
}
