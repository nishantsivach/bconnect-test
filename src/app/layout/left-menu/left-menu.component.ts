import { Component } from '@angular/core';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { ExpandableMenuComponent } from './components/expandable-menu/expandable-menu.component';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [MenuListComponent, ExpandableMenuComponent],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {

}
