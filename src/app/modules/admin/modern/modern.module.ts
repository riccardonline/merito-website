import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TreoCardModule } from '@treo/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { pricingModernRoutes } from './modern.routing';
import { PricingModernComponent } from './modern.component';

@NgModule({
  declarations: [
    PricingModernComponent
  ],
  imports: [
    RouterModule.forChild(pricingModernRoutes),
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    TreoCardModule,
    SharedModule
  ]
})
export class PricingModernModule {
}
