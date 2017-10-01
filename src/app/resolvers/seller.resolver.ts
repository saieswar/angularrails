import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SellerResolver implements Resolve<any> {

  constructor() { }

  resolve():boolean | Observable<any[]> | Object{
    return {list:[1,2,3,4]};
  }

}
