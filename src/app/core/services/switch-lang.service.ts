import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwitchLangService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  swichLang(lang: string) {
    localStorage.setItem('lang', lang);
    if (lang === 'ar') {
      this.document.documentElement.dir = 'rtl';
      this.document.documentElement.lang = 'ar';
    } else {
      this.document.documentElement.dir = 'ltr';
      this.document.documentElement.lang = 'en';
    }
  }
}
