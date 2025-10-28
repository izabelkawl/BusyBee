import { addTask, loadTasks } from './../../state/actions/task.action';
import { selectAllTasks } from './../../state/selectors/task.selector';
import { ITask } from './../../state/models/task.model';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { ListComponent } from 'src/app/components/list/list.component';
import { loadStatuses } from 'src/app/state/actions/status.action';
import { IStatus } from 'src/app/state/models/status.model';
import { AppState } from 'src/app/state/reducers';
import { selectAllStatuses } from 'src/app/state/selectors/status.selector';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
    selector: 'app-dashboard',
    imports: [
    TranslateModule,
    AsyncPipe,
    ListComponent,
    ModalComponent
],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  readonly #store = inject(Store<AppState>);

  statuses$!: Observable<IStatus[]>;
  tasks$!: Observable<ITask[]>;

  modalConfig: { visible: boolean; task?: ITask } = { visible: false };

  ngOnInit(): void {
    this.statuses$ = this.#store.select(selectAllStatuses).pipe(
      map((statuses) => {
        const sorted = Array.from(statuses).sort((a, b) => a.order - b.order);
        return sorted;
      }),
    );
    this.tasks$ = this.#store.select(selectAllTasks).pipe(
      map((tasks) => {
        const sorted = Array.from(tasks).sort((a, b) => a.order - b.order);
        return sorted;
      }),
    );
    this.#store.dispatch(loadTasks());
    this.#store.dispatch(loadStatuses());
  }

  addTask(id: number): void {
    this.#store.dispatch(
      addTask({
        task: {
          statusId: id,
          updatedAt: new Date(),
          title: '',
          description: '',
          id: 999,
          order: 9999,
          userId: 22,
          fullName: 'Adam Nowak',
        },
      }),
    );
  }

  editTask(task: ITask): void {
    this.modalConfig = {
      visible: true,
      task,
    };
  }

  taskByStatusId(id: number): Observable<ITask[]> {
    return this.#store.select(selectAllTasks).pipe(
      map((tasks) => {
        const sorted = tasks
          .filter((task: ITask) => task.statusId === id)
          .sort((a, b) => a.order - b.order);
        return sorted;
      }),
    );
  }
}
