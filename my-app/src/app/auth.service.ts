import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
// import { TokenParam } from '../app/token-param/token.param'
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/catch';
// import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AccessToken: string = "";

  constructor(private http: HttpClient) { }
  private tokenApi = "http://localhost:2600/api/signin"

  register(username: string, email: string, password: string) {
    return this.http.post('http://localhost:2600/api/signup', {
      username: username,
      email: email,
      password: password
    })
  }

  signinUser(username: string, password: string) {
    return this.http.post('http://localhost:2600/api/signin', {
      username: username,
      password: password
    })
  }

isLoggedIn() {
  return !!localStorage.getItem('token')
}

}
