import { Component } from '@angular/core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {
  newText : string = 'Hello, World!';

  isHidden : boolean = false;
  toggleVisibility() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }

}
