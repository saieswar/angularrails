import { TestBed, inject } from '@angular/core/testing';

import { SellerResolver } from './seller.resolver';

describe('SellerResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SellerResolver]
    });
  });

  it('should be created', inject([SellerResolver], (service: SellerResolver) => {
    expect(service).toBeTruthy();
  }));
});
