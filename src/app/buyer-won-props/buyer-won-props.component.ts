import { Component, OnInit } from '@angular/core';
import { BuyerServiceService } from '../services/buyer-service.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-buyer-won-props',
  templateUrl: './buyer-won-props.component.html',
  styleUrls: ['./buyer-won-props.component.css']
})
export class BuyerWonPropsComponent implements OnInit {

  properties:Array<any>;
  user_name:string;
  constructor(public buyerservice:BuyerServiceService,
  public sellerservice:SellerService) { }

  ngOnInit() {
    this.buyerservice.getBuyerWonProperties()
    .subscribe((res)=>{
      console.log(res);
      this.user_name = res.user.full_name;
      this.properties = res.properties;
    });
  } 

}
