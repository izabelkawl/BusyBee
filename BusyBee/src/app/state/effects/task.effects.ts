import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { TaskService } from './../services/task.service';
import { loadTasks, loadTasksSuccess } from '../actions/task.action';

@Injectable()
export class TaskEffects {
  #actions = inject(Actions);
  #taskService = inject(TaskService);

  loadTasks$ = createEffect(() =>
    this.#actions.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.#taskService
          .getTasks()
          .pipe(map((tasks) => loadTasksSuccess({ tasks })))
      )
    )
  );
}
