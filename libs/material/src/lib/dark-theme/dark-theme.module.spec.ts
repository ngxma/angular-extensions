import { MatDarkThemeModule } from './dark-theme.module';

describe('MatDarkThemeModule', () => {
  let darkThemeModule: MatDarkThemeModule;

  beforeEach(() => {
    darkThemeModule = new MatDarkThemeModule();
  });

  it('should create an instance', () => {
    expect(darkThemeModule).toBeTruthy();
  });
});
