import {
  NgModule,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  StubPerfectScrollbarComponent,
} from './containers/perfect-scrollbar/perfect-scrollbar.component.stub';


@NgModule({
  declarations: [
    StubPerfectScrollbarComponent,
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    StubPerfectScrollbarComponent,
  ],
})
export class StubPerfectScrollbarModule { }
