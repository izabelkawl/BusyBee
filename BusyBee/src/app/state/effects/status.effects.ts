import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { StatusService } from '../services/status.service';
import { loadStatuses } from '../actions/status.action';
import { loadStatusesSuccess } from './../actions/status.action';

@Injectable()
export class StatusEffects {
  #actions = inject(Actions);
  #statusService = inject(StatusService);

  loadStatus$ = createEffect(() =>
    this.#actions.pipe(
      ofType(loadStatuses),
      mergeMap(() =>
        this.#statusService
          .getStatuses()
          .pipe(map((statuses) => loadStatusesSuccess({ statuses }))),
      ),
    ),
  );
}
