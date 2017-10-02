import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { SellerService } from "../services/seller.service";


@Injectable()
export class SellerResolver implements Resolve<any> {

  constructor(private sellerservice:SellerService) { }

  resolve():boolean | Observable<any[]> | Object{
    return this.sellerservice.getProperties();
    // return true
  }
}
