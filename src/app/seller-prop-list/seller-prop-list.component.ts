import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-prop-list',
  templateUrl: './seller-prop-list.component.html',
  styleUrls: ['./seller-prop-list.component.css']
})
export class SellerPropListComponent implements OnInit {

  properties:any;
  constructor(private sellerservice:SellerService) { }

  ngOnInit() {
    this.sellerservice.getProperties()
    .subscribe(res => {
      this.properties = res.properties;
      console.log(this.properties)
    })
  }

}
