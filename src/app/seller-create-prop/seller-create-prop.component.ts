import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  isZipLoading:boolean;
  isProptypeLoading:boolean;
  proptypes:any[];
  formTitle:string;
  prop_id:string;
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
  private toastr:ToastsManager,
  private route:ActivatedRoute) {
    this.route.url.subscribe(
     (data: any) => {
       if(data[0].path == 'prop_edit'){
          this.formTitle = (data[0].path == 'prop_edit')?'Edit':'Create';
          this.prop_id = data[1].path;
          console.log("There is something more: ",data);
       }
     },
     (error: any) => console.debug("URL ERROR", error));
   }

  ngOnInit() {
    this.sellerservice.zipAutoComplete()
    .subscribe(res => {this.states = res;this.isZipLoading = true;});

    this.sellerservice.getPropertyTypes()
    .subscribe(res => {this.proptypes = res;this.isProptypeLoading = true});

    this.sellerservice.getPropertyDetails(this.prop_id)
    .subscribe(res => this.prop = res.property);
  }  

  typeheadSelect(e:TypeaheadMatch){
    this.prop.city = e.item.city;
    this.prop.state = e.item.state;
    this.prop.zip = e.item.zip;
  }

  createProperty(propertyForm){
    if(this.formTitle == "Edit"){
      this.editProperty(propertyForm);
    }else{
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

  editProperty(propertyForm){
    console.log(this.prop)
  }


}
