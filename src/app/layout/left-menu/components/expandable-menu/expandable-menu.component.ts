import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '../../../../../web-components/select'
import '../../../../../web-components/details'

@Component({
  selector: 'app-expandable-menu',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './expandable-menu.component.html',
  styleUrls: ['./expandable-menu.component.scss', './media-queries.scss']
})
export class ExpandableMenuComponent {

  settingsItems: {
    id: number,
    icon: string,
    name: string
  }[] = [
      {
        id: 1,
        icon: '/assets/icons/settings-2.svg',
        name: 'Account Settings'
      },
      {
        id: 2,
        icon: '/assets/icons/channel.svg',
        name: 'Channels'
      },
      {
        id: 3,
        icon: '/assets/icons/integration.svg',
        name: 'Integrations'
      },
      {
        id: 4,
        icon: '/assets/icons/ai-chat.svg',
        name: 'AI Config'
      },
      {
        id: 5,
        icon: '/assets/icons/directions.svg',
        name: 'Group Routing'
      },
      {
        id: 6,
        icon: '/assets/icons/2fa.svg',
        name: 'GDPR'
      },
    ]

  organizationsOptions: {
    id: number,
    name: string
  }[] = [
      {
        id: 1,
        name: 'Bconnect'
      },
      {
        id: 2,
        name: 'Zestgeek'
      }
    ]

  accountOptions: {
    id: number,
    name: string
  }[] = [
      {
        id: 1,
        name: 'Zestgeek.chat'
      },
      {
        id: 2,
        name: 'Bconnect.chat'
      }
    ]

}
