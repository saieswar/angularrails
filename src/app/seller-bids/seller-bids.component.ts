import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-bids',
  templateUrl: './seller-bids.component.html',
  styleUrls: ['./seller-bids.component.css']
})
export class SellerBidsComponent implements OnInit {

  bidsInfo:Array<any>;
  constructor(private sellerservice:SellerService,
  private route:ActivatedRoute,
  private toast:ToastsManager) { 
    this.route.url.subscribe(
     (data: any) => {
          this.sellerservice.getPropertyBids(data[1].path)
          .subscribe((res)=>{
            console.log(res);
            this.bidsInfo = res.bids_info;
          });
     },
     (error: any) => console.debug("URL ERROR", error));
  }

  ngOnInit() {
  }

  placeBid(bidObj){
    this.sellerservice.placeBid(bidObj)
    .subscribe((res)=>{
      if(res.success){
        this.toast.success(res.message+'!','Success');
        bidObj.bid_status = res.bid_status;
        bidObj.property_status = res.property_status;
      }else{
        this.toast.error(res.message,'Sorry');
      }
    })
  }

}
