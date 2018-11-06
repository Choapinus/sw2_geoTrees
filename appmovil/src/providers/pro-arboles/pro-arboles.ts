import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProArbolesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProArbolesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProArbolesProvider Provider');
  }
  public apiUrl = 'http://www.comunitree.tk:8080/arbol';
  obtenerarbol(): Observable<any>{
    return this.http.get(this.apiUrl+'/all');
  }


  

}
