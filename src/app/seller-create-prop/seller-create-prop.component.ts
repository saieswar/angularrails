import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr';
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
  proptypes:any[];
  prop = {
    city:'',
    state:'',
    address:'',
    zip:'',
    property_type:'',
    bedrooms:'',
    bathrooms:'',
    est_sale_price:'',
    lot_size:''
  };
  constructor(private sellerservice:SellerService,
  private toastr:ToastsManager) { }

  ngOnInit() {
    this.sellerservice.zipAutoComplete()
    .subscribe(res => this.states = res)

    this.sellerservice.getPropertyTypes()
    .subscribe(res => this.proptypes = res)
  }  

  typeheadSelect(e:TypeaheadMatch){
    this.prop.city = e.item.city;
    this.prop.state = e.item.state;
    this.prop.zip = e.item.zip;
  }

  createProperty(propertyForm){
    this.sellerservice.createProperty(this.prop)
    .subscribe(res => {
      console.log(res)
      if(!res.success){
        this.toastr.info(res.error,'Information'); 
      }else{
        propertyForm.reset();
        this.toastr.success('Property successfully created','Success');
      }
    });
  }


}
