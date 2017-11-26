import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { BuyerServiceService } from "../services/buyer-service.service";


@Injectable()
export class BuyerResolver implements Resolve<any> {

  constructor(private buyerservice:BuyerServiceService) { }

  resolve():boolean | Observable<any[]> | Object{
    return this.buyerservice.getBuyserProperties();
    // return true
  }
}
