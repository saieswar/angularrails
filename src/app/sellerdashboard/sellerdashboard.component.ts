import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {

  constructor(private toastr:ToastsManager,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.toastr.success('Login successfully!', 'Success');
    console.log(this.route.snapshot.data);
  }

}
