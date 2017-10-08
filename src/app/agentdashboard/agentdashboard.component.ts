import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.css']
})
export class AgentdashboardComponent implements OnInit {

  constructor(private sellerservice:SellerService) { }

  ngOnInit() {}

  agentLogout(){
    this.sellerservice.logout();
  }

}
