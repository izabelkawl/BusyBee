import { createAction, props } from '@ngrx/store';
import { IStatus } from '../models/status.model';

export const addStatus = createAction(
  '[Status] Add status',
  props<{ status: IStatus }>()
);

export const updateStatus = createAction(
  '[Status] Update status',
  props<{ status: IStatus }>()
);

export const deleteStatus = createAction(
  '[Status] Delete status',
  props<{ id: number }>()
);
