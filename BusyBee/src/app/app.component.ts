import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/reducers';
import { loadTasks } from './state/actions/task.action';
import { selectAllTasks } from './state/selectors/task.selector';
import { ITask } from './state/models/task.model';
import { LangService } from './core/lang.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly #store = inject(Store<AppState>);
  readonly #langService = inject(LangService);

  readonly http = inject(HttpClient);

  tasks$!: Observable<ITask[]>;

  ngOnInit(): void {
    this.tasks$ = this.#store.select(selectAllTasks);
    this.#store.dispatch(loadTasks());
    this.testEP();
  }

  changeLang(): void {
    this.#langService.changeLang();
  }

  testEP(): void {
    this.http
      .post('https://busybee.lipam.dev/hello', {
        headers: new HttpHeaders({
          Authorization: 'Basic dXNlcjpwYXNzd29yZA==',
        }),
      })
      .subscribe((vas) => {
        console.log(vas);
      });
  }
}
