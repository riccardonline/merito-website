import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

const modules = [
  // Empty
  EmptyLayoutModule
];

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    MatIconModule,
    HttpClientModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class LayoutModule {
}
