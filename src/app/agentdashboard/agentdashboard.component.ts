import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../services/agent.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.css']
})
export class AgentdashboardComponent implements OnInit {

  user_name:string;

  constructor(private route:ActivatedRoute,
  private agentservices:AgentService,
  private sellerservice:SellerService) { }

  ngOnInit() {
    this.user_name = this.route.snapshot.data['properties'].user['full_name'];
  }

  agentLogout(){
    this.sellerservice.logout();
  }

}
