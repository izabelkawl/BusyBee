import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './effects/task.effects';
import { StatusEffects } from './effects/status.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TaskEffects, StatusEffects]),
  ],
})
export class StateModule {}
