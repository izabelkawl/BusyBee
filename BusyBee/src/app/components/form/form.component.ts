import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    ButtonComponent
  ],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() set config(config: IConfigItem[]) {
    config.forEach((item: IConfigItem) => {
      this.formGroup.addControl(item.formControlName, new FormControl(null));
    });

    this._config = config;
  }
  @Input() submitTitle!: string;

  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  get config(): IConfigItem[] {
    return this._config;
  }

  public formGroup: FormGroup = new FormGroup({});

  private _config!: IConfigItem[];

  public onSubmit(): void {
    this.submit.emit();
  }
}

export interface IConfigItem {
  formControlName: string;
  type: string;
  label: string;
  placeholder: string;
}
