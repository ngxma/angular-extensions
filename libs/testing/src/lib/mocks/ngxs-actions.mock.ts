import {
    Observable,
    Subject,
} from 'rxjs';


export class MockActions extends Observable<any> {

    private _actions$: Subject<any> = new Subject();

    constructor() {
        super((observer) => {
            this._actions$.subscribe(
                (res) => observer.next(res),
                (err) => observer.error(err),
                () => observer.complete(),
            );
        });
    }

    public dispatch(action: any, status: MockActionStatus): void {
        this._actions$.next({ action: action, status: status });
    }
}

export enum MockActionStatus {
    Dispatched = 'DISPATCHED',
    Successful = 'SUCCESSFUL',
    Canceled = 'CANCELED',
    Errored = 'ERRORED',
}

