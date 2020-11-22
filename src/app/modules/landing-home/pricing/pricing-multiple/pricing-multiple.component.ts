import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pricing-multiple',
  templateUrl: './pricing-multiple.component.html',
  styleUrls: ['./pricing-multiple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PricingMultipleComponent {

  constructor() {
  }
}
