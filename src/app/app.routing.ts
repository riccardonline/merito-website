import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('app/modules/landing/landing-home/landing-home.module').then(m => m.LandingHomeModule)
      },
    ]
  },

  // Landing routes
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   data: {
  //     layout: 'empty'
  //   },
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () => import('app/modules/landing/landing-home/landing-home.module').then(m => m.LandingHomeModule)
  //     },
  //   ]
  // },
];
