import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
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
    private translate: TranslateService
  ) {
    this.initializeApp();

    // TODO: Set fallback language to 'en'
    const fallbackLanguage = 'es';

    // This language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(fallbackLanguage);

    // Set language based on browser language
    const browserLang = this.translate.getBrowserLang();

    if (browserLang !== undefined) {
      this.translate.use(browserLang);
    } else {
      this.translate.use(fallbackLanguage);
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
