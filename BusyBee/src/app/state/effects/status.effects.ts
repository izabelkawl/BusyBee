import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { StatusService } from '../services/status.service';

@Injectable()
export class StatusEffects {
  #actions = inject(Actions);
  #statusService = inject(StatusService);

  loadStatus$ = createEffect(() =>
    this.#actions.pipe(
      ofType('[Status] Load Status'),
      mergeMap(() =>
        this.#statusService
          .getStatuses()
          .pipe(map((statuses) => ({ type: '[Status] Load Status', statuses })))
      )
    )
  );
}
