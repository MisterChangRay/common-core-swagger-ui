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
   methods = {"get":1, "post":1, "put":1, "delete":1, "patch":1};

  
   sendData(method, url, header, data) {
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



    if(this.methods[method]) {
      if("get" == method || "delete" == method) {
        return this.http[method](this.baseUrl + url, {headers:headers, params:params}).toPromise();
      }
      if("post" == method || "put" == method || "patch" == method) {
        if(headers.get("content-type")) {
          return this.http[method](this.baseUrl + url, params, {headers:headers}).toPromise();
        } else {
          return this.http[method](this.baseUrl + url, data, {headers:headers}).toPromise();
        }
        
      }

      
    } else {
      console.log("暂时不支持此方法:" + method)
    }

   }


   
}