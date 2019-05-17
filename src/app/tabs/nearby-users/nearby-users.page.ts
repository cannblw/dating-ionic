import { Component } from '@angular/core';
import { Profile } from '../../shared/models/Profile';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nearby-users',
  templateUrl: 'nearby-users.page.html',
  styleUrls: ['nearby-users.page.scss']
})
export class NearbyUsersPage {

  findNearbySub: Subscription;

  profiles: Profile[];

  constructor(
    private profileService: ProfileService
  ) { }

  ionViewWillEnter() {
    this.findNearbySub = this.profileService.findNearby().subscribe(profiles => {
      this.profiles = profiles;
    });
  }


  ionViewDidLeave() {
    this.findNearbySub.unsubscribe();
  }


}
