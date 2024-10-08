import { TestBed } from '@angular/core/testing';

import { PhoneNumberService } from './phone-number.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhoneNumberService', () => {
  let service: PhoneNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PhoneNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
