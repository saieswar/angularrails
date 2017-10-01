import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.css']
})
export class AgentdashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
