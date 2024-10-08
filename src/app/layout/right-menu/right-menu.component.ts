import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';


@Component({
  selector: 'app-right-menu',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.scss'
})
export class RightMenuComponent {

}
