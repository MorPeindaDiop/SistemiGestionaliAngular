import { TestBed } from '@angular/core/testing';
import { VatsService } from './vat.service';





describe('VatsService', () => {
  let service: VatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
