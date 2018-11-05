import {
    ConfigureFn,
    configureTests,
} from './test-bed.helper';


describe('TestBedHelper', () => {
    let testBed: any;

    beforeEach(() => {
        const configure: ConfigureFn = (tb) => {
            tb.configureTestingModule({
                declarations: [],
                imports: [],
            });
        };
        configureTests(configure).then((tb) => {
            testBed = tb;
        });
    });

    it('[testBed] should create', () => {
        expect(testBed).toBeTruthy();
    });
});
