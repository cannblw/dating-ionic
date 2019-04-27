import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: Profile;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    // TODO: Change id to variable from route
    this.profileService.findById(23).subscribe(profile => {
      this.profile = profile;
    });
  }

}
