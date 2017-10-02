import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

import { SellerService } from '../services/seller.service';


@Component({
  selector: 'app-seller-create-prop',
  templateUrl: './seller-create-prop.component.html',
  styleUrls: ['./seller-create-prop.component.css']
})
export class SellerCreatePropComponent implements OnInit {
  states:any[];
  prop = {
    city:'',
    state:'',
    zip:'',
    property_type:'',
    bedrooms:'',
    bathrooms:'',
    est_sale_price:'',
    lot_size:''
  };
  constructor(private sellerservice:SellerService) { }

  ngOnInit() {
    this.sellerservice.zipAutoComplete()
    .subscribe(res => this.states = res)
  }  

  typeheadSelect(e:TypeaheadMatch){
    this.prop.city = e.item.city;
    this.prop.state = e.item.state;
    this.prop.zip = e.item.zip;
  }
}
