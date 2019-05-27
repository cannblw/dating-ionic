import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyProfilePage } from './my-profile.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyProfilePageRoutingModule } from './my-profile-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyProfilePageRoutingModule,
    SharedModule
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
