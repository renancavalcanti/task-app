import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //https://task-api-zxn6x.ondigitalocean.app/v1/users/signup

  constructor(
    private http: HttpClient
  ) { }

  signup(name: string, email: string, password: string): Observable<any>{
    const data = {
    name,
    email,
    password
    }
    return this.http.post<any>("https://task-api-zxn6x.ondigitalocean.app/v1/users/signup", data)
  }

  login(email: string, password: string): Observable<any>{
    const data = {
    email,
    password
    }
    return this.http.post<any>("https://task-api-zxn6x.ondigitalocean.app/v1/users/login", data)
  }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(): string | null{
      return localStorage.getItem('token');
  }

  
}
