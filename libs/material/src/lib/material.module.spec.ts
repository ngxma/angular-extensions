
import { async, TestBed } from '@angular/core/testing';
import { MaterialExtensionModule } from './material.module';

describe('MaterialExtensionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialExtensionModule],
    })
      .compileComponents();
  }));

  it('should create', () => {
    expect(MaterialExtensionModule).toBeDefined();
  });
});
