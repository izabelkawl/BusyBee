import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
  #httpClient = inject(HttpClient);

  private tasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      statusId: 1,
      userId: 22,
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      statusId:1,
      userId: 45,
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      statusId: 2,
      userId: 435,
      updatedAt: new Date(),
    },
  ];

  getTasks(): Observable<ITask[]> {
    return of(this.tasks);
    // return this.#httpClient.get<Array<ITask>>('');
  }
}
