import {
  NgModule,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  PerfectScrollbarModule,
} from './perfect-scrollbar/perfect-scrollbar.module';


@NgModule({
  imports: [
    CommonModule,
  ],

  exports: [
    PerfectScrollbarModule,
  ],
})
export class PsModule { }
