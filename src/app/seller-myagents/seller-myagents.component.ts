import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-myagents',
  templateUrl: './seller-myagents.component.html',
  styleUrls: ['./seller-myagents.component.css']
})
export class SellerMyagentsComponent implements OnInit {

  propdetails:Array<any>;
  constructor(private sellerservice:SellerService) { }

  ngOnInit() {
    this.sellerservice.getMyAgents()
    .subscribe((res)=>{
      if(res.success){
        console.log(res);
        this.propdetails = res.property_details;
      }
    });
  }

}
