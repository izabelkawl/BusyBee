import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, Validator, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { IConfig } from 'src/app/components/form/form.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: TemplateRef<LoginComponent>;

  config: IConfig[] = [
    {
      formControlName: 'email',
      placeholder: 'LOGIN.E_MAIL',
      type: 'input',
      validators: [Validators.required],
    },
    {
      formControlName: 'password',
      placeholder: 'LOGIN.PASSWORD',
      type: 'input',
      validators: [Validators.required],
    },
  ];

  sendForm(formGroup: FormGroup): void {
    console.log(formGroup.valid);
  }
}
