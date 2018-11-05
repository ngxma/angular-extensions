
import { NgModule } from '@angular/core';

import { MatDarkThemeModule } from './dark-theme/dark-theme.module';
import { MatElevationModule } from './elevation/elevation.module';

@NgModule({
  exports: [
    MatDarkThemeModule,
    MatElevationModule,
  ],
})
export class MaterialExtensionModule { }
