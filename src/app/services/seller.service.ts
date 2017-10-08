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
    .catch(this.handleError);
  }

  zipAutoComplete(): Observable<any>{
    return this.http.get(this.configservice.getIp()+'zip_autocomplete')
    .map(this.handleResponse)
    .catch(this.handleError);
  }

  getPropertyTypes(): Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'property_types',{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }


  createProperty(prop): Observable<any>{
    console.log(prop);
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.post(this.configservice.getIp()+'post_property',prop,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }

  getPropertyDetails(id):Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'get_property_details?property_id='+id,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }


  updateProperty(prop): Observable<any>{
    console.log(prop);
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.post(this.configservice.getIp()+'update_property',prop,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }

  getPropertyBids(id):Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'property_bids?property_id='+id,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);
  }

  placeBid(data):Observable<any>{
    let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.post(this.configservice.getIp()+'accept_bid',data,{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError);    
  }

  getMyAgents():Observable<any>{
     let headers = new Headers();
    headers.append('auth_token',localStorage.getItem('auth_token'));
    return this.http.get(this.configservice.getIp()+'my_agents',{
      headers:headers
    })
    .map(this.handleResponse)
    .catch(this.handleError); 
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

   handleError(error){
    return Observable.throw(error.json().error || 'Server Error')
  }


}
