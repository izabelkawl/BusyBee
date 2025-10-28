import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-validator',
    imports: [TranslateModule],
    templateUrl: './validator.component.html',
    styleUrl: './validator.component.scss',
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ValidatorComponent {
  #translateService = inject(TranslateService);

  @Input() control!: AbstractControl | null;

  get message(): string | null {
    const { touched, errors, value, dirty } = this.control || {};

    if (touched || dirty) {
      if (errors?.['required']) {
        return 'VALIDATOR.REQUIRED';
      }
      if (errors?.['email']) {
        return 'VALIDATOR.EMAIL';
      }
      if (errors?.['pattern']) {
        return this.validatePassword(value);
      }
    }
    return null;
  }

  validatePassword(value: string): string {
    function includeColorClass(value: boolean): string {
      return value ? 'validator__password-success' : '';
    }
    const upperCaseValid = includeColorClass(/[A-Z]/.test(value));
    const lowerCaseValid = includeColorClass(/[a-z]/.test(value));
    const digitValid = includeColorClass(/[0-9]/.test(value));
    const specialCharValid = includeColorClass(/[!@#$%^&*]/.test(value));
    const lengthValid = includeColorClass(value.length >= 8);

    return this.#translateService.instant('VALIDATOR.PASSWORD', {
      upperCaseValid,
      lowerCaseValid,
      digitValid,
      specialCharValid,
      lengthValid,
    });
  }
}
