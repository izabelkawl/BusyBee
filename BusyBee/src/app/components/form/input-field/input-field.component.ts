import { Component, forwardRef, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
  ],
  templateUrl: './input-field.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() placeholder!: string;
  @Input() label!: string;

  public inputValue!: string;
  public disabled: boolean = false;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  public writeValue(value: string): void {
    this.inputValue = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onBlur(): void {
    this.onTouched();
  }

  public onModelChange(value: string): void {
    this.onChange(value);
  }
}
