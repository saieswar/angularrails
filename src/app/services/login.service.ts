import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { ConfigService } from './config.service';

@Injectable()
export class LoginService {
  constructor(private http:Http,private configservice:ConfigService) { }

  login(user){
    return this.http.post(this.configservice.getIp()+'users/login',user)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
}
