import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agent-mybids',
  templateUrl: './agent-mybids.component.html',
  styleUrls: ['./agent-mybids.component.css']
})
export class AgentMybidsComponent implements OnInit {
  properties:Array<any>;
  constructor(private agentservice:AgentService) { }

  ngOnInit() {
    this.agentservice.getAgentProperties()
    .subscribe((res)=>{
      console.log(res);
      this.properties = res.properties;
    });
  }

}
