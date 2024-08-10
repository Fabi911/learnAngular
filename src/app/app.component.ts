import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InfoBoxComponent} from "./info-box/info-box.component";

@Component({
  selector: 'currywurst',
  standalone: true,
  imports: [RouterOutlet, InfoBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';

}
