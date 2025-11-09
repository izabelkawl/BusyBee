import { MatIcon } from '@angular/material/icon';
import { UpperCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITask } from 'src/app/state/models/task.model';
import { ButtonComponent } from '../button/button.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [
    TranslateModule,
    MatIcon,
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    UpperCasePipe,
    FormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() task!: ITask | undefined;

  @Output() closedModal = new EventEmitter<CloseModal>();

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    fullName: new FormControl(null),
    updatedAt: new FormControl(null),
    description: new FormControl(null),
  });

  ngOnInit(): void {
    if (this.task) {
      this.form.patchValue(this.task);
    }
  }

  closeModal(action: actionType): void {
    this.closedModal.emit({ action, data: this.form.value });
  }
}

export interface CloseModal {
  action: actionType;
  data: any;
}

type actionType = 'CLOSE' | 'EDIT' | 'DELETE';
