import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1', children: [
          { path: '', loadChildren: '../tab1/tab1.module#Tab1PageModule' }
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
      { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
