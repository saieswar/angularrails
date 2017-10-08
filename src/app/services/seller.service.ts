import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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

  getProperties():Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'properties',{
      headers:headers
    })
    .map(this.handleResponse)
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  zipAutoComplete(): Observable<any>{
    return this.http.get(this.configservice.getIp()+'zip_autocomplete')
    .map(this.handleResponse)
  }

  getPropertyTypes(): Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'property_types',{
      headers:headers
    })
    .map(this.handleResponse)
  }


  createProperty(prop): Observable<any>{
    console.log(prop);
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.post(this.configservice.getIp()+'post_property',prop,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getPropertyDetails(id):Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'get_property_details?property_id='+id,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }


  updateProperty(prop): Observable<any>{
    console.log(prop);
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.post(this.configservice.getIp()+'update_property',prop,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);  
  }


  handleResponse(res:Response){
     let data = res.json();
      if(data.error == "Not authorized!"){
        this.router.navigate(['/login']);
      }else if(data.role == "Agent"){
        // this.router.navigate(['/login']);
      }
      return data;
  }
}
