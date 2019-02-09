import {
  NgModule,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  StubPerfectScrollbarModule,
} from './perfect-scrollbar/perfect-scrollbar.module.stub';

@NgModule({
  imports: [
    CommonModule,
  ],

  exports: [
    StubPerfectScrollbarModule,
  ],
})
export class MockPsModule { }
