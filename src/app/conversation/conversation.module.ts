import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConversationPage } from './conversation.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConversationPageRoutingModule } from './conversation-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConversationPageRoutingModule,
    SharedModule
  ],
  declarations: [ConversationPage]
})
export class ConversationPageModule {}
