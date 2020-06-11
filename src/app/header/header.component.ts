import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GateWayService } from '../common/gateway.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<any>;
  userName: any;
  showHeaderandNavigator$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private service: GateWayService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.service.isLoggedIn;
    this.showHeaderandNavigator$ = this.service.currentRoute;
    this.service.UserName.subscribe(res => {
      this.userName = res;
    });

  }
}
