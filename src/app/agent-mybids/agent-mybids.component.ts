import { Component, OnInit, TemplateRef } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-agent-mybids',
  templateUrl: './agent-mybids.component.html',
  styleUrls: ['./agent-mybids.component.css']
})
export class AgentMybidsComponent implements OnInit {
  properties:Array<any>;
  buyers:Array<any>;
  closebid={bid_id:0,buyer_id:0};

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
  private agentservice:AgentService) {}
  
  ngOnInit() {
    this.getBids();
  }

  getBids(){
    this.agentservice.getWonBids()
    .subscribe((res)=>{
      console.log(res);
      this.properties = res.bids_info;
    });
  }

  public openModal(template: TemplateRef<any>,bid_id:number) {
    this.closebid.bid_id = bid_id;
    this.agentservice.getBuyers(bid_id)
    .subscribe((res)=>{
      console.log(res.buyers);
      this.buyers = res.buyers;
      this.modalRef = this.modalService.show(template);
    });
  }

  closeBid(modalRef){
    this.agentservice.closeBid(this.closebid)
    .subscribe((res)=>{
      console.log(res);
      modalRef.hide();
      this.getBids();
    });
  }

}
