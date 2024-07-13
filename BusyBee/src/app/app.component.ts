import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/reducers';
import * as TaskActions from './state/actions/task.action';
import { selectAllTasks } from './state/selectors/task.selector';
import { ITask } from './state/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks$: Observable<ITask[]>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }
}
