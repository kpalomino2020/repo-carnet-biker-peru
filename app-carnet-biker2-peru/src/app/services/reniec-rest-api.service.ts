import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../models/biker.model';

@Injectable({
  providedIn: 'root'
})
export class ReniecRestApiService {

  apiURLReniec = 'https://dniruc.apisperu.com/api/v1/dni/';
  tokenReniec = '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtlbmVkeS5zaXN0ZW1hc0BnbWFpbC5jb20ifQ.0gLv-VLyfxL_uyVz5eySLA3tpA8CMvK3XQcBzTxFtbo';


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  getDatosDNI(dni:String): Observable<Persona> {
    return this.http.get<Persona>(this.apiURLReniec +dni+this.tokenReniec).pipe();
   
  } 
}
