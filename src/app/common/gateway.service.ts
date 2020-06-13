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
    if (localStorage.getItem('loggedInUser')) {
      this.userName.next(JSON.parse(localStorage.getItem('loggedInUser'))[0].firstName);
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
    if (localStorage.getItem('availaibleUsers')) {
      const userList = JSON.parse(localStorage.getItem('availaibleUsers'));
      const userExist = userList.find(x => x.emailId == username);
      if (userExist && userExist.password == password) {
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
    localStorage.removeItem('loggedInUser');
    this.loggedIn.next(false);
    this.userName.next(undefined);
    this.router.navigate(['/login']);
  }

  signup(InputData) {
    let availaibleUsersList = [];
    if (localStorage.getItem('availaibleUsers')) {
      availaibleUsersList = JSON.parse(localStorage.getItem('availaibleUsers'));
      const userExist = availaibleUsersList.filter(x => x.emailId == InputData.emailId);
      if (userExist.length > 0) {
        return false;
      }
    }
    availaibleUsersList.push(InputData);
    localStorage.removeItem('availaibleUsers');
    localStorage.setItem('availaibleUsers', JSON.stringify(availaibleUsersList));
    return true;
  }
}
