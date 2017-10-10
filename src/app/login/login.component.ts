import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {email:'',password:''}
  constructor(private loginservice:LoginService,
  private toastr:ToastsManager,
  private router:Router) {}

  ngOnInit() {
  }

  login(){
    this.loginservice.login(this.user)
    .subscribe(res => {
      if(!res.success){
        this.toastr.error(res.error+'!', 'Sorry!');
      }else if(res.success){
        if(res.user.role == 'Seller'){
          localStorage.setItem('auth_token',res.user.auth_token);
          this.router.navigate(["/seller"]);
        }else if(res.user.role == "Agent"){
          localStorage.setItem('auth_token',res.user.auth_token);
          this.router.navigate(["/agent"]);
        }
      }
    },
    err => {
      console.log(err);
      this.toastr.error('Something went wrong!', 'Sorry!');
    });
  }

}
