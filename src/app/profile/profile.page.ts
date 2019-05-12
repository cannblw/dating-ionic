import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';
import { ProfileService } from '../services/profile.service';
import { Photo } from '../models/Photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  id: number;
  profile: Profile;

  isOwnProfile: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.isOwnProfile = this.id ? false : true;

    // TODO: Change id to variable from route
    this.profileService.findById(23).subscribe(profile => {
      this.profile = profile;
    });
  }

  trackByPhotoId(_: number, item: Photo) {
    return item.id;
  }

}
