import {  ValidatorFn } from "@angular/forms";

export interface IConfig {
    formControlName: string;
    placeholder: string;
    type: string;
    validators?: ValidatorFn[];
  }
  