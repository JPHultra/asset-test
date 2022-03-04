import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import { SessionInterface } from './session-interface';
import { SessionServiceService as SessionService } from './session-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Asset Test';

  session: SessionInterface = { logged: false, name: '', img: '', token: '', id: '' };

  constructor(private router: Router, private _sessionService: SessionService) {
    this.session = _sessionService.getSession();
  }

  ngOnInit(): void {
    //Get previous session
    if(localStorage.getItem("token") == "true"){
      this.session.logged = true;
      this.router.navigate(['/dashboard'])
    }else{
      this.session.logged = false;
      this.router.navigate(['/'])
    }
  }
}
