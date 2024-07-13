import { createAction, props } from '@ngrx/store';
import { ITask } from './../models/task.model';

export const addTask = createAction(
  '[Task] Add task',
  props<{ task: ITask }>()
);

export const updateTask = createAction(
  '[Task] Update task',
  props<{ task: ITask }>()
);

export const deleteTask = createAction(
  '[Task] Delete task',
  props<{ id: number }>()
);

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: ITask[] }>());
