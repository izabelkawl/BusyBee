import { Component } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  config = [
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
}
