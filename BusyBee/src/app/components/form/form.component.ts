import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputFieldComponent, FormsModule, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() set config(config: IConfigItem[]) {
    config.forEach((item: IConfigItem) => {
      this.formGroup.addControl(item.formControlName, new FormControl(null));
    });
    console.log(this.formGroup);

    this._config = config;
  }

  @Output() formGroupEmit: EventEmitter<FormGroup> =
    new EventEmitter<FormGroup>();

  get config(): IConfigItem[] {
    return this._config;
  }

  public formGroup: FormGroup = new FormGroup({});

  _config!: IConfigItem[];
}

export interface IConfigItem {
  formControlName: string;
  type: string;
  label: string;
  placeholder: string;
}
