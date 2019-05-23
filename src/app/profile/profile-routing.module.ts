import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  { path: 'edit', loadChildren: './profile-edit/profile-edit.module#ProfileEditPageModule' },
  { path: ':id', component: ProfilePage },
  { path: '', component: ProfilePage },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
