import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { ListsComponent } from 'src/app/components/lists/lists.component';
import { loadStatuses } from 'src/app/state/actions/status.action';
import { IStatus } from 'src/app/state/models/status.model';
import { AppState } from 'src/app/state/reducers';
import { selectAllStatuses } from 'src/app/state/selectors/status.selector';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslateModule, AsyncPipe, NgIf, NgFor, ListsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  #store = inject(Store<AppState>);
  statuses$!: Observable<IStatus[]>;

  ngOnInit(): void {
    this.statuses$ = this.#store.select(selectAllStatuses).pipe(
      map((statuses) => {
        const sorted = Array.from(statuses).sort((a, b) => a.order - b.order);
        return sorted;
      }),
    );
    this.#store.dispatch(loadStatuses());
  }
}
