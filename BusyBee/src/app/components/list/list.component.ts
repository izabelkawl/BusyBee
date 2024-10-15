import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IStatus } from 'src/app/state/models/status.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [UpperCasePipe, MatIcon],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() list!: IStatus;

  @Output() addTaskEvent: EventEmitter<number> = new EventEmitter();

  tempList: string[] = [];

  addTask(): void {
    this.tempList.push(this.list.list[0]);
    this.addTaskEvent.emit(this.list.id);
  }
}
