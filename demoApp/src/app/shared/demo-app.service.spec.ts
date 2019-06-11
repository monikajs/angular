import { TestBed } from '@angular/core/testing';

import { DemoAppService } from './demo-app.service';

describe('DemoAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoAppService = TestBed.get(DemoAppService);
    expect(service).toBeTruthy();
  });
});
