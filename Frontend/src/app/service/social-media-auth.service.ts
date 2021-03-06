import { TransferDataService } from './transfer-data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/**This service handles http requests when user login via social media */
@Injectable({
  providedIn: 'root'
})
export class SocialMediaAuthService {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  public username: String;

  public res;
  constructor(private http: HttpClient,
    private router: Router,
    private transferDataService:TransferDataService) { }

  /**
   * This method verifies that the user exists in our database or not.
   	 * if the user already exists then it returns all the information of that user and redirects to landing page.
   	 * else user redirects to create team page for registration.
   * @param data 
   */
  socialMedia(data) {
    console.log("inside Social Media")
    return this.http.post(`http://localhost:8080/getSocialInfo`,data).pipe(map((res) => {
        this.res=res;
        console.log(res)
        this.registerSuccessfulLogin();
      }
      ));
  }

  createBasicAuthToken(username: String) {
    return 'Basic ' + (username)
  }

  registerSuccessfulLogin() {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, this.res.message)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
