import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRegComponentComponent } from './seller-reg-component.component';

describe('SellerRegComponentComponent', () => {
  let component: SellerRegComponentComponent;
  let fixture: ComponentFixture<SellerRegComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerRegComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRegComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
