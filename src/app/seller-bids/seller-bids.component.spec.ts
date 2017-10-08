import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBidsComponent } from './seller-bids.component';

describe('SellerBidsComponent', () => {
  let component: SellerBidsComponent;
  let fixture: ComponentFixture<SellerBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
