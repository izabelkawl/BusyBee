import { createReducer, on } from '@ngrx/store';
import { IStatus, IStatusState } from '../models/status.model';
import {
  addStatus,
  updateStatus,
  deleteStatus,
} from '../actions/status.action';

export const initialState: IStatusState = {
  statuses: [],
};

export const statusReducer = createReducer(
  initialState,
  on(addStatus, (state: IStatusState, { status }) => ({
    ...state,
    statuses: [...state.statuses, status],
  })),
  on(updateStatus, (state: IStatusState, { status }) => ({
    ...state,
    statuses: state.statuses.map((t: IStatus) =>
      t.id === status.id ? { ...t, status } : t
    ),
  })),
  on(deleteStatus, (state: IStatusState, { id }) => ({
    ...state,
    statuses: state.statuses.filter((status) => status.id !== id),
  }))
);
