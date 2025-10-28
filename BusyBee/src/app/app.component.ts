import { AfterViewInit, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/reducers';
import { loadTasks } from './state/actions/task.action';
import { selectAllTasks } from './state/selectors/task.selector';
import { ITask } from './state/models/task.model';
import { LangService } from './core/lang.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
  public hideLoader = false;
  readonly #store = inject(Store<AppState>);
  readonly #langService = inject(LangService);
  readonly #http = inject(HttpClient);

  private tasks$!: Observable<ITask[]>;

  ngAfterViewInit(): void {
    this.#langService.setDefaultLang();
    this.tasks$ = this.#store.select(selectAllTasks);
    this.#store.dispatch(loadTasks());
    this.testEP();
  }

  changeLang(): void {
    this.#langService.changeLang();
  }

  testEP(): void {
    this.#http.get('https://busybee.lipam.dev/hello', {
      headers: {
        Authorization: 'Basic dXNlcjpwYXNzd29yZA==',
      },
    });
  }
}
