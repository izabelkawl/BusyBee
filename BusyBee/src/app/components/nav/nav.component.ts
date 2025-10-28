import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from 'src/app/core/lang.service';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [
    RouterModule,
    MatIcon,
    TranslateModule,
    ButtonComponent,
    MatMenu,
    MatMenuModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly #router = inject(Router);
  readonly #langService = inject(LangService);

  constructor(private authService: AuthService) {}

  public changeLang(): void {
    this.#langService.changeLang();
  }

  public logout(): void {
    this.authService.logout();
  }

  public get userLogged(): boolean {
    return this.#router.url.includes('dashboard');
  }
}
