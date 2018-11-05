import { NgModule } from '@angular/core';

import {
  MatElevationDirective,
  MatElevationTransitionDirective,
} from './elevation.directive';

@NgModule({
  declarations: [
    MatElevationDirective,
    MatElevationTransitionDirective,
  ],

  exports: [
    MatElevationDirective,
    MatElevationTransitionDirective,
  ],
})
export class MatElevationModule { }
