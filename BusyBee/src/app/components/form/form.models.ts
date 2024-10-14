import {  ValidatorFn } from "@angular/forms";
import { InputTypes } from "./input-field/input-field.models";

export interface IConfig {
    formControlName: string;
    placeholder: string;
    type: InputTypes;
    validators?: ValidatorFn[];
  }
  