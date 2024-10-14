import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { IConfig } from 'src/app/components/form/form.models';
import { StrongPasswordRegx } from 'src/app/shared/const/validator-reg.const';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent, TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: TemplateRef<RegisterComponent>;

  config: IConfig[] = [
    {
      formControlName: 'login',
      placeholder: 'REGISTER.NICK',
      type: 'text',
      validators: [Validators.required, Validators.minLength(3)],
    },
    {
      formControlName: 'email',
      placeholder: 'REGISTER.E_MAIL',
      type: 'email',
      validators: [Validators.required, Validators.email],
    },
    {
      formControlName: 'password',
      placeholder: 'REGISTER.PASSWORD',
      type: 'password',
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(StrongPasswordRegx),
      ],
    },
    {
      formControlName: 'password2',
      placeholder: 'REGISTER.REPEAT_PASSWORD',
      type: 'password',
      validators: [Validators.required, Validators.minLength(8)],
    },
  ];

  sendForm(): void {}
}
