import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCreatePropComponent } from './seller-create-prop.component';

describe('SellerCreatePropComponent', () => {
  let component: SellerCreatePropComponent;
  let fixture: ComponentFixture<SellerCreatePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerCreatePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCreatePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
