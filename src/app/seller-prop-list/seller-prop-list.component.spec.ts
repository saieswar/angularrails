import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPropListComponent } from './seller-prop-list.component';

describe('SellerPropListComponent', () => {
  let component: SellerPropListComponent;
  let fixture: ComponentFixture<SellerPropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
