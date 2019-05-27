import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'my-profile', children: [
          { path: '', loadChildren: './my-profile/my-profile.module#MyProfilePageModule' }
        ]
      },
      {
        path: 'nearby-users', children: [
          { path: '', loadChildren: './nearby-users/nearby-users.module#NearbyUsersPageModule' }
        ]
      },
      {
        path: 'chats', children: [
          { path: '', loadChildren: './chats/chats.module#ChatsPageModule' }
        ]
      },
      { path: '', redirectTo: '/tabs/nearby-users', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/nearby-users', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
