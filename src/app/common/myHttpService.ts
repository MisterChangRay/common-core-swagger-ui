import { Injectable } from '@angular/core';  
import {Http} from '@angular/http';  
import 'rxjs/add/operator/toPromise';   
import {HttpParams} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";


@Injectable()  

export class MyHttpService {    

   constructor(private http: HttpClient) { }    
    
   baseUrl = window["appConfigs"]["debugApiUrl"];

  
   get(url, header, data) {
    let headers = new HttpHeaders();
    let params = new HttpParams();

    if(null != header && Array.isArray(header)) {
      header.forEach(map => {
        headers = headers.set(map.key, map.value);
      })
    }

    if(null != data && Array.isArray(data)) {
      data.forEach(map => {
        params = params.set(map.key, map.value);
      })
    }

    return this.http.get(this.baseUrl + url, {headers:headers, params:params}).toPromise();

   }

   post(url, header, data) {

   }

   put(url, header, data) {

   }

   delete(url, header, data) {

   }
}