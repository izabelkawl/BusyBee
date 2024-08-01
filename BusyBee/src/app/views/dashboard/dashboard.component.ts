import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent, RouterModule, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
