import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    private modalController: ModalController
  ) { }

  async showSettings() {
    // TODO: Implement
  }

}
