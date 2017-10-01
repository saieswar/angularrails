import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SellerService {
  constructor(private http:Http,
  private router:Router,
  private configservice:ConfigService) { }

  getProperties():Observable<any[]>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get('https://jsonplaceholder.typicode.com/comments',{
      headers:headers
    })
    .map((res:Response) => {
      let data = res.json();
      // this.router.navigate(['/login']);
      return data;
    })
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
