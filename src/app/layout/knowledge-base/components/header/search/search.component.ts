import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '../../../../../../web-components/input'
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
