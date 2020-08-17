import { TestBed } from '@angular/core/testing';

import { ItunesDataService } from './itunes-data.service';

describe('ItunesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItunesDataService = TestBed.get(ItunesDataService);
    expect(service).toBeTruthy();
  });
});
