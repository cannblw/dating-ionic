import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { getLocaleDateFormat, FormatWidth } from '@angular/common';

@Injectable()
export class ConfigService {

  localeDateFormat: string;

  constructor(
    @Inject(LOCALE_ID) private localeId: string
  ) { }

  getLocaleDateFormat() {
    if (this.localeDateFormat) return this.localeDateFormat;

    if (this.localeId.startsWith('es')) {
      this.localeDateFormat = 'DD-MM-YYYY';
      return this.localeDateFormat;
    }

    if (this.localeId.startsWith('ca')) {
      this.localeDateFormat = 'DD-MM-YYYY';
      return this.localeDateFormat;
    }

    if (this.localeId.startsWith('fr')) {
      this.localeDateFormat = 'DD.MM.YYYY';
      return this.localeDateFormat;
    }

    if (this.localeId.startsWith('en')) {
      this.localeDateFormat = 'MM-DD-YYYY';
      return this.localeDateFormat;
    }

    this.localeDateFormat = 'MM-DD-YYYY';
    return this.localeDateFormat;
  }
}
