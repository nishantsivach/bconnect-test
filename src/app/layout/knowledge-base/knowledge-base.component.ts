import { Component } from '@angular/core';
import { SearchComponent } from './components/header/search/search.component';
import { ChannelBodyComponent } from './components/body/channel-body/channel-body.component';

@Component({
  selector: 'app-knowledge-base',
  standalone: true,
  imports: [SearchComponent, ChannelBodyComponent],
  templateUrl: './knowledge-base.component.html',
  styleUrl: './knowledge-base.component.scss'
})
export class KnowledgeBaseComponent {

}
