import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  #httpClient = inject(HttpClient);

  getStatuses(): Observable<Array<IStatus>> {
    return this.#httpClient.get<Array<IStatus>>('');
  }
}
