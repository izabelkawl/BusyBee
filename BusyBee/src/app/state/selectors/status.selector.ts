import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStatusState } from '../models/status.model';

export const selectStatusState =
  createFeatureSelector<IStatusState>('statuses');

export const selectAllStatuses = createSelector(
  selectStatusState,
  (state: IStatusState) => state.statuses,
);
