import { TestBed } from '@angular/core/testing';

import { InvoiceSummaryService } from './invoice-summary.service';

describe('InvoiceSummaryService', () => {
  let service: InvoiceSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
