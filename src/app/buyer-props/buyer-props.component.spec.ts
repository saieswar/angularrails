import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPropsComponent } from './buyer-props.component';

describe('BuyerPropsComponent', () => {
  let component: BuyerPropsComponent;
  let fixture: ComponentFixture<BuyerPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
