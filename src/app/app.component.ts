import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonDirective } from '../../projects/primary-button-directive/src/lib/primary-button.directive';
import { PrimaryIconButtonDirective } from '../../projects/primary-icon-button-directive/src/lib/primary-icon-button.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimaryButtonDirective, PrimaryIconButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buttons';
}