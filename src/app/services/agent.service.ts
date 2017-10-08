import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AgentService {

  constructor(private http:Http,
  private configservice:ConfigService,
  private router:Router) { }

  getAgentProperties():Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'agent_properties',{
      headers:headers
    })
    .map(this.handleResponse)
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

    handleResponse(res:Response){
     let data = res.json();
      if(data.error == "Not authorized!"){
        this.router.navigate(['/login']);
      }else if(data.role == "Seller"){
        // this.router.navigate(['/login']);
      }
      return data;
  }

}
