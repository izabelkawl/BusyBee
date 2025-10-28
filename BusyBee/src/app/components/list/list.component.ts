import { DatePipe, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IStatus } from 'src/app/state/models/status.model';
import { ITask } from 'src/app/state/models/task.model';

@Component({
    selector: 'app-list',
    imports: [UpperCasePipe, MatIcon, DatePipe, NgTemplateOutlet],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() config!: IStatus;

  @Input() tasks!: ITask[] | null;

  @Output() addTaskEvent: EventEmitter<number> = new EventEmitter();

  @Output() editTaskEvent: EventEmitter<ITask> = new EventEmitter();

  addTask(): void {
    this.addTaskEvent.emit(this.config.id);
  }

  editTask(task: ITask): void {
    this.editTaskEvent.emit(task);
  }
}
