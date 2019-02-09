
import { async, TestBed } from '@angular/core/testing';
import { FlexModule } from './flex.module';

describe('FlexModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlexModule],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(FlexModule).toBeDefined();
  });
});
