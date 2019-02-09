import {
  NgModule,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  PerfectScrollbarModule as ScrollbarModule,
} from 'ngx-perfect-scrollbar';

import {
  PerfectScrollbarComponent,
} from './containers/perfect-scrollbar/perfect-scrollbar.component';


@NgModule({
  declarations: [
    PerfectScrollbarComponent,
  ],

  imports: [
    CommonModule,
    ScrollbarModule,
  ],

  exports: [
    PerfectScrollbarComponent,
  ],
})
export class PerfectScrollbarModule { }
