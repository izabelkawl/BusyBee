import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITaskState } from '../models/task.model';

export const selectTaskState = createFeatureSelector<ITaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: ITaskState) => state.tasks
);
