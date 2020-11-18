import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'app/shared/shared.module';
import { landingHomeRoutes } from 'app/modules/landing/landing-home/home.routing';
import { LandingHomeComponent } from './landing-home.component';
import { PricingModernComponent } from './modern/modern.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TreoCardModule } from '../../../../@treo/components/card';
import { CoreFeaturesComponent } from './core-features/core-features.component';

@NgModule({
  declarations: [
    LandingHomeComponent,
    PricingModernComponent,
    CoreFeaturesComponent
  ],
  imports: [
    RouterModule.forChild(landingHomeRoutes),
    MatButtonModule,
    SharedModule,
    MatIconModule,
    MatSlideToggleModule,
    TreoCardModule
  ]
})
export class LandingHomeModule {
}
