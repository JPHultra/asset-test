import { Injectable } from '@angular/core';

import { SessionInterface } from './session-interface';

@Injectable({
  providedIn:'root',
})
export class SessionServiceService {

  private _session: SessionInterface = { logged: false, name: 'User', img: '', token: '', id: '' };

  updateSession(session: SessionInterface) {
    this._session = session;
  }

  getSession(): SessionInterface {
    return this._session;
  }

}
