import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatsPage } from './chats.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatsPageRoutingModule } from './chats-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChatsPageRoutingModule,
    SharedModule
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
