import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: 'my-profile.page.html',
  styleUrls: ['my-profile.page.scss']
})
export class MyProfilePage {

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
