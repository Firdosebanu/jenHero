import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { JenHeropAppComponent } from '../app/jen-herop.component';

beforeEachProviders(() => [JenHeropAppComponent]);

describe('App: JenHerop', () => {
  it('should create the app',
      inject([JenHeropAppComponent], (app: JenHeropAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'jen-herop works!\'',
      inject([JenHeropAppComponent], (app: JenHeropAppComponent) => {
    expect(app.title).toEqual('jen-herop works!');
  }));
});
