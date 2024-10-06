import { Component } from '@angular/core';
import { ChannelTabsComponent } from '../channel-tabs/channel-tabs.component';

@Component({
  selector: 'app-channel-body',
  standalone: true,
  imports: [ChannelTabsComponent],
  templateUrl: './channel-body.component.html',
  styleUrl: './channel-body.component.scss'
})
export class ChannelBodyComponent {

}
