import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage implements OnInit {

  chats: any[];

  ngOnInit() {
    // TODO: All this file is mock. Replace with proper code
    this.chats = new Array(5);
  }

  onClickChat(chat: any) {
    console.log('Clicked chat');
  }

}
