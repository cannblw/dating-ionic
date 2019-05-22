import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NearbyUsersPage } from './nearby-users.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NearbyUsersPageRoutingModule } from './nearby-users-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    NearbyUsersPageRoutingModule
  ],
  declarations: [NearbyUsersPage]
})
export class NearbyUsersPageModule {}
