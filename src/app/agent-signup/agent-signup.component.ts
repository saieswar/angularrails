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
states:string;
agentObj = {
  agency_name:"demo",
  address:"asdadsfasd",
  email:"john2@mailinator.com",
  full_name:"john",
  password:"password",
  password_confirmation:"password",
  phone:"2342342342",
  real_estate_license:"1241234123",
  zip_code:"",
  role:"Agent"
}
  constructor(private signupservice:SignupService,
  private toastr:ToastsManager,
  private sellerservice:SellerService) {
    this.sellerservice.zipAutoComplete()
    .subscribe(res => {console.log(res.result);this.states = res.result;this.isZipLoading = true;});
  }

  ngOnInit() {
  }

  agentSignup(agentForm){
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

}
