import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMybidsComponent } from './agent-mybids.component';

describe('AgentMybidsComponent', () => {
  let component: AgentMybidsComponent;
  let fixture: ComponentFixture<AgentMybidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMybidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMybidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
