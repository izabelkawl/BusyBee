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
})
export class AppComponent implements AfterViewInit {
  readonly #store = inject(Store<AppState>);
  readonly #langService = inject(LangService);

  readonly http = inject(HttpClient);

  tasks$!: Observable<ITask[]>;

  hideLoader = false;

  ngAfterViewInit(): void {
    this.#langService.setDefaultLang();
    this.tasks$ = this.#store.select(selectAllTasks);
    this.#store.dispatch(loadTasks());
    this.testEP();
    this.setBees();
  }

  setBees(): void {
    const bees = document.querySelectorAll('.bee');
    bees.forEach(function (bee: any) {
      const size = Math.floor(Math.random() * (100 - 50 + 1) + 50) + 'px';

      bee.style.width = size;
      bee.style.height = size;
      bee.style.top = `calc(${Math.random() * 100 + '%'} - ${size})`;
      bee.style.left = `calc(${Math.random() * 100 + '%'} - ${size})`;
    });

    setTimeout(() => {
      this.hideLoader = true;
    }, 2000);
  }

  changeLang(): void {
    this.#langService.changeLang();
  }

  testEP(): void {
    this.http
      .get('https://busybee.lipam.dev/hello', {
        headers: {
          Authorization: 'Basic dXNlcjpwYXNzd29yZA==',
        },
      })
      .subscribe((vas) => {
        console.log(vas);
      });
  }
}
