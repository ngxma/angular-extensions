import {
    Subject,
} from 'rxjs';

export type SelectorFn = () => Subject<any>;

export class MockStore {
    public dispatch: jest.Mock<{}>;
    public selectSnapshot: jest.Mock<{}>;
    public select: jest.Mock<{}>;
    public selectOnce: jest.Mock<{}>;
    public reset: jest.Mock<{}>;

    constructor() {
        this.dispatch = jest.fn();
        this.selectSnapshot = jest.fn();
        this.select = jest.fn();
        this.selectOnce = jest.fn();
        this.reset = jest.fn();
    }

    public selectorMock(component: any, method: string, selector: SelectorFn): void {
        Object.defineProperty(component, method, { writable: true });
        component[method] = this.select.mockImplementationOnce(selector)();
    }
}
