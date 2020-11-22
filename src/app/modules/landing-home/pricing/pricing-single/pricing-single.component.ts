import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pricing-single',
  templateUrl: './pricing-single.component.html',
  styleUrls: ['./pricing-single.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingSingleComponent {

  constructor() {
  }
}
