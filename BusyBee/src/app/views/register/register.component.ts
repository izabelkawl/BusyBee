import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { IConfig } from 'src/app/components/form/form.models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: TemplateRef<RegisterComponent>;

  config: IConfig[] = [
    {
      formControlName: 'login',
      label: 'Nazwa użytkownika',
      placeholder: 'Podaj login :)',
      type: 'input',
    },
    {
      formControlName: 'email',
      label: 'E-mail',
      placeholder: 'Podaj e-mail :)',
      type: 'input',
    },
    {
      formControlName: 'password',
      label: 'Hasło',
      placeholder: '********',
      type: 'input',
    },
    {
      formControlName: 'password2',
      label: 'Powtórz hasło',
      placeholder: '********',
      type: 'input',
    },
  ];

  sendForm(): void {}
}
