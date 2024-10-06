import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  userList: {
    id: number,
    name: string,
    online: boolean
  }[] = [
      {
        id: 1,
        name: 'koen',
        online: true
      },
      {
        id: 2,
        name: 'yannick',
        online: true
      },
      {
        id: 1,
        name: 'rutger',
        online: true
      },
      {
        id: 1,
        name: 'marc',
        online: false
      }
    ]

  departmentList: {
    id: number,
    name: string
  }[] = [
      {
        id: 0,
        name: "Sales",
      },
      {
        id: 1,
        name: "HQ",
      },
      {
        id: 2,
        name: "Dev",
      }
    ]
}
