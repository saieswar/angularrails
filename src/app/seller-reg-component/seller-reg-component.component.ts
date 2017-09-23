import { Component, OnInit } from '@angular/core';
import { Seller } from './seller';

@Component({
  selector: 'app-seller-reg-component',
  templateUrl: './seller-reg-component.component.html',
  styleUrls: ['./seller-reg-component.component.css']
})
export class SellerRegComponentComponent implements OnInit {
  sellerObj = {
    fullname:'',
    email:'',
    phone:'',
    password: '',
    confirm_password: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
