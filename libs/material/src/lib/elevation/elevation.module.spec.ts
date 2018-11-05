import { MatElevationModule } from './elevation.module';

describe('ElevationModule', () => {
  let elevationModule: MatElevationModule;

  beforeEach(() => {
    elevationModule = new MatElevationModule();
  });

  it('should create an instance', () => {
    expect(elevationModule).toBeTruthy();
  });
});
