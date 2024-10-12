import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStatus } from '../models/status.model';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  #httpClient = inject(HttpClient);

  getStatuses(): Observable<Array<IStatus>> {
    return of([
      {
        id: 1123,
        order: 1,
        name: 'to do',
        list: ['BB - 1', 'BB - 4', 'BB - 9'],
      },
      {
        id: 2352,
        order: 2,
        name: 'implementing',
        list: ['BB - 3', 'BB - 2', 'BB - 8', 'BB - 5', 'BB - 6'],
      },
      {
        id: 3345,
        order: 3,
        name: 'code review',
        list: ['BB - 7'],
      },
    ]);
    // return this.#httpClient.get<Array<IStatus>>('');
  }
}
