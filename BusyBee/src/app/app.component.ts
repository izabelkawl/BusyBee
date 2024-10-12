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
    this.#langService.setDefaultLang();
    this.tasks$ = this.#store.select(selectAllTasks);
    this.#store.dispatch(loadTasks());
    this.testEP();
  }

  changeLang(): void {
    this.#langService.changeLang();
  }

  testEP(): void {
    this.http
      .get('https://busybee.lipam.dev/hello', {
        headers: {
          Authorization: 'Basic dXNlcjpwYXNzd29yZA==',
          Accept: 'application/json',
          'User-Agent': 'IntelliJ HTTP Client/IntelliJ IDEA 2024.1.4',
          'Accept-Encoding': 'br, deflate, gzip, x-gzip',
          Cookie: 'JSESSIONID=7F2B9C83341B2191DF7E8DE2086E3884',
        },
      })
      .subscribe((vas) => {
        console.log(vas);
      });
  }
}
