import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeStatisticsComponent } from './home/home-statistics/home-statistics.component';
import { HomeService } from './home.service';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeFishkiComponent } from './home/home-fishki/home-fishki.component';
import { HomeFishkiSliderComponent } from './home/home-fishki/home-fishki-slider/home-fishki-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeStatisticsComponent,
    HomeAboutComponent,
    HomeFishkiComponent,
    HomeFishkiSliderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, SharedModule],
  providers: [HomeService],
})
export class HomeModule {}
