import { Injectable } from '@angular/core';  
import {Http} from '@angular/http';  
import 'rxjs/add/operator/toPromise';   



@Injectable()  

export class ApiDocService {    

  constructor(private http: Http) { }    
 
  



  parse(apis : any) {
    let result = apis.tags;
    let paths = apis.paths;

    let start = new Date().getTime();
    
    for(let key in apis.paths) {
      for(let tmp in apis.paths[key]) {
        result.forEach(function(tag) {

            if(Array.isArray(paths[key][tmp].tags)) {
              paths[key][tmp].tags.forEach(function(tagName2) {
                if(tag.name == tagName2) {
                  tag.childs = tag.childs || [];
                  tag.childs.push({
                    path:key,
                    method:tmp,
                    params:paths[key][tmp].parameters,
                    summary:paths[key][tmp].summary,
                    description:paths[key][tmp].description
                  })
                }
              })
            }
        })
      }
    }

    return JSON.parse(JSON.stringify(result));
  }




  getApis() {

    const url = '/assets/result.json'; 

    return this.http.get(url)   
           .toPromise()    
           .then(res => res.json())   
           .catch(this.handleError);   
  }





  private handleError(error: any): Promise<any> {   

    console.error('An error occurred', error); // for demo purposes only   

    return Promise.reject(error.message || error);   

  }  

}