import { Component } from '@angular/core';

import { Platform, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private configService: Config,
  ) {
    this.initializeApp();

    // TODO: Set fallback language to 'en'
    const fallbackLanguage = 'es';

    // This language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(fallbackLanguage);

    // Set language based on browser language
    const browserLang = this.translate.getBrowserLang();

    if (browserLang !== undefined) {
      this.translate.use(browserLang).subscribe(() => this.setBackButtonText());
    } else {
      this.translate.use(fallbackLanguage).subscribe(() => this.setBackButtonText());
    }
  }

  setBackButtonText(): void {
    // Translate iOS back button text
    if (this.platform.is('ios')) {
      this.configService.set('backButtonText', this.translate.instant('backButtonText'));
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }
}
