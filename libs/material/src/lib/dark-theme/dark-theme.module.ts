import { NgModule } from '@angular/core';

import { MatDarkThemeDirective } from './dark-theme.directive';

@NgModule({
  declarations: [
    MatDarkThemeDirective,
  ],

  exports: [
    MatDarkThemeDirective,
  ],
})
export class MatDarkThemeModule { }
