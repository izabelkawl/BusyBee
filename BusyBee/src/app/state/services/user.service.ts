import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.mode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  #httpClient = inject(HttpClient);

  getUsers(): Observable<Array<IUser>> {
    return this.#httpClient.get<Array<IUser>>('');
  }
}
