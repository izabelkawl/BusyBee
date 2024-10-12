import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { IConfig } from './form.models';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    ButtonComponent,
  ],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() set config(config: IConfig[]) {
    config.forEach((item: IConfig) => {
      this.formGroup.addControl(item.formControlName, new FormControl(null));
    });

    this._config = config;
  }

  @Input() submitTitle!: string;

  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  get config(): IConfig[] {
    return this._config;
  }

  public formGroup: FormGroup = new FormGroup({});

  private _config!: IConfig[];

  public onSubmit(): void {
    this.submit.emit();
  }
}
