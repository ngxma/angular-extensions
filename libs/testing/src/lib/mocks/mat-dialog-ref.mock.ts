import {
    Observable,
    Subject,
} from 'rxjs';

export class MockMatDialogRef {

    private _keydownEvents: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();
    private _backdrop: Subject<MouseEvent> = new Subject<MouseEvent>();

    public close(dialogResult?: any): void { }

    public keydownEvents(): Observable<KeyboardEvent> {
        return this._keydownEvents.asObservable();
    }

    public backdropClick(): Observable<MouseEvent> {
        return this._backdrop.asObservable();
    }

    public dispatchKeyEvent(e: any): void {
        this._keydownEvents.next(e);
    }

    public dispatchBackdropEvent(e?: any): void {
        this._backdrop.next(e);
    }
}
