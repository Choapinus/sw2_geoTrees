import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

  obtenerarbol(): Observable<any>{
    return this.http.get('http://www.comunitree.tk:8080/arbol/all/')
  }

}
