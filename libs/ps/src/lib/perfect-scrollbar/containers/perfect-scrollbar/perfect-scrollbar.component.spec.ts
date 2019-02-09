import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  async,
  ComponentFixture,
} from '@angular/core/testing';

import {
  configureTest,
  TestFn,
} from '@ngxma/testing';

import {
  PerfectScrollbarModule as NgxPerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import {
  PerfectScrollbarComponent,
} from './perfect-scrollbar.component';


describe('PerfectScrollbarComponent', () => {
  let component: PerfectScrollbarComponent;
  let fixture: ComponentFixture<PerfectScrollbarComponent>;

  beforeEach(async(() => {
    const configure: TestFn = (testBed) => {
      testBed.configureTestingModule({
        declarations: [
          PerfectScrollbarComponent,
        ],
        imports: [
          NgxPerfectScrollbarModule,
        ],
      })
        .overrideComponent(PerfectScrollbarComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default },
        });
    };

    configureTest(configure).then((testBed) => {
      fixture = testBed.createComponent(PerfectScrollbarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('[@component] should create', () => {
    expect(component).toBeTruthy();
  });

  it('[@component] should match snapshot', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});

@Component({
  selector: 'xma-test-host',
  template: `
  <xma-perfect-scrollbar>
    <div>PLACED INSIDE</div>
  </xma-perfect-scrollbar>`,
})
class TestHostComponent { }

describe('PerfectScrollbarComponent: host component', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    const configure: TestFn = (testBed) => {
      testBed.configureTestingModule({
        declarations: [
          TestHostComponent,
          PerfectScrollbarComponent,
        ],
        imports: [
          NgxPerfectScrollbarModule,
        ],
      });
    };

    configureTest(configure).then((testBed) => {
      fixture = testBed.createComponent(TestHostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('[@component] should create', () => {
    expect(component).toBeTruthy();
  });

  it('[@component] should match snapshot', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
