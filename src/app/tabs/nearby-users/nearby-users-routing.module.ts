import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NearbyUsersPage } from './nearby-users.page';

const routes: Routes = [
  { path: '', component: NearbyUsersPage }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NearbyUsersPageRoutingModule { }
