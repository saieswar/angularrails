import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {email:'',password:''}
  constructor(private loginservice:LoginService,private toastr:ToastsManager,private vrc:ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vrc);
   }

  ngOnInit() {
  }

  login(){
    this.loginservice.login(this.user)
    .subscribe(res => {
      if(!res.success){
        this.toastr.error(res.error+'!', 'Sorry!');
      }else if(res.success){
        this.toastr.success(res.message+'!', 'Success');
      }
    },
    err => {
      console.log(err);
      this.toastr.error('Something went wrong!', 'Sorry!');
    });
  }

}
