import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user.model';
import { SCORE_API } from '../app.api';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User | null;
  lastUrl: string;
  userNameEvent$ = new EventEmitter<string>();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.httpClient
      .post<any>(`${SCORE_API}/user/login`, {
        email: email,
        password: password,
      })
      .pipe(
        tap((resp) => {
          (this.user = {
            name: resp.name,
            email: resp.email,
            token: resp.token,
          }),
            this.userNameEvent$.emit(this.user.name);
        })
      );
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

  logout() {
    this.user = null;
    this.router.navigateByUrl('/#');
    if (this._document.defaultView) {
      this._document.defaultView.location.reload();
    }
  }
}
