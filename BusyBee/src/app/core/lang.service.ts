import { Injectable } from '@angular/core';
import { SessionStorageKeys } from '../shared/enums/sessions-storage.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  selectedLang!: LangType;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pl'] as LangType[]);
    translate.setDefaultLang(this.lang);
  }

  changeLang(): void {
    this.selectedLang = this.oppositeTranslation;
    this.translate.setDefaultLang(this.selectedLang);

    try {
      sessionStorage?.setItem(SessionStorageKeys.LANG, this.selectedLang);
    } catch (e) {}
  }

  get lang(): LangType {
    try {
      return (sessionStorage?.getItem(SessionStorageKeys.LANG) ??
        'pl') as LangType;
    } catch (e) {
      return this.selectedLang ?? 'pl';
    }
  }

  get oppositeTranslation(): LangType {
    return this.lang === 'en' ? 'pl' : 'en';
  }
}
export type LangType = 'pl' | 'en';
