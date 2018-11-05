import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[matDarkTheme], [mat-dark-theme]',
})
export class MatDarkThemeDirective {
  @HostBinding('class.dark-theme') public isHostClass: boolean = true;
}
