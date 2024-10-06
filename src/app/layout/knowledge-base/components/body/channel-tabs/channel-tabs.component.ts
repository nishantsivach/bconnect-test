import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '../../../../../../web-components/tab'
import '../../../../../../web-components/tab-panel'
import '../../../../../../web-components/toggle'
import '../../../../../../web-components/textarea'
import { NgClass } from '@angular/common';
import { ContactListComponent } from './sub-componets/contact-list/contact-list.component';

@Component({
  selector: 'app-channel-tabs',
  standalone: true,
  imports: [NgClass, ContactListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './channel-tabs.component.html',
  styleUrls: ['./channel-tabs.component.scss', './channel-tabs-mediaqueries.scss']
})
export class ChannelTabsComponent {

  currentIndex: number = 1;

  channelsItem: {
    id: number,
    icon: string,
    name: string,
    status: boolean
  }[] = [
      {
        id: 1,
        icon: '/assets/icons/whatsapp.svg',
        name: 'WhatsApp',
        status: true
      },
      {
        id: 2,
        icon: '/assets/icons/channel-chat.svg',
        name: 'Chats',
        status: true
      },
      {
        id: 3,
        icon: '/assets/icons/google.svg',
        name: 'Google',
        status: false
      },
      {
        id: 4,
        icon: '/assets/icons/messenger.svg',
        name: 'Messenger',
        status: true
      }
    ]

  constructor() { }

  handleTabs(id: number) {
    console.log("check id", id)
    this.currentIndex = id
  }
}
