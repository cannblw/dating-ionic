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
  }

  private async initializeApp(): Promise<void> {
    await this.platform.ready();
    if (this.platform.is('cordova')) {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    }

    await this.initializeTranslations();
    this.overrideIonicConfig();
  }
  
  private initializeTranslations(): Promise<any> {
    // TODO: Set fallback language to 'en'
    const fallbackLanguage = 'es';
    
    // This language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang(fallbackLanguage);
    
    // Set language based on browser language
    const browserLang = this.translate.getBrowserLang();
    
    if (browserLang !== undefined) {
      return this.translate.use(browserLang).toPromise();
    } else {
      return this.translate.use(fallbackLanguage).toPromise();
    }
  }

  private overrideIonicConfig(): void {
    if (this.platform.is('ios')) {
      this.configService.set('backButtonText', this.translate.instant('backButtonText'));
    }
  }
}
