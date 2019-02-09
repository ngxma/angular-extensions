
import { async, TestBed } from '@angular/core/testing';
import { BidiModule } from './bidi.module';

describe('BidiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BidiModule],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(BidiModule).toBeDefined();
  });
});
