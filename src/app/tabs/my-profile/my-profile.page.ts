import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Profile } from 'src/app/shared/models/Profile';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.page.html',
  styleUrls: ['my-profile.page.scss']
})
export class MyProfilePage {

  profile: Profile;
  localDateFormat: string;

  constructor(
    private configService: ConfigService
  ) { }

  ionViewWillEnter() {
    this.localDateFormat = this.configService.getLocaleDateFormat();
    this.profile = {} as Profile;
  }

  onReorderPhoto(event: any) {
    const detail = event.detail as ItemReorderEventDetail;

    detail.complete();
  }

  openPhotoPicker() {
    // TODO: Open photo picker
    console.log('Open photo picker');
  }

  openPhotoPreview() {
    // TODO: Open photo preview
    console.log('Open photo preview');
  }


}
