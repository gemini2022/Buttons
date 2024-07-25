import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonDirective } from '../../projects/primary-button-directive/src/lib/primary-button.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimaryButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buttons';
}