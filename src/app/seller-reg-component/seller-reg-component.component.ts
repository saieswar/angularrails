import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Seller } from './seller';
import { SignupService } from '../services/signup.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-seller-reg-component',
  templateUrl: './seller-reg-component.component.html',
  styleUrls: ['./seller-reg-component.component.css']
})
export class SellerRegComponentComponent implements OnInit {
  public sellerObj:Seller;
  public errorMsg:string;
  constructor(private signupservice:SignupService,
  public toastr: ToastsManager) {}

  ngOnInit() {
  this.sellerObj = {
      role:'Seller',
      full_name:'',
      email:'',
      phone:'',
      password: '',
      password_confirmation: ''
    }
  }

  sellerSignup(regForm){
    this.signupservice.signup(this.sellerObj)
    .subscribe(res => {
      if(!res.success){
        this.toastr.error(res.error+'!', 'Sorry!');
      }else if(res.success){
        regForm.reset();
        this.toastr.success(res.message+'!', 'Success');
      }
    },
    err => {
      console.log(err);
      this.toastr.error('Something went wrong!', 'Sorry!');
    });
  }

}
