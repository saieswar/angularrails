import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AgentService } from "../services/agent.service";

@Injectable()
export class AgentResolver implements Resolve<any>{

  constructor(private agentservice:AgentService) { }

  resolve():boolean | Observable<any[]> | Object{
    return this.agentservice.getAgentProperties();
    // return true
  }

}
