import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agent-prop-list',
  templateUrl: './agent-prop-list.component.html',
  styleUrls: ['./agent-prop-list.component.css']
})
export class AgentPropListComponent implements OnInit {

  properties:object;
  constructor(private agentservice:AgentService) {
    console.log('hello')
   }

  ngOnInit() {
    this.agentservice.getAgentProperties()
    .subscribe((res)=>{
      this.properties = res.properties;
    });
  }

}
