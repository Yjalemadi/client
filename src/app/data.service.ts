import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Form } from './form.model'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getapi = 'http://localhost:8080/rest/form/all';
  setapi = 'http://localhost:8080/rest/form/load';

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getData(){
    return this._http.get<Form[]>(this.getapi);
  }

  submitFrom(form: Form): Observable<Form[]> {
    return this._http.post<Form[]>(this.setapi, form, this.httpOptions);
  }

}
