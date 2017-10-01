import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {

  constructor(private toastr:ToastsManager) { }

  ngOnInit() {
    this.toastr.success('Login successfully!', 'Success');
  }

}
