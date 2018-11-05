import {
    Directive,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    Renderer2,
    SimpleChange,
} from '@angular/core';

@Directive({
    selector: '[matElevationTransition], [mat-elevation-transition]',
})
export class MatElevationTransitionDirective {
    @HostBinding('class.mat-elevation-transition')
    public isHostClass: boolean = true;
}

const MAT_ELEVATION_VALUES = Array.from(Array(25), (x, i) => i);

@Directive({
    selector: '[matElevation], [mat-elevation]',
})
export class MatElevationDirective implements OnChanges {
    private _element: ElementRef;
    private _elevation: number = 0;

    @Input('matElevation')
    get matElevation(): number {
        return this._elevation;
    }
    set matElevation(value: number) {
        this._elevation = this._toNumber(value);
    }

    constructor(private _renderer: Renderer2, private _root: ElementRef) {
        this._element = this._root.nativeElement;
    }

    public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
        const change = changes['matElevation'];

        if (MAT_ELEVATION_VALUES.indexOf(Number(this.matElevation)) === -1) {
            throw new Error(`Valid mat-elevation values are 0 through 24`);
        }

        if (!change.isFirstChange()) {
            this._renderer.removeClass(
                this._element,
                `mat-elevation-z${change.previousValue}`,
            );
        }
        this._renderer.addClass(
            this._element,
            `mat-elevation-z${change.currentValue}`,
        );
        this._renderer.setStyle(this._element, 'z-index', change.currentValue);
    }

    private _toNumber(value: any, fallbackValue: number = 0): number {
        return isNaN(parseFloat(value as any)) || isNaN(Number(value))
            ? fallbackValue
            : Number(value);
    }
}
