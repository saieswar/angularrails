import { TestBed, inject } from '@angular/core/testing';

import { AgentResolver } from './agent.resolver';

describe('AgentResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentResolver]
    });
  });

  it('should be created', inject([AgentResolver], (service: AgentResolver) => {
    expect(service).toBeTruthy();
  }));
});
