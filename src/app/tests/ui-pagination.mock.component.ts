import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-pagination',
  template: '',
})
export class MockUIPaginationComponent {
  @Input() public currentPage = 1;
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() public itemsPerPage = 10;
  @Output() public itemsPerPageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() public totalItems = 0;
  @Input() public showNavigationControls = true;
  @Input() public offset = 1;
}
