import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './validator.component.html',
  styleUrl: './validator.component.scss',
})
export class ValidatorComponent {
  @Input() control!: AbstractControl | null;

  get message(): string | null {
    const { touched, errors } = this.control || {};

    if (touched) {
      if (errors?.['required']) {
        return 'VALIDATOR.REQUIRED';
      }
    }
    return null;
  }
}
