import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {InfoBoxComponent} from "./info-box/info-box.component";
import {NewBoxComponent} from "./new-box/new-box.component";

@Component({
  selector: 'currywurst',
  standalone: true,
  imports: [RouterOutlet, InfoBoxComponent, RouterLink, NewBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';

}
