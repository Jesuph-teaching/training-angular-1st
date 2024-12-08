import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styles: `
  p{
    color:red;
  }
  `,
})
export class AppComponent {
  title = 'training-1st';
}
