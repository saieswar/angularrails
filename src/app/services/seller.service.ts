import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SellerService {
  constructor(private http:Http,
  private configservice:ConfigService,
  private headers:Headers) { }

  getProperties():Observable<any[]>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'properties',{
      headers:headers
    })
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
