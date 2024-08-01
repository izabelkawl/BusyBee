import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { IConfig } from 'src/app/components/form/form.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: TemplateRef<LoginComponent>;

  config: IConfig[] = [
    {
      formControlName: 'login',
      label: 'Login',
      placeholder: 'Podaj login :)',
      type: 'input',
    },
    {
      formControlName: 'password',
      label: 'Hasło',
      placeholder: '********',
      type: 'input',
    },
  ];

  sendForm(): void {console.log('log');
  }
}
