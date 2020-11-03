import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

const components = [MainLayoutComponent, MainFooterComponent, MainNavigationComponent];

@NgModule({
  exports: [],
  declarations: [...components],
  imports: [RouterModule, SharedModule],
})
export class LayoutModule {}
