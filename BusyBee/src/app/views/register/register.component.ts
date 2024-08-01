import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { IConfig } from 'src/app/components/form/form.models';

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
      label: 'NICK',
      placeholder: '',
      type: 'input',
    },
    {
      formControlName: 'email',
      label: 'E_MAIL',
      placeholder: 'abc@gmail.com',
      type: 'input',
    },
    {
      formControlName: 'password',
      label: 'PASSWORD',
      placeholder: '********',
      type: 'input',
    },
    {
      formControlName: 'password2',
      label: 'REPEAT_PASSWORD',
      placeholder: '********',
      type: 'input',
    },
  ];

  sendForm(): void {}
}
