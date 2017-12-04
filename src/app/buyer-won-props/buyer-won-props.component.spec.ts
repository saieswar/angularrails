import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerWonPropsComponent } from './buyer-won-props.component';

describe('BuyerWonPropsComponent', () => {
  let component: BuyerWonPropsComponent;
  let fixture: ComponentFixture<BuyerWonPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerWonPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerWonPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
