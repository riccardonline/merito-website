import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TreoCardModule } from '@treo/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { PricingModernComponent } from './modern.component';
import { CoreFeaturesComponent } from '../core-features/core-features.component';

@NgModule({
  declarations: [
    PricingModernComponent,
    CoreFeaturesComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    TreoCardModule,
    SharedModule
  ]
})
export class PricingModernModule {
}
