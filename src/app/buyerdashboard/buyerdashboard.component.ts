import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-buyerdashboard',
  templateUrl: './buyerdashboard.component.html',
  styleUrls: ['./buyerdashboard.component.css']
})
export class BuyerdashboardComponent implements OnInit {
  constructor(private sellerservice:SellerService){}

  ngOnInit(){}
  
  buyerLogout(){
    this.sellerservice.logout();
  }

} 
