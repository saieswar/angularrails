import { Component, OnInit } from '@angular/core';
// import { ToastsManager } from 'ng2-toastr';
import { ActivatedRoute } from '@angular/router';

import { SellerService } from '../services/seller.service';


@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {
  
  user_name:string;

  constructor(private route:ActivatedRoute,
  private sellerservice:SellerService) { }

  ngOnInit() {
    this.user_name = this.route.snapshot.data['properties'].user['full_name'];
  }

  sellerLogout(){
    this.sellerservice.logout();
  }
}
