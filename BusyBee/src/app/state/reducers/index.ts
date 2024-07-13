import { ActionReducerMap } from '@ngrx/store';
import { IStatusState } from '../models/status.model';
import { ITaskState } from '../models/task.model';
import { taskReducer } from './task.reducer';
import { statusReducer } from './status.reducer';

export interface AppState {
  tasks: ITaskState;
  statuses: IStatusState;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: taskReducer,
  statuses: statusReducer,
};
