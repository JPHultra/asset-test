import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Inject } from '@angular/core';

import { Login } from './login';

import { SessionInterface } from '../session-interface';
import { SessionServiceService as SessionService } from '../session-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  private session: SessionInterface = { logged: false, name: '', img: '', token: '', id: '' };

  constructor(private router: Router, private _sessionService: SessionService) {
    this.session = _sessionService.getSession();
  }

  model = new Login("", "")

  submitted = false;

  onSubmit() {
    localStorage.setItem("token", "true");
    this.session.logged = true;
    this._sessionService.updateSession(this.session);
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
