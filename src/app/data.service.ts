import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { createChangeDetectorRef } from '@angular/core/src/view/refs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getCustomerConfig()
  {
    return this.http.get("http://localhost/RLSAdminWebApi/api/custconfiguration");
  }

  getCustomerConfigDetails(customerId)
  {
     
    return this.http.get("http://localhost/RLSAdminWebApi/api/custconfiguration/" + customerId);
  

  }

       

}
