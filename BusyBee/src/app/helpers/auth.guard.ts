import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public canActivate(): MaybeAsync<GuardResult> {
    const user = this.authService.user;

    if (user) {
      return true;
    }

    this.router.navigate(['./login']);
    return false;
  }
}
