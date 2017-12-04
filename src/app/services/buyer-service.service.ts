import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Injectable()
export class BuyerServiceService {

  constructor(public http:Http,
  public configservice:ConfigService,
  public router:Router) { }

  getBuyerProperties():Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'buyer_list_properties',{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }

  getBuyerWonProperties():Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'buyer_properties',{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }

  buyerInterested(propertyid){
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.post(this.configservice.getIp()+'buyer_interest_property',{'property_id':propertyid},{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }
  
  handleResponse(res:Response){
    let data = res.json();
     if(data.error == "Not authorized!"){
       this.router.navigate(['/login']);
     }
     return data;
  }

  handleError(error){
    return Observable.throw(error.json().error || 'Server Error')
  }

}
