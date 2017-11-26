import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { ToastsManager } from 'ng2-toastr';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-agent-signup',
  templateUrl: './agent-signup.component.html',
  styleUrls: ['./agent-signup.component.css']
})
export class AgentSignupComponent implements OnInit {
isZipLoading:boolean;
states=[];
agentObj = {
  agency_name:"",
  address:"",
  email:"",
  full_name:"",
  password:"",
  password_confirmation:"",
  phone:"",
  real_estate_license:"",
  zip_codes:[],
  role:"Agent"
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

  agentSignup(agentForm){
    console.log(this.agentObj)
    this.signupservice.signup(this.agentObj)
    .subscribe((res)=>{
      if(!res.success){
        this.toastr.error(res.error+'!', 'Sorry!');
      }else if(res.success){
        agentForm.reset();
        this.toastr.success(res.message+'!', 'Success');
      }
    });
  }

  remove(item){
    this.states.splice(this.states.indexOf(item),1);
}


}
