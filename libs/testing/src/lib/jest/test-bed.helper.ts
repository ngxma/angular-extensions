import {
    TestBed,
} from '@angular/core/testing';

type CompilerOptions = Partial<{
    providers: any[],
    useJit: boolean,
    preserveWhitespaces: boolean,
}>;

export type TestFn = (testBed: typeof TestBed) => void;

export const configureTest = (configure: TestFn, compilerOptions: CompilerOptions = {}) => {
    const compilerConfig: CompilerOptions = {
        preserveWhitespaces: false,
        ...compilerOptions,
    };

    const configuredTestBed = TestBed.configureCompiler(compilerConfig);

    configure(configuredTestBed);

    return configuredTestBed.compileComponents().then(() => configuredTestBed);
};
