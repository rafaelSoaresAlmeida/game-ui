import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private loginService: LoginService) {}

  checkAuthentication(activateRoute: ActivatedRouteSnapshot): boolean {
    const path = activateRoute.routeConfig?.path || '';

    const loggedIn = this.loginService.isLoggedIn();

    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    const path = route.path || '';
    const loggedIn = this.loginService.isLoggedIn();

    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canActivate(
    activateRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): boolean {
    return this.checkAuthentication(activateRoute);
  }
}
