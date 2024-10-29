import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  #httpClient = inject(HttpClient);

  private tasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      order: 2,
      description: 'Description for Task 1',
      statusId: 1123,
      userId: 22,
      fullName: 'Adam Nowak',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Task 2',
      order: 1,
      description: 'Description for Task 2',
      statusId: 3345,
      userId: 22,
      fullName: 'Adam Nowak',
      updatedAt: new Date(),
    },
    {
      id: 3,
      order: 4,
      title: 'Task 3',
      description: 'Description for Task 3',
      statusId: 3345,
      userId: 435,
      fullName: 'Marlena Zima',
      updatedAt: new Date(),
    },
  ];

  getTasks(): Observable<ITask[]> {
    return of(this.tasks);
    // return this.#httpClient.get<Array<ITask>>('');
  }
}
