import { TestBed } from '@angular/core/testing';

import { MlpsTemplateService } from './mlps-template.service';

describe('MlpsTemplateService', () => {
  let service: MlpsTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlpsTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
