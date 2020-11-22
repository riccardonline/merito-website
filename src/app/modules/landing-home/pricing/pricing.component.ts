import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {
  isMultipleUsersBilling: boolean;

  /**
   * Constructor
   */
  constructor() {
    // Set the defaults
    this.isMultipleUsersBilling = true;
  }
}
