import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent {
  /**
   * Constructor
   */
  constructor() {
  }

  toggleNavigation(mainNavigation: string): string {
    return mainNavigation;
  }
}
