import {
    configureTest,
    TestFn,
} from './test-bed.helper';


describe('TestBedHelper', () => {
    let testBed: any;

    beforeEach(() => {
        const configure: TestFn = (tb) => {
            tb.configureTestingModule({
                declarations: [],
                imports: [],
            });
        };
        configureTest(configure).then((tb) => {
            testBed = tb;
        });
    });

    it('[testBed] should create', () => {
        expect(testBed).toBeTruthy();
    });
});
