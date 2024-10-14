import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { IConfig } from './form.models';
import { ValidatorComponent } from './validator/validator.component';

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
    ValidatorComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() set config(config: IConfig[]) {
    config.forEach((item: IConfig) => {
      this.formGroup.addControl(item.formControlName, new FormControl(null));
      item.validators && this.formGroup.get(item.formControlName)?.addValidators(item.validators);
    });

    this._config = config;
  }

  @Input() submitTitle!: string;

  @Output() submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public formGroup: FormGroup = new FormGroup({});

  private _config!: IConfig[];

  get config(): IConfig[] {
    return this._config;
  }

  public onSubmit(): void {
    this.submit.emit(this.formGroup);
  }
}
