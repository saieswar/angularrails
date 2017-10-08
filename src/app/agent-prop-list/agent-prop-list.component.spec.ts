import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPropListComponent } from './agent-prop-list.component';

describe('AgentPropListComponent', () => {
  let component: AgentPropListComponent;
  let fixture: ComponentFixture<AgentPropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentPropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
