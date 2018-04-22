import { TestBed, inject } from '@angular/core/testing';

import { TableCalculatorService } from './table-calculator.service';

describe('TableCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableCalculatorService]
    });
  });

  it('should be created', inject([TableCalculatorService], (service: TableCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
