import { Component, OnInit, TemplateRef } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ToastsManager } from 'ng2-toastr'

@Component({
  selector: 'app-agent-prop-list',
  templateUrl: './agent-prop-list.component.html',
  styleUrls: ['./agent-prop-list.component.css']
})
export class AgentPropListComponent implements OnInit {
  public modalRef: BsModalRef;
  properties:Array<any>;
  selectedProp:any;
  services:Array<string>;
  bidObj = {
    bid_percentage:'',
    bid_services:[],
    property_id:''
  }
  constructor(private agentservice:AgentService,
  private bsmodalservice:BsModalService,
  private toast:ToastsManager) {}

  ngOnInit() {
    this.agentservice.getAgentProperties()
    .subscribe((res)=>{
      this.properties = res.properties;
    });

    this.agentservice.getAgentServices()
    .subscribe((res)=>{
      this.services = res.services;
    });
  }

  openModal(template:TemplateRef<any>,prop){
    this.selectedProp = prop;
    this.modalRef = this.bsmodalservice.show(template);
  }

  placeBid(bidForm){
    this.bidObj.property_id = this.selectedProp.property_id;
    this.agentservice.placeBid(this.bidObj)
    .subscribe((res)=>{
      if(res.success){
        this.modalRef.hide();
        this.selectedProp.agent_bided = true;
        this.toast.success(res.message+'!','Success');
      }else{
        this.toast.info(res.message+'!','Sorry!');
      }
    })
  }

}
