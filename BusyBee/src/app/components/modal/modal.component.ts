import { MatIcon } from '@angular/material/icon';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/state/models/task.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [TranslateModule, DatePipe, MatIcon, ButtonComponent, UpperCasePipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() task!: ITask | undefined;

  @Output() closedModal = new EventEmitter<void>();

  closeModal(): void {
    this.closedModal.emit();
  }
}
