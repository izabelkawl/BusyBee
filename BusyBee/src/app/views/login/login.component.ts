import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormComponent } from 'src/app/components/form/form.component';
import { IConfig } from 'src/app/components/form/form.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormComponent, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  @ViewChild('loginForm') loginForm!: TemplateRef<LoginComponent>;

  config: IConfig[] = [
    {
      formControlName: 'email',
      placeholder: 'LOGIN.E_MAIL',
      type: 'email',
      validators: [Validators.required, Validators.email],
    },
    {
      formControlName: 'password',
      placeholder: 'LOGIN.PASSWORD',
      type: 'password',
      validators: [Validators.required],
    },
  ];

  sendForm(formGroup: FormGroup): void {
    const { email, password } = formGroup.value;

    this.authService
      .login(email, password)
      .pipe(
        tap((value) => {
          this.authService.setUser(value);
          this.router.navigate(['/dashboard']);
        }),
        catchError((err) => {
          return throwError(err);
        }),
      )
      .subscribe();
  }
}
