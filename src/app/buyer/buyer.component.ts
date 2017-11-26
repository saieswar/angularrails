import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { ToastsManager } from 'ng2-toastr';
import { SellerService } from '../services/seller.service';


@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  isZipLoading:boolean;
  states=[];
  buyerObj = {
    agency_name:"",
    address:"",
    email:"",
    full_name:"",
    password:"",
    password_confirmation:"",
    phone:"",
    zip_code:"",
    role:"Buyer"
  }
  
  items = [];
  
  constructor(private signupservice:SignupService,
    private toastr:ToastsManager,
    private sellerservice:SellerService) {
      this.sellerservice.zipAutoComplete()
      .subscribe(res => {console.log(res.result);this.states = res.result;this.isZipLoading = true;});
  }
  
    ngOnInit() {
    }
  
    buyerSignup(buyerForm){
      console.log(this.buyerObj)
      this.signupservice.signup(this.buyerObj)
      .subscribe((res)=>{
        if(!res.success){
          this.toastr.error(res.error+'!', 'Sorry!');
        }else if(res.success){
          buyerForm.reset();
          this.toastr.success(res.message+'!', 'Success');
        }
      });
    }
  
    remove(item){
      this.states.splice(this.states.indexOf(item),1);
  }

}
