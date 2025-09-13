import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LangService } from 'src/app/core/lang.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, MatIcon, TranslateModule, ButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  readonly #router = inject(Router);
  readonly #langService = inject(LangService);

  changeLang(): void {
    this.#langService.changeLang();
  }

  public get userLogged(): boolean {
    return this.#router.url.includes('dashboard');
  }
}
