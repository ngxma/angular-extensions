import {
  async,
  TestBed,
} from '@angular/core/testing';

import {
  PsModule,
} from './ps.module';


describe('PsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PsModule,
      ],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(PsModule).toBeDefined();
  });
});
