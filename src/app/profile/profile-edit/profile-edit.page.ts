import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Profile } from 'src/app/shared/models/Profile';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  profile: Profile;
  localeDateFormat: string;

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit() {
    this.profile = {} as Profile;
    this.localeDateFormat = this.configService.getLocaleDateFormat();
  }

}
