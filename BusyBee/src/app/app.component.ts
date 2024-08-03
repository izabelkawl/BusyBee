import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/reducers';
import { loadTasks } from './state/actions/task.action';
import { selectAllTasks } from './state/selectors/task.selector';
import { ITask } from './state/models/task.model';
import { LangService } from './core/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks$: Observable<ITask[]>;

  constructor(
    private store: Store<AppState>,
    private langService: LangService,
  ) {
    this.tasks$ = this.store.select(selectAllTasks);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  changeLang(): void {
    this.langService.changeLang();
  }
}
