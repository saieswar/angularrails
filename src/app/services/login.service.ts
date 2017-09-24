import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Injectable()
export class LoginService {
  constructor(private http:Http) { }

  login(user){
    return this.http.post('https://qaapi.greatpercent.com/users/sign_in',user)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
}
