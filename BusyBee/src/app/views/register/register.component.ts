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
      placeholder: 'REGISTER.NICK',
      type: 'input',
    },
    {
      formControlName: 'email',
      placeholder: 'REGISTER.E_MAIL',
      type: 'input',
    },
    {
      formControlName: 'password',
      placeholder: 'REGISTER.PASSWORD',
      type: 'input',
    },
    {
      formControlName: 'password2',
      placeholder: 'REGISTER.REPEAT_PASSWORD',
      type: 'input',
    },
  ];

  sendForm(): void {}
}
