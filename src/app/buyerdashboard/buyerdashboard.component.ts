import { Component, OnInit } from '@angular/core';
import { BuyerServiceService } from '../services/buyer-service.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-buyerdashboard',
  templateUrl: './buyerdashboard.component.html',
  styleUrls: ['./buyerdashboard.component.css']
})
export class BuyerdashboardComponent implements OnInit {
  properties:Array<any>;
  user_name:string;
  constructor(public buyerservice:BuyerServiceService,
  public sellerservice:SellerService) { }

  ngOnInit() {
    this.buyerservice.getBuyserProperties()
    .subscribe((res)=>{
      console.log(res);
      this.user_name = res.user.full_name;
      this.properties = res.properties;
    });
  }

  buyerLogout(){
    this.sellerservice.logout();
  }

} 
