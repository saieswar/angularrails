import { Component, OnInit, TemplateRef } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-seller-prop-list',
  templateUrl: './seller-prop-list.component.html',
  styleUrls: ['./seller-prop-list.component.css']
})
export class SellerPropListComponent implements OnInit {
  public modalRef: BsModalRef;
  propdetail:object;
  properties:any;
  constructor(private sellerservice:SellerService,
  private modalService: BsModalService) { }

  ngOnInit() {
    this.sellerservice.getProperties()
    .subscribe(res => {
      console.log(res);
      this.properties = res.properties;
      if(this.properties == undefined){
          this.properties = [];
      }
    })
  }

   public openModal(template: TemplateRef<any>,prop:object) {
    this.propdetail = prop;
    this.modalRef = this.modalService.show(template);
  }

}
