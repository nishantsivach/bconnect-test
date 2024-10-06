import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {


  iconList: {
    id: number,
    icon: string,
    name: string,
    seperator?: boolean
  }[] = [
      {
        id: 1,
        icon: '/assets/icons/chatIcon.svg',
        name: 'Chat'
      },
      {
        id: 2,
        icon: '/assets/icons/broadcast.svg',
        name: 'Broadcast'
      },
      {
        id: 3,
        icon: '/assets/icons/archieve.svg',
        name: 'Archive'
      },
      {
        id: 4,
        icon: '/assets/icons/contact.svg',
        name: 'Contacts'
      },
      {
        id: 5,
        icon: '/assets/icons/teams.svg',
        name: 'Teams',
        seperator: true
      },
      {
        id: 6,
        icon: '/assets/icons/knowledge-base.svg',
        name: 'KnowledgeBase'
      },
      {
        id: 7,
        icon: '/assets/icons/analytics.svg',
        name: 'Analytics'
      },
      {
        id: 8,
        icon: '/assets/icons/archieve.svg',
        name: 'Archive'
      },
      {
        id: 9,
        icon: '/assets/icons/support.svg',
        name: 'Support',
        seperator: true
      }
    ]
}
