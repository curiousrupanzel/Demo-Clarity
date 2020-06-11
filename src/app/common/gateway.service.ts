import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GateWayService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private userName = new BehaviorSubject<string>(''); // {1}
  private currentRouteName = new BehaviorSubject<boolean>(true); // {1}

  constructor(
    private router: Router
  ) { }

  get isLoggedIn() {
    if (localStorage.getItem('loggedInUser')) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable(); // {2}
  }

  get UserName() {
    if (sessionStorage.getItem('loggedInUser')) {
      this.userName.next(JSON.parse(sessionStorage.getItem('loggedInUser')).FirstName);
    } else {
      this.userName.next('');
    }
    return this.userName.asObservable(); // {2}
  }

  get currentRoute() {
    this.currentRouteName.next(window.location.pathname.includes('/login') ? false : true);
    return this.currentRouteName.asObservable();
  }

  login(username: any, password: any) {
    if (sessionStorage.getItem('availaibleUsers')) {
      const userList = JSON.parse(sessionStorage.getItem('availaibleUsers'));
      const userExist = userList.filter(x => x.emailId == username);
      if (userExist.length > 0) {
        localStorage.setItem('loggedInUser', JSON.stringify(userExist));
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  logout() {
  }

  signup(InputData) {
    let availaibleUsersList = [];
    if (sessionStorage.getItem('availaibleUsers')) {
      availaibleUsersList = JSON.parse(sessionStorage.getItem('availaibleUsers'));
      const userExist = availaibleUsersList.filter(x => x.emailId == InputData.emailId);
      if (userExist.length > 0) {
        return false;
      }
    }
    availaibleUsersList.push(InputData);
    sessionStorage.removeItem('availaibleUsers');
    sessionStorage.setItem('availaibleUsers', JSON.stringify(availaibleUsersList));
    return true;
  }
}
