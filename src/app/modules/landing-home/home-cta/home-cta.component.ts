import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-cta',
  templateUrl: './home-cta.component.html',
  styleUrls: ['./home-cta.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCtaComponent {

  constructor() {
  }
}
