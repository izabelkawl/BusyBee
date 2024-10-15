import { createReducer, on } from '@ngrx/store';
import { ITask, ITaskState } from '../models/task.model';
import {
  addTask,
  updateTask,
  deleteTask,
  loadTasksSuccess,
} from './../actions/task.action';

export const initialState: ITaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state: ITaskState, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(updateTask, (state: ITaskState, { task }) => ({
    ...state,
    tasks: state.tasks.map((t: ITask) =>
      t.id === task.id ? { ...t, task } : t
    ),
  })),
  on(deleteTask, (state: ITaskState, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks: [...tasks]
  }))
);
