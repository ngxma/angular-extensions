import {
    TestBed,
} from '@angular/core/testing';

import {
    Subject,
} from 'rxjs';


type CompilerOptions = Partial<{
    providers: any[],
    useJit: boolean,
    preserveWhitespaces: boolean,
}>;

export type TestFn = (testBed: typeof TestBed) => void;
export type TestStoreFn = (testBed: typeof TestBed, store: any) => void;
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

export const configureTest = (configure: TestFn, compilerOptions: CompilerOptions = {}) => {
    const compilerConfig: CompilerOptions = {
        preserveWhitespaces: false,
        ...compilerOptions,
    };

    const configuredTestBed = TestBed.configureCompiler(compilerConfig);

    configure(configuredTestBed);

    return configuredTestBed.compileComponents().then(() => configuredTestBed);
};

export const configureTestStore = (configure: TestStoreFn, compilerOptions: CompilerOptions = {}) => {
    const compilerConfig: CompilerOptions = {
        preserveWhitespaces: false,
        ...compilerOptions,
    };

    const configuredTestBed = TestBed.configureCompiler(compilerConfig);

    const mockStore = new MockStore();

    configure(configuredTestBed, mockStore);

    return configuredTestBed.compileComponents().then(() => ({ testBed: configuredTestBed, mockStore: mockStore }));
};
