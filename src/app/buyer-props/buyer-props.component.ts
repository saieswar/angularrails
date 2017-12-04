import { Component, OnInit, TemplateRef } from '@angular/core';
import { BuyerServiceService } from '../services/buyer-service.service';
import { SellerService } from '../services/seller.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-buyer-props',
  templateUrl: './buyer-props.component.html',
  styleUrls: ['./buyer-props.component.css']
})
export class BuyerPropsComponent implements OnInit {

  properties:Array<any>;
  user_name:string;
  property_id:number;
  public modalRef: BsModalRef;
  constructor(public buyerservice:BuyerServiceService,
  public modalService: BsModalService,
  private toast:ToastsManager,
  public sellerservice:SellerService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(){
    this.buyerservice.getBuyerProperties()
    .subscribe((res)=>{
      console.log(res);
      this.user_name = res.user.full_name;
      this.properties = res.properties;
    });
  }

  public openInterestPopup(template: TemplateRef<any>,property_id:number) {
    this.property_id = property_id;
    this.modalRef = this.modalService.show(template);
  }
  
  buyerInterested(modalRef){
    console.log(this.property_id);
    this.buyerservice.buyerInterested(this.property_id)
    .subscribe((res)=>{
      if(res.success){
        this.getProperties();
      }else{
        this.toast.info(res.error,'info');
      }
      modalRef.hide();
    });
  }

}
