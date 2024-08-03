import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { ListComponent } from 'src/app/components/list/list.component';
import { loadStatuses } from 'src/app/state/actions/status.action';
import { IStatus } from 'src/app/state/models/status.model';
import { AppState } from 'src/app/state/reducers';
import { selectAllStatuses } from 'src/app/state/selectors/status.selector';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslateModule, ListComponent, AsyncPipe, NgIf, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  statuses$: Observable<IStatus[]>;

  constructor(private store: Store<AppState>) {
    this.statuses$ = this.store.select(selectAllStatuses).pipe(
      map((statuses) => {
        const sorted = Array.from(statuses).sort((a, b) => a.order - b.order)
        return sorted;
      }),
    );
    this.store.dispatch(loadStatuses());
  }
}
