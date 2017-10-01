import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SellerService {
  constructor(private http:Http,
  private configservice:ConfigService) { }

  getProperties(){

  }

}
