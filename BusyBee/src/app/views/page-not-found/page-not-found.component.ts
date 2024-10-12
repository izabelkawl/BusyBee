import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [TranslateModule],
  template: '<h1 class="title">{{ "PAGE_NOT_FOUND" | translate }}</h1>',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
