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
      },
      {
        id: 2352,
        order: 2,
        name: 'implementing',
      },
      {
        id: 3345,
        order: 3,
        name: 'code review',
      },
    ]);
    // return this.#httpClient.get<Array<IStatus>>('');
  }
}
