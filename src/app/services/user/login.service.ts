import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http'
import { Login } from '../../custominterface/login'

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = "http://127.0.0.1:8000/auth/login/";

  constructor(private http: HttpClient) { }


  userLogin(login: Login): Observable<HttpResponse<any>> {
    
    let opts = {
      headers: new HttpHeaders({
        'X-Requested-With': 'HttpClient',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }),
      observe: "response" as const
    };

     return this.http.post<Login>(this.loginUrl, login, opts);
     
  }
}
