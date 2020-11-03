import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fishka-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
})
export class MainFooterComponent implements OnInit {
  public currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
