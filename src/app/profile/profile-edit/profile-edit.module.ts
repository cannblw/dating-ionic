import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';
import { ProfileEditPage } from './profile-edit.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ProfileEditPageRoutingModule
  ],
  declarations: [ProfileEditPage]
})
export class ProfileEditPageModule { }
