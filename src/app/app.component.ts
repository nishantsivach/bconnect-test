import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '../web-components/button'
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { RightMenuComponent } from './layout/right-menu/right-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftMenuComponent, RightMenuComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bconnect-knowledgebase';
}
