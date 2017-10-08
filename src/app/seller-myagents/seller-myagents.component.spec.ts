import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMyagentsComponent } from './seller-myagents.component';

describe('SellerMyagentsComponent', () => {
  let component: SellerMyagentsComponent;
  let fixture: ComponentFixture<SellerMyagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerMyagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerMyagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
